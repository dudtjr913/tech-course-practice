import BaseballGame from './index.js';

const game = new BaseballGame();
const $submitBtn = document.body.querySelector('#submit');

const onSubmittedUserInput = (e) => {
  e.preventDefault();
  if (!game.runningGame) {
    return alert('게임을 재시작해주세요.');
  }

  const $userInput = document.body.querySelector('#user-input');
  if (!game.isInputValid($userInput.value)) {
    return ($userInput.value = '');
  }

  const resultText = game.play(game.answer, $userInput.value);

  return game.showUserResult(resultText);
};

$submitBtn.addEventListener('click', onSubmittedUserInput.bind(this));
