const $carNameSubmit = document.body.querySelector('#car-names-submit');

const onSubmittedName = () => {
  const $carNameInput = document.body.querySelector('#car-names-input');
  if (!isNameValid($carNameInput.value)) {
    return ($carNameInput.value = '');
  }
};

const isNameValid = (value) => {
  const splitedValue = value.split(',');
  if (splitedValue.some((name) => name.length > 5)) {
    return alert('5자리 이하로 입력해주세요.');
  }
  if (splitedValue.some((name) => name.match(/[^a-zA-Z0-9가-힣]/))) {
    return alert('이름이 유효하지 않습니다.');
  }
  if (splitedValue.some((name) => name === '')) {
    return alert('빈칸은 이름이 될 수 없습니다');
  }
  if (splitedValue.length !== new Set(splitedValue).size) {
    return alert('중복된 이름이 있습니다.');
  }

  return true;
};

$carNameSubmit.addEventListener('click', onSubmittedName);
