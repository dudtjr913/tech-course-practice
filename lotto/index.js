"use strict";

const priceForm = document.body.querySelector("#price");
const winningNumbersForm = document.body.querySelector("#winning-numbers-form");
const bonusNumberForm = document.body.querySelector("#bonus-number-form");
const priceInput = priceForm.querySelector("input");
const winningNumbersInput = winningNumbersForm.querySelector("input");
const bonusNumberInput = bonusNumberForm.querySelector("input");

const userLotto = [];
const matchingNumbers = {
  three: 0,
  four: 0,
  five: 0,
  fiveBonus: 0,
  six: 0,
};
const winningAmount = {
  three$: 5000,
  four$: 50000,
  five$: 1500000,
  fiveBonus$: 3000000,
  six$: 200000000,
};
const winningLottoNumbers = [];
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

const showLottoNumbers = () => {
  const numbersDiv = document.body.querySelector("#buy-number");
  const lottoUl = document.body.querySelector("#random-lotto");
  numbersDiv.innerText = `${userLotto.length}개를 구매했습니다.`;
  userLotto.map((number) => {
    lottoUl.innerHTML += `<li style="margin-top:5px">[${number}]</li>`;
  });

  return submitWinningNumbers();
};

const submitWinningNumbers = () => {
  const showingInput = document.body.querySelector("#result");
  showingInput.style.visibility = "visible";

  return winningNumbersForm.addEventListener("submit", showWinningNumbers);
};

const compareLottoNumbers = () => {
  for (let i = 0; i < userLotto.length; i++) {
    checkMatchingNumber(userLotto[i]);
  }

  return calculateProfit();
};

const checkMatchingNumber = (userNumber) => {
  let matchingWinningNumber = 0;
  let matchingBonusNumber = 0;
  userNumber.forEach((number) => {
    winningLottoNumbers.includes(number) && matchingWinningNumber++;
    bonusNumber === number && matchingBonusNumber++;
  });

  return checkRating(matchingWinningNumber, matchingBonusNumber);
};

const checkRating = (winningNumber, bonusNumber) => {
  if (winningNumber === 3) return matchingNumbers.three++;
  if (winningNumber === 4) return matchingNumbers.four++;
  if (winningNumber === 5 && bonusNumber === 1)
    return matchingNumbers.fiveBonus++;
  if (winningNumber === 5) return matchingNumbers.five++;
  if (winningNumber === 6) return matchingNumbers.six++;
};

const calculateProfit = () => {
  let sum = 0;
  for (const rating in matchingNumbers) {
    sum += winningAmount[`${rating}$`] * matchingNumbers[rating];
  }
  const profit = parseInt((sum / priceInput.value).toFixed(3), 10);

  return showResult(profit);
};

const showResult = (profit) => {
  const resultDiv = document.body.querySelector("#winning-result");
  const { three$, four$, five$, fiveBonus$, six$ } = winningAmount;
  const { three, four, five, fiveBonus, six } = matchingNumbers;
  resultDiv.innerHTML = `
  <p>당첨 통계<br/>
  -------<br/>
  3개 일치 (${three$}원)- ${three}개<br/>
  4개 일치 (${four$}원)- ${four}개<br/>
  5개 일치 (${five$}원)- ${five}개<br/>
  5개 일치, 보너스 볼 일치 (${fiveBonus$}원)- ${fiveBonus}개<br/>
  6개 일치 (${six$}원)- ${six}개<br/>
  총 수익률은 ${profit}입니다.
  </p>
  `;
};

const showBonusNumber = (e) => {
  e.preventDefault();
  if (!isRightBonusNumber()) return (bonusNumberInput.value = "");
  bonusNumberForm.replaceWith(bonusNumberInput.value);

  return compareLottoNumbers();
};

const isRightBonusNumber = () => {
  const { value } = bonusNumberInput;
  if (value.match(/\D/)) return alert("숫자를 입력해주세요.");
  if (value === "") return alert("아무 숫자도 입력하지 않았습니다.");
  if (value > 45 || value <= 0)
    return alert("1 ~ 45까지의 숫자를 입력해주세요.");
  if (winningLottoNumbers.includes(parseInt(value, 10)))
    return alert("이미 지난 주 당첨 숫자에 포함된 숫자입니다.");

  return (bonusNumber = parseInt(value, 10));
};

const submitBonusNumber = () => {
  const hiddenBonusDiv = document.body.querySelector("#bonus-number");
  hiddenBonusDiv.style.visibility = "visible";

  return bonusNumberForm.addEventListener("submit", showBonusNumber);
};

const showWinningNumbers = (e) => {
  e.preventDefault();
  if (!isRightWinningNumbers()) return (winningNumbersInput.value = "");
  winningNumbersForm.replaceWith(winningNumbersInput.value);

  return submitBonusNumber();
};

const isRightWinningNumbers = () => {
  const value = winningNumbersInput.value.split(",");
  if (value.some((number) => number.match(/\D/) || number === ""))
    return alert("숫자를 입력해주세요.");
  if (value.some((number) => number > 45 || number <= 0))
    return alert("1 ~ 45까지의 숫자를 입력해주세요.");
  if (value.length !== new Set(value).size) return alert("숫자가 중복됩니다.");
  if (value.length !== 6) return alert("6자리의 숫자를 입력해주세요.");

  return value.map((number) => winningLottoNumbers.push(parseInt(number, 10)));
};

const isRightPrice = () => {
  const { value } = priceInput;
  if (value.match(/\D/)) return alert("숫자를 입력해주세요.");
  if (value % 1000 !== 0) return alert("1000의 배수를 입력해주세요.");
  if (value === "") return alert("아무 숫자도 입력하지 않았습니다.");

  return true;
};

const pushLottoNumbers = () => {
  const reps = priceInput.value / 1000;
  for (let i = 1; i <= reps; i++) {
    userLotto.push(createLottoNumbers());
  }

  return showLottoNumbers();
};

const showPrice = (e) => {
  e.preventDefault();
  if (!isRightPrice()) {
    return (priceInput.value = "");
  }
  priceForm.replaceWith(priceInput.value);

  return pushLottoNumbers();
};

priceForm.addEventListener("submit", showPrice);
