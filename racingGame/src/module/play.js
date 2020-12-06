import RacingCarGame from '../index.js';
import {onSubmittedName, onSubmittedCount} from './event-submit.js';
import {$carNameSubmitBtn, $CountSubmitBtn} from './utils.js';
import {initGame} from './init.js';
import {createRestartButton} from './element/createElement.js';
import {onRemoveResultElement} from './element/removeElement.js';

export let racingCarGame = null;

export const gameStart = () => {
  initGame();
  racingCarGame = new RacingCarGame();
  $carNameSubmitBtn.addEventListener('click', onSubmittedName);
  $CountSubmitBtn.addEventListener('click', onSubmittedCount);
};

export const gameRestart = () => {
  const $restartButton = createRestartButton();
  $restartButton.addEventListener('click', () => {
    onRemoveResultElement();
    gameStart();
  });
};
