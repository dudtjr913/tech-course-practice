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

const isWord = (splitedInput) => {
  if (splitedInput.find((name) => name.match(/[^a-zA-Z가-힣]/))) {
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
