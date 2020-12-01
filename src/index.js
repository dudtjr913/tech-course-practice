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
    $submitBtn.addEventListener('submit', onSubmittedUserInput);
  }
  /*play(computerInputNumbers, userInputNumbers) {
     return "결과 값 String";
   }*/
}

new BaseballGame();
