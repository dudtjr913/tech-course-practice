import {hideCountElement, hideResultElement} from './element/hideElement.js';
import {$carNameInput, $countInput} from './utils.js';

export const initGame = () => {
  $carNameInput.value = '';
  $countInput.value = '';
  hideCountElement();
  hideResultElement();
};
