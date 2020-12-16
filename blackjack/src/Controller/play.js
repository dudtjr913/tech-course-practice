import {$playerNameInput} from '../View/element.js';
import {addBettingScreen} from '../View/addScreen.js';
import {isNameInputValid, isAmountValid} from './valid.js';
import {blackjackGame} from '../index.js';

export const onSubmitPlayerName = () => {
  const splitedInput = $playerNameInput.value.split(',');
  if (isNameInputValid(splitedInput)) {
    blackjackGame.getPlayers(splitedInput);
    getBettingAmount(blackjackGame.players);
  }
};

const getBettingAmount = (players) => {
  players.forEach((player) => {
    addBettingScreen(player.name);
    const $button = document.body.querySelector(
      `#${player.name}-amount > button`,
    );
    $button.addEventListener('click', onSubmitAmount);
  });
};

const onSubmitAmount = (e) => {
  const $input = e.target.previousElementSibling;
  if (isAmountValid($input.value)) {
    e.target.removeEventListener('click', onSubmitAmount);
    blackjackGame.betPlayer(e.target.dataset.player, $input.value);

    return checkSubmitAmountFinish(e.target.dataset.player);
  }
};

const checkSubmitAmountFinish = (player) => {
  if (player === blackjackGame.players[blackjackGame.players.length - 1].name) {
    blackjackGame.handOutCards();
  }
};
