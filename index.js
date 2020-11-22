"use strict";

const form = document.body.querySelector("form");
const input = form.querySelector("input");

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

const isUserInputCorrect = () => {
  if (input.value.match(/[^1-9]/g)) {
    alert("올바른 값이 아닙니다.");
  } else if (input.value.length !== 3) {
    alert("3자리의 숫자를 입력해주세요.");
  } else if (new Set(input.value).size !== input.value.length) {
    alert("겹치지 않게 숫자를 입력해주세요.");
  } else {
    return true;
  }
  return false;
};

const compareUserInput = (threeBall) => (e) => {
  e.preventDefault();
  const result = {
    strike: 0,
    ball: 0,
    out: 0,
  };
  if (isUserInputCorrect()) {
    threeBall.forEach((v, i) => answerConfirm(v, i, result));
  }
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

const startGame = () => {
  const threeBall = makeThreeBall();
  form.addEventListener("submit", compareUserInput(threeBall));
};

startGame();
