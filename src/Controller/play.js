import {$playerNameInput} from '../View/element.js';
import {isNameInputValid} from './valid.js';

export const onSubmitPlayerName = () => {
  const splitedInput = $playerNameInput.value.split(',');
  if (isNameInputValid(splitedInput)) {
    console.log('good');
  }
};
