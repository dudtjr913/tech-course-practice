import {$playerNameInput} from '../View/element.js';
import {
  addBettingScreen,
  addHandOutCardScreen,
  addCheckingMoreCardScreen,
  addPlayerCardScreen,
} from '../View/addScreen.js';
import {isNameInputValid, isAmountValid, isAnswerValid} from './valid.js';
import {blackjackGame} from '../index.js';

let playersName = [];

export const onSubmitPlayerName = () => {
  const splitedInput = $playerNameInput.value.split(',');
  if (isNameInputValid(splitedInput)) {
    blackjackGame.getPlayers(splitedInput);
    pushPlayerName(blackjackGame.players);

    return getBettingAmount();
  }
};

const getBettingAmount = () => {
  const playerName = playersName.shift();
  addBettingScreen(playerName);
  const $button = document.querySelector(`#${playerName}-amount > button`);
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
  if (playersName[0] === undefined) {
    blackjackGame.handOutCards();
    addHandOutCardScreen(blackjackGame.players, blackjackGame.dealer);
    pushPlayerName(blackjackGame.players);
    return checkTakingMoreCard();
  }

  return getBettingAmount();
};

const checkTakingMoreCard = () => {
  const playerName = playersName.shift();
  addCheckingMoreCardScreen(playerName);
  const $button = document.querySelector(`#${playerName}-more-card > button`);
  $button.addEventListener('click', onSubmitTakingMoreCard);
};

const onSubmitTakingMoreCard = (e) => {
  const $input = e.target.previousElementSibling;
  if (isAnswerValid($input.value)) {
    e.target.removeEventListener('click', onSubmitTakingMoreCard);
    if ($input.value === 'y') {
      return keepPlayingBlackjack(e.target.dataset.takeMoreCard);
    }
    return checkTakingMoreCard();
  }
};

const keepPlayingBlackjack = (playerName) => {
  const player = blackjackGame.players.find(
    (player) => player.name === playerName,
  );

  addPlayerCardScreen(player);
  addCheckingMoreCardScreen(playerName);
};

const pushPlayerName = (players) => {
  players.forEach((player) => playersName.push(player.name));
};
