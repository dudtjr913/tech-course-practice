import RacingCarGame from '../index.js';
import {onSubmittedName, onSubmittedCount} from './event-submit.js';

const $carNameSubmitBtn = document.body.querySelector('#car-names-submit');
const $CountSubmitBtn = document.body.querySelector('#racing-count-submit');

export let racingCarGame = null;

export const gameStart = () => {
  racingCarGame = new RacingCarGame();
  $carNameSubmitBtn.addEventListener('click', onSubmittedName);
  $CountSubmitBtn.addEventListener('click', onSubmittedCount);
};
