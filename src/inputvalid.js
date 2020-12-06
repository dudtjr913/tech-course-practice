import {MAX_MENU_NUMBER} from './utils.js';

const isMenuInputCountValid = (userInput, count) => {
  if (userInput > MAX_MENU_NUMBER - count) {
    return alert('최대 99개 까지만 구매할 수 있습니다.');
  }
  if (userInput.match(/\D/)) {
    return alert('숫자를 입력해주세요.');
  }

  return true;
};

export default function isInputValid(userInput, scope) {
  if (typeof scope === 'number') {
    return isMenuInputCountValid(userInput, scope);
  }
  if (!scope.some((value) => value === parseInt(userInput, 10))) {
    alert('올바른 값을 입력해주세요.');
    return false;
  }

  return true;
}
