export default isInputValid = (userInput, scope) => {
  if (!scope.some((value) => value === parseInt(userInput, 10))) {
    alert('올바른 값을 입력해주세요.');
    return false;
  }

  return true;
};
