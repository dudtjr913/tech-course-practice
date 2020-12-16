import {$playerNameInput} from '../View/element.js';
import {isNameInputValid} from './valid.js';
import {blackjackGame} from '../index.js';

export const onSubmitPlayerName = () => {
  const splitedInput = $playerNameInput.value.split(',');
  if (isNameInputValid(splitedInput)) {
    blackjackGame.getPlayers(splitedInput);
  }
};
