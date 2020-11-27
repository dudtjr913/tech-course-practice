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

createLottoNumbers();
