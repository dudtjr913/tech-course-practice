"use strict";

const priceForm = document.body.querySelector("#price");
const winningNumbersForm = document.body.querySelector("#winning-numbers-form");
const bonusNumberForm = document.body.querySelector("#bonus-number-form");
const priceInput = priceForm.querySelector("input");
const winningNumbersInput = winningNumbersForm.querySelector("input");
const bonusNumberInput = bonusNumberForm.querySelector("input");

const userLotto = [];
const winningLottoNumbers = [];
const matchingNumbers = {
  three: 0,
  four: 0,
  five: 0,
  six: 0,
};
let bonusNumber = null;

const createLottoNumbers = () => {
  const lottoNumbers = [];
  const numbers = createNumbersToMaxNumber();
  while (lottoNumbers.length < 6) {
    const removedIndex = selectNumber(numbers.length);
    const selectedNumber = numbers.splice(removedIndex, 1);
    lottoNumbers.push(...selectedNumber);
  }

  return lottoNumbers;
};

const createNumbersToMaxNumber = () => {
  const MAX_NUMBER = 45;

  return Array(MAX_NUMBER)
    .fill()
    .map((v, index) => index + 1);
};

const selectNumber = (maxLength) => {
  const randomNumber = Math.floor(Math.random() * maxLength);

  return randomNumber;
};

const isRightPrice = () => {
  const { value } = priceInput;
  if (value.match(/[^0-9]/)) return alert("숫자를 입력해주세요.");
  if (value % 1000 !== 0) return alert("1000의 배수를 입력해주세요.");

  return true;
};

const showPrice = (e) => {
  e.preventDefault();
  if (isRightPrice()) {
    priceForm.replaceWith(priceInput.value);
    pushLottoNumbers();
  }
};

priceForm.addEventListener("submit", showPrice);
