import Car from './class/car.js';

export default class RacingCarGame {
  constructor() {
    this.participants = [];
  }

  pushParticipants(cars) {
    cars.forEach((car) => this.participants.push(new Car(car)));
  }
}

new RacingCarGame();
