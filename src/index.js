export default class BaseballGame {
  constructor() {
    this.answer = this.createAnswerNumber();
    this.runningGame = true;
  }

  createAnswerNumber() {
    const array = this._createMaxNumberArray();
    const answerArray = [];
    while (answerArray.length !== 3) {
      const selectedNumberIndex = this._selectRandomNumber(array.length);
      const selectedNumber = array.splice(selectedNumberIndex, 1);
      answerArray.push(...selectedNumber);
    }

    return answerArray;
  }

  _createMaxNumberArray() {
    const MAX_NUMBER = 9;

    return Array(MAX_NUMBER)
      .fill()
      .map((v, index) => index + 1);
  }

  _selectRandomNumber(range) {
    const numberIndex = Math.floor(Math.random() * range);

    return numberIndex;
  }

  gameStart() {
    const $submitBtn = document.body.querySelector('#submit');
    $submitBtn.addEventListener('click', this.onSubmittedUserInput.bind(this));
  }

  onSubmittedUserInput(e) {
    e.preventDefault();
    if (!this.runningGame) {
      return alert('게임을 재시작해주세요.');
    }

    const userInput = document.body.querySelector('#user-input');
    if (!this.isInputValid(userInput.value)) {
      return (userInput.value = '');
    }
    const resultText = this.play(this.answer, userInput.value);

    return this.showUserResult(resultText);
  }

  isInputValid(value) {
    if (value.match(/\D/) || value.match(/0/)) {
      return alert('1~9까지의 숫자를 입력해주세요.');
    }
    if (value.length !== 3) {
      return alert('3자리의 숫자를 입력해주세요.');
    }
    if (value.length !== new Set(value).size) {
      return alert('중복된 숫자를 입력하셨습니다.');
    }

    return true;
  }

  play(computerInputNumbers, userInputNumbers) {
    console.log(this.answer);
    const strike = this.getStrikeNumber(computerInputNumbers, userInputNumbers);
    const ball = this.getBallNumber(computerInputNumbers, userInputNumbers);
    if (!strike && !ball) {
      return `낫싱`;
    }
    if (!strike) {
      return `${ball}볼`;
    }
    if (!ball) {
      return `${strike}스트라이크`;
    }

    return `${ball}볼 ${strike}스트라이크`;
  }

  getStrikeNumber(answer, userInput) {
    let strike = 0;
    answer.forEach((number, index) => {
      if (number === parseInt(userInput[index], 10)) {
        strike++;
      }
    });

    return strike;
  }

  getBallNumber(answer, userInput) {
    let ball = 0;
    answer.forEach((number, index) => {
      const userInputIndex = userInput.indexOf(number);
      if (userInputIndex >= 0 && index !== userInputIndex) {
        ball++;
      }
    });

    return ball;
  }

  showUserResult(result) {
    const $resultDiv = document.body.querySelector('#result');
    if (result === '3스트라이크') {
      return this.gameFinish();
    }

    return ($resultDiv.innerText = result);
  }

  gameFinish() {
    this.runningGame = false;
    this._createFinishText();
    const $reStartBtn = document.body.querySelector('#game-restart-button');

    return $reStartBtn.addEventListener(
      'click',
      this._onGameReStart.bind(this),
    );
  }

  _createFinishText() {
    const $resultDiv = document.body.querySelector('#result');
    const $reStartText = document.createElement('span');
    const $reStartBtn = document.createElement('button');
    $reStartBtn.id = 'game-restart-button';
    $resultDiv.innerHTML = `<h3>🎉 정답을 맞추셨습니다! 🎉</h3>`;
    $reStartText.innerText = '게임을 새로 시작하시겠습니까? ';
    $reStartBtn.innerText = '게임 재시작';
    $resultDiv.appendChild($reStartText);
    $resultDiv.appendChild($reStartBtn);
  }

  _onGameReStart() {
    const $resultDiv = document.body.querySelector('#result');
    while ($resultDiv.firstChild) {
      $resultDiv.removeChild($resultDiv.firstChild);
    }
    this.runningGame = true;

    return (this.answer = this.createAnswerNumber());
  }
}

const a = new BaseballGame();
a.gameStart();
