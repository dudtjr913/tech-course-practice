import {createWinnerText} from './element/createElement.js';

export default function showWinner(cars) {
  const winner = checkWinner(cars);
  createWinnerText(winner.join(', '));
}

const checkWinner = (cars) => {
  const largestDistance = checkLargestDistance(cars);
  const winnerCar = cars.filter(
    (car) => car.distance.length === largestDistance,
  );
  const winnerCarName = winnerCar.map((winner) => winner.name);

  return winnerCarName;
};

const checkLargestDistance = (cars) => {
  const distanceArray = [];
  cars.forEach((car) => distanceArray.push(car.distance.length));

  return Math.max(...distanceArray);
};
