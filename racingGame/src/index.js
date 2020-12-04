import Car from './class/car.js';
import moveCar from './module/move.js';
import showOnProgress from './module/progress.js';
import showWinner from './module/winner.js';
import {gameStart, gameRestart} from './module/play.js';

export default class RacingCarGame {
  constructor() {
    this.participants = [];
  }

  pushParticipants(cars) {
    cars.forEach((car) => this.participants.push(new Car(car)));
  }

  gamePlay(count) {
    for (let i = 0; i < count; i++) {
      this.participants.forEach((car) => moveCar(car));
      showOnProgress(this.participants);
    }
    showWinner(this.participants);

    return gameRestart();
  }
}

gameStart();
