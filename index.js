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
  }
  input.value = "";
};

const compareUserInput = (e) => {
  e.preventDefault();
  isUserInputCorrect();
};

makeThreeBall();
form.addEventListener("submit", compareUserInput);
