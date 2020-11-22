"use strict";

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

makeThreeBall();
