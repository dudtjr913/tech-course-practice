import {$playerNameInput} from '../View/element.js';
import {
  addBettingScreen,
  addHandOutCardScreen,
  addCheckingMoreCardScreen,
  addPlayerCardScreen,
  addDealerMoreCardScreen,
  addResultScreen,
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
    return getPlayerTakingMoreCard();
  }

  return getBettingAmount();
};

const getPlayerTakingMoreCard = () => {
  const playerName = playersName.shift();
  addCheckingMoreCardScreen(playerName);
  addTakingMoreCardButtonEvent(playerName);
};

const addTakingMoreCardButtonEvent = (playerName) => {
  const $button = document.querySelector(
    `.${playerName}-more-card:last-child > button`,
  );
  $button.addEventListener('click', onSubmitTakingMoreCard);
};

const onSubmitTakingMoreCard = (e) => {
  const $input = e.target.previousElementSibling;
  if (isAnswerValid($input.value)) {
    e.target.removeEventListener('click', onSubmitTakingMoreCard);
    checkTakingMoreCard($input.value, e.target.dataset.takeMoreCard);
  }
};

const checkTakingMoreCard = (answer, playerName) => {
  if (answer === 'y') {
    return keepPlayingBlackjack(playerName);
  }
  blackjackGame.pushPlayerCardSumResult(playerName);
  return checkAllPlayerTurnFinish();
};

const keepPlayingBlackjack = (playerName) => {
  blackjackGame.takeMoreCard(playerName);

  const player = blackjackGame.players.find(
    (player) => player.name === playerName,
  );
  addPlayerCardScreen(player);
  addCheckingMoreCardScreen(playerName);
  addTakingMoreCardButtonEvent(playerName);
};

const checkAllPlayerTurnFinish = () => {
  if (playersName[0] === undefined) {
    return showResult();
  }

  return getPlayerTakingMoreCard();
};

const showResult = () => {
  if (blackjackGame.takeDealerMoreCard()) {
    addDealerMoreCardScreen();
  }
  addResultScreen(blackjackGame.players, blackjackGame.dealer);
  blackjackGame.findWinner();
};

const pushPlayerName = (players) => {
  players.forEach((player) => playersName.push(player.name));
};
