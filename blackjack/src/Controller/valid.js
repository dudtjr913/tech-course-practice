export const isNameInputValid = (splitedInput) => {
  if (!isWord(splitedInput)) {
    return false;
  }
  if (!isDuplicated(splitedInput)) {
    return false;
  }
  if (!isMaxLength(splitedInput)) {
    return false;
  }

  return true;
};

export const isAmountValid = (amount) => {
  if (!isNumber(amount)) {
    return false;
  }

  return true;
};

const isWord = (splitedInput) => {
  if (
    splitedInput.some((name) => name.match(/[^a-zA-Z가-힣]/)) ||
    splitedInput.some((name) => name === '')
  ) {
    alert('한글과 영어만 입력 가능합니다.');
    return false;
  }

  return true;
};

const isDuplicated = (splitedInput) => {
  if (splitedInput.length !== new Set(splitedInput).size) {
    alert('이름이 중복됩니다.');
    return false;
  }

  return true;
};

const isMaxLength = (splitedInput) => {
  if (splitedInput.find((name) => name.length > 10)) {
    alert('이름은 10글자 이하만 가능합니다.');
    return false;
  }

  return true;
};

const isNumber = (amount) => {
  if (amount.match(/\D/) || amount === '') {
    alert('숫자를 입력해주세요.');
    return false;
  }

  return true;
};
