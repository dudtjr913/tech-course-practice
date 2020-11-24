"use strict";

const carNameForm = document.body.querySelector(".car_name");
const carNameInput = carNameForm.querySelector("input");
const numberOfTimesWrapper = document.querySelector(".times_wrapper");
const numberOfTimesForm = numberOfTimesWrapper.querySelector(".times");
const numberOfTimesInput = numberOfTimesForm.querySelector("input");
const resultText = document.body.querySelector(".result_text");
const resultUl = document.body.querySelector(".result_ul");

class Car {
  constructor(name) {
    this.name = name;
    this.position = "";
  }
}

const cars = [];

const enterCarName = (e) => {
  e.preventDefault();
  checkSubmitedCarName(carNameInput.value);
  if (cars.length > 0) {
    carNameForm.innerText = carNameInput.value;
    return prepareToSendUserTimesInput();
  }
  return (carNameInput.value = "");
};

const checkSubmitedCarName = (carName) => {
  const splitCarName = carName.split(",");
  for (const name of splitCarName) {
    if (name.length === 0) return alert("자동차 이름이 공백입니다.");
    if (name.match(/([^a-zA-Z])/g)) return alert("영어가 아닙니다.");
    if (name.length >= 5) return alert("5자리를 초과합니다.");
  }
  if (new Set(splitCarName).size !== splitCarName.length)
    return alert("이름이 중복됩니다.");

  return splitCarName.forEach((name) => cars.push(new Car(name)));
};

const prepareToSendUserTimesInput = () => {
  numberOfTimesWrapper.style.display = "block";

  return numberOfTimesForm.addEventListener("submit", enterNumberOfTimes);
};

const enterNumberOfTimes = (e) => {
  e.preventDefault();
  const times = numberOfTimesInput.value;
  if (checkSubmitedNumberOfTimes(times)) {
    numberOfTimesForm.innerText = times;
    prepareToShowOnResult(times);
  }

  return (numberOfTimesInput.value = "");
};

const checkSubmitedNumberOfTimes = (times) => {
  if (times <= 0) return alert("0보다 큰 숫자를 입력해주세요.");
  if (times.match(/[^0-9]/g)) return alert("숫자가 아닙니다.");
  if (times >= 10) return alert("10미만의 숫자만 입력해주세요.");

  return true;
};

const prepareToShowOnResult = (times) => {
  makeOnResult();
  if (parseInt(times, 10) === 1) return null;
  const showInterval = setInterval(() => {
    makeOnResult();
  }, 1000);

  return setTimeout(() => {
    clearInterval(showInterval);
    getMaxPosition();
  }, (times - 1) * 1000);
};

const makeOnResult = () => {
  resultText.style.display = "block";
  cars.forEach((v) => {
    isPositionPlus(v);
    makeOnCarText(v);
  });

  const carrigaReturn = document.createElement("br");

  return resultUl.lastChild.appendChild(carrigaReturn);
};

const isPositionPlus = (car) => {
  const random = Math.floor(Math.random() * 9);
  if (random >= 4) return (car.position += "-");
};

const makeOnCarText = (car) => {
  const carTextLi = document.createElement("li");
  const carTextDiv = document.createElement("div");
  carTextDiv.innerText = `${car.name} : ${car.position}`;
  carTextLi.appendChild(carTextDiv);

  return resultUl.appendChild(carTextLi);
};

const getMaxPosition = () => {
  const positionArray = cars.map((v) => v.position.length);
  const maxPosition = Math.max(...positionArray);
  const maxPositionCar = cars.filter((v) => v.position.length === maxPosition);

  return getWinnerCar(maxPositionCar);
};

const getWinnerCar = (maxPositionCar) => {
  const winnerCar = maxPositionCar.map((v) => v.name);

  return gameFinishAndShowOnResult(winnerCar);
};

const gameFinishAndShowOnResult = (winnerCar) => {
  const resultDiv = document.createElement("div");
  resultDiv.innerText = `${winnerCar.join(",")}이 최종 우승했습니다.`;

  return document.body.appendChild(resultDiv);
};

carNameForm.addEventListener("submit", enterCarName);
