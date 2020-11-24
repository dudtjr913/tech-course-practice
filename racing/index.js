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
    this.position = 0;
  }
}

const checkSubmitedCarName = (carName, carsArray) => {
  const splitCarName = carName.split(",");
  for (const name of splitCarName) {
    if (name.length === 0) return alert("자동차 이름이 공백입니다.");
    if (name.match(/([^a-zA-Z])/g)) return alert("영어가 아닙니다.");
    if (name.length >= 5) return alert("5자리를 초과합니다.");
  }
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

const enterNumberOfTimes = (carsArray) => (e) => {
  e.preventDefault();
  const times = numberOfTimesInput.value;
  if (checkSubmitedNumberOfTimes(times)) {
    numberOfTimesForm.innerText = times;
    const timeInterval = setInterval(() => {
      makeOnResult(carsArray);
      return setTimeout(() => clearInterval(timeInterval), (times - 1) * 1000);
    }, 1000);
  }
  return (numberOfTimesInput.value = "");
};

const prepareSendUserTimesInput = (carsArray) => {
  numberOfTimesWrapper.style.display = "block";
  numberOfTimesForm.addEventListener("submit", enterNumberOfTimes(carsArray));
};

const makeOnResult = (carsArray) => {
  resultText.style.display = "block";
  carsArray.forEach((v) => {
    const random = Math.floor(Math.random() * 9);
    random >= 4 ? v.position++ : null;
    const li = document.createElement("li");
    resultUl.append(li, `${v.name}:${v.position}`);
  });
};

carNameForm.addEventListener("submit", enterCarName);
