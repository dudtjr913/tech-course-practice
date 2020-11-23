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
    cars.forEach(() => (carNameForm.innerText = carNameInput.value));
  }
  carNameInput.value = "";
};

carNameForm.addEventListener("submit", enterCarName);
