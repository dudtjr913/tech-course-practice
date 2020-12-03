import RacingCarGame from '../index.js';
import {showCountElement} from './element.js';

const racingCarGame = new RacingCarGame();
const $carNameSubmitBtn = document.body.querySelector('#car-names-submit');
const $CountSubmitBtn = document.body.querySelector('#racing-count-submit');

const onSubmittedName = (e) => {
  const $carNameInput = document.body.querySelector('#car-names-input');
  const splitedValue = $carNameInput.value.split(',');
  if (!isNameValid(splitedValue)) {
    return ($carNameInput.value = '');
  }
  racingCarGame.pushParticipants(splitedValue);
  showCountElement();

  return e.target.removeEventListener('click', onSubmittedName);
};

const isNameValid = (value) => {
  if (value.some((name) => name.length > 5)) {
    return alert('5자리 이하로 입력해주세요.');
  }
  if (value.some((name) => name.match(/[^a-zA-Z0-9가-힣]/))) {
    return alert('이름이 유효하지 않습니다.');
  }
  if (value.some((name) => name === '')) {
    return alert('빈칸은 이름이 될 수 없습니다');
  }
  if (value.length !== new Set(value).size) {
    return alert('중복된 이름이 있습니다.');
  }

  return true;
};

const onSubmittedCount = (e) => {
  const $countInput = document.body.querySelector('#racing-count-input');
  if (!isCountValid($countInput.value)) {
    return ($countInput.value = '');
  }

  return e.target.removeEventListener('click', onSubmittedCount);
};

const isCountValid = (value) => {
  if (value <= 0) {
    return alert('1 이상의 숫자를 입력해주세요.');
  }
  if (value.match(/\D/)) {
    return alert('숫자를 입력해주세요.');
  }

  return true;
};

$carNameSubmitBtn.addEventListener('click', onSubmittedName);
$CountSubmitBtn.addEventListener('click', onSubmittedCount);
