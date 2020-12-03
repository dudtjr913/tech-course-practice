export default function moveCar(car) {
  if (isCarForward()) {
    return (car.distance += '-');
  }
}

const isCarForward = () => {
  if (createRandomNumber() >= 4) {
    return true;
  }

  return false;
};

const createRandomNumber = () => {
  const MAX_NUMBER = 9;
  const randomNumber = Math.floor(Math.random() * (MAX_NUMBER + 1));

  return randomNumber;
};
