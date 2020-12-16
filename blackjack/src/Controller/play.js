import {$playerNameInput} from '../View/element.js';
import {addBettingScreen, addHandOutCardScreen} from '../View/addScreen.js';
import {isNameInputValid, isAmountValid} from './valid.js';
import {blackjackGame} from '../index.js';

let copyPlayers = [];

export const onSubmitPlayerName = () => {
  const splitedInput = $playerNameInput.value.split(',');
  if (isNameInputValid(splitedInput)) {
    blackjackGame.getPlayers(splitedInput);
    blackjackGame.players.forEach((player) => copyPlayers.push(player.name));

    return getBettingAmount();
  }
};

const getBettingAmount = () => {
  const player = copyPlayers.shift();
  addBettingScreen(player);
  const $button = document.body.querySelector(`#${player}-amount > button`);
  $button.addEventListener('click', onSubmitAmount);
};

const onSubmitAmount = (e) => {
  const $input = e.target.previousElementSibling;
  if (isAmountValid($input.value)) {
    e.target.removeEventListener('click', onSubmitAmount);
    blackjackGame.betPlayer(e.target.dataset.player, $input.value);

    return checkSubmitAmountFinish();
  }
};

const checkSubmitAmountFinish = () => {
  if (copyPlayers[0] === undefined) {
    blackjackGame.handOutCards();

    return addHandOutCardScreen(blackjackGame.players, blackjackGame.dealer);
  }

  return getBettingAmount();
};
