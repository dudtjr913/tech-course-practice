const $carNameSubmit = document.body.querySelector('#car-names-submit');

const onSubmittedName = () => {
  const $carNameInput = document.body.querySelector('#car-names-input');
  if (!isNameValid) {
    return ($carNameInput.value = '');
  }
};

$carNameSubmit.addEventListener('click', onSubmittedName);
