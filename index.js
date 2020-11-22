"use strict";

const form = document.body.querySelector("form");
const input = form.querySelector("input");
const finishDiv = form.querySelector("div");
const resultDiv = document.body.querySelector(".result");

let addUserInputEvent = null;

const randomBallSelect = (numberLength) => {
  const randomNumber = Math.floor(Math.random() * numberLength);

  return randomNumber;
};

const makeThreeBall = () => {
  const waitingBall = Array(9)
    .fill()
    .map((v, i) => i + 1);
  const threeBall = [];
  for (let i = 1; i <= 3; i++) {
    const randomBall = randomBallSelect(waitingBall.length);
    const pushBall = waitingBall.splice(randomBall, 1);
    threeBall.push(...pushBall);
  }

  return threeBall;
};

const restartGame = () => {
  finishDiv.classList.remove("finish");
  finishDiv.innerText = "숫자를 입력해주세요 :";
  input.value = "";

  form.removeEventListener("submit", addUserInputEvent);
  return startGame();
};

const isUserInputCorrect = () => {
  if (input.value.match(/[^1-9]/g)) {
    alert("올바른 값이 아닙니다.");
  } else if (input.value.length !== 3) {
    alert("3자리의 숫자를 입력해주세요.");
  } else if (new Set(input.value).size !== input.value.length) {
    alert("숫자가 중복됩니다.");
  } else {
    return true;
  }

  return false;
};

const isRestartGame = () => {
  if (input.value === "1") {
    return restartGame();
  } else if (input.value === "2") {
    return finishGame();
  } else {
    alert("올바른 숫자를 입력해주세요.");
    return false;
  }
};

const compareUserInput = (threeBall) => (e) => {
  e.preventDefault();
  const result = {
    strike: 0,
    ball: 0,
    out: 0,
  };
  if (finishDiv.className !== "finish" && isUserInputCorrect()) {
    threeBall.forEach((v, i) => answerConfirm(v, i, result));
    showOnUserResult(result);
  } else if (finishDiv.className === "finish") {
    return isRestartGame();
  }
  console.log(threeBall);
  input.value = "";
};

const answerConfirm = (answerNumber, answerNumberIndex, result) => {
  const userInputNumberIndex = input.value.indexOf(answerNumber);
  if (userInputNumberIndex !== -1) {
    answerNumberIndex === userInputNumberIndex
      ? result.strike++
      : result.ball++;
  } else {
    result.out++;
  }
};

const showOnUserResult = (result) => {
  resultDiv.innerText = "";
  if (result.strike) {
    if (result.strike === 3) {
      return gameWin();
    }
    resultDiv.innerText = ` ${result.strike}스트라이크`;
  }
  if (result.ball) {
    resultDiv.innerText += ` ${result.ball}볼`;
  }
  if (result.out) {
    if (result.out === 3) {
      return (resultDiv.innerText = "Nothing");
    }
    resultDiv.innerText += ` ${result.out}아웃`;
  }

  return resultDiv;
};

const gameWin = () => {
  finishDiv.classList.add("finish");
  finishDiv.innerText = `3개의 숫자를 모두 맞히셨습니다! 게임 종료
    게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`;
};

const startGame = () => {
  const threeBall = makeThreeBall();
  addUserInputEvent = compareUserInput(threeBall);
  form.addEventListener("submit", addUserInputEvent);
};

startGame();
