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
