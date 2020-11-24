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

const checkSubmitedCarName = (carName, carsArray) => {
  const splitCarName = carName.split(",");
  for (const name of splitCarName) {
    if (name.length === 0) return alert("자동차 이름이 공백입니다.");
    if (name.match(/([^a-zA-Z])/g)) return alert("영어가 아닙니다.");
    if (name.length >= 5) return alert("5자리를 초과합니다.");
  }
  if (new Set(splitCarName).size !== splitCarName.length)
    return alert("이름이 중복됩니다.");
  return splitCarName.forEach((name) => carsArray.push(new Car(name)));
};

const enterCarName = (e) => {
  e.preventDefault();
  const cars = [];
  checkSubmitedCarName(carNameInput.value, cars);
  if (cars.length > 0) {
    carNameForm.innerText = carNameInput.value;
    return prepareSendUserTimesInput(cars);
  }
  return (carNameInput.value = "");
};

const checkSubmitedNumberOfTimes = (times) => {
  if (times <= 0) return alert("0보다 큰 숫자를 입력해주세요.");
  if (times.match(/[^0-9]/g)) return alert("숫자가 아닙니다.");
  if (times >= 10) return alert("10미만의 숫자만 입력해주세요.");
  return true;
};

const prepareShowOnResult = (carsArray, times) => {
  makeOnResult(carsArray);
  if (parseInt(times, 10) === 1) return null;
  const showInterval = setInterval(() => {
    makeOnResult(carsArray);
  }, 1000);
  return setTimeout(() => {
    clearInterval(showInterval);
    getMaxPosition(carsArray);
  }, (times - 1) * 1000);
};

const enterNumberOfTimes = (carsArray) => (e) => {
  e.preventDefault();
  const times = numberOfTimesInput.value;
  if (checkSubmitedNumberOfTimes(times)) {
    numberOfTimesForm.innerText = times;
    prepareShowOnResult(carsArray, times);
  }

  return (numberOfTimesInput.value = "");
};

const prepareSendUserTimesInput = (carsArray) => {
  numberOfTimesWrapper.style.display = "block";
  numberOfTimesForm.addEventListener("submit", enterNumberOfTimes(carsArray));
};

const isPositionPlus = (car) => {
  const random = Math.floor(Math.random() * 9);
  if (random >= 4) {
    if (!car.position) {
      car.position = "-";
      return car.position;
    }
    return (car.position += "-");
  }
};

const makeOnCarText = (car) => {
  const carTextLi = document.createElement("li");
  const carTextDiv = document.createElement("div");
  carTextDiv.innerText = `${car.name} : ${car.position}`;
  carTextLi.appendChild(carTextDiv);
  resultUl.appendChild(carTextLi);
};

const makeOnResult = (carsArray) => {
  resultText.style.display = "block";
  carsArray.forEach((v) => {
    isPositionPlus(v);
    makeOnCarText(v);
  });
  const carrigaReturn = document.createElement("br");
  resultUl.lastChild.appendChild(carrigaReturn);
};

const getMaxPosition = (carsArray) => {
  const positionArray = carsArray.map((v) => v.position.length);
  const maxPosition = Math.max(...positionArray);
  const maxPositionCar = carsArray.filter(
    (v) => v.position.length === maxPosition
  );
  const winnerCar = maxPositionCar.map((v) => v.name);
  gameFinishAndShowOnResult(winnerCar);
};

const gameFinishAndShowOnResult = (winnerCar) => {
  const resultDiv = document.createElement("div");
  resultDiv.innerText = `${winnerCar.join(",")}이 최종 우승했습니다.`;
  document.body.appendChild(resultDiv);
};

carNameForm.addEventListener("submit", enterCarName);
