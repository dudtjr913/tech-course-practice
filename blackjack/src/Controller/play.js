import {$playerNameInput} from '../View/element.js';
import {
  addBettingScreen,
  addHandOutCardScreen,
  addCheckingMoreCardScreen,
} from '../View/addScreen.js';
import {isNameInputValid, isAmountValid} from './valid.js';
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
    return checktakingMoreCard();
  }

  return getBettingAmount();
};

const checktakingMoreCard = () => {
  const playerName = playersName.shift();
  addCheckingMoreCardScreen(playerName);
  const $button = document.querySelector(`#${playerName}-more-card > button`);
  $button.addEventListener('click', onSubmitTakingMoreCard);
};

const onSubmitTakingMoreCard = (e) => {
  const $input = e.target.previousElementSibling;
  if (isAnswerValid($input.value)) {
    if ($input.value === 'y') {
      return keepPlayingBlackjack(e.target.dataset.takeMoreCard);
    }
    e.target.removeEventListener('click', onSubmitTakingMoreCard);
    return checktakingMoreCard();
  }
};

const keepPlayingBlackjack = (playerName) => {
  const playerCards = blackjackGame.players.find(
    (player) => player.name === playerName,
  ).cards;

  addPlayerCardScreen(playerCards);
  addCheckingMoreCardScreen(e.target.dataset.takeMoreCard);
};

const pushPlayerName = (players) => {
  players.forEach((player) => playersName.push(player.name));
};
