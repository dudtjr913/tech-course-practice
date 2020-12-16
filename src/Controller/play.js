import {$playerNameInput} from '../View/element.js';
import isInputValid from './valid.js';

export const onSubmitPlayerName = () => {
  const splitedInput = $playerNameInput.value.split(',');
  if (isInputValid($playerNameInput.value, splitedInput)) {
  }
};
