import {showCountElement, showResultElement} from './element.js';
import {racingCarGame} from './play.js';
import {$carNameInput, $countInput} from './utils.js';
import isInputValid from './inputvalid.js';

export const onSubmittedName = (e) => {
  const splitedValue = $carNameInput.value.split(',');
  if (!isInputValid(splitedValue)) {
    return ($carNameInput.value = '');
  }
  racingCarGame.pushParticipants(splitedValue);
  showCountElement();

  return e.target.removeEventListener('click', onSubmittedName);
};

export const onSubmittedCount = (e) => {
  if (!isInputValid($countInput.value)) {
    return ($countInput.value = '');
  }
  racingCarGame.gamePlay($countInput.value);
  showResultElement();

  return e.target.removeEventListener('click', onSubmittedCount);
};
