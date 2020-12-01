export default class BaseballGame {
  constructor() {
    this.answer = this.createAnswerNumber();
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
}

const a = new BaseballGame();
a.gameStart();
