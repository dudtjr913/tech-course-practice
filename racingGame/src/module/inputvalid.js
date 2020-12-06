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

const isCountValid = (value) => {
  if (value <= 0) {
    return alert('1 이상의 숫자를 입력해주세요.');
  }
  if (value.match(/\D/)) {
    return alert('숫자를 입력해주세요.');
  }

  return true;
};

export default function isInputValid(value) {
  if (Array.isArray(value)) {
    return isNameValid(value);
  }
  if (typeof value === 'string') {
    return isCountValid(value);
  }
}
