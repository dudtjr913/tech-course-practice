import {$countWrapper, $resultWrapper} from './utils.js';

export const showCountElement = () => {
  $countWrapper.style.display = 'block';
};

export const showResultElement = () => {
  $resultWrapper.style.display = 'block';
};

export const makeResultText = (cars) => {
  const $resultDiv = document.createElement('div');
  cars.forEach((car) => {
    $resultDiv.innerHTML += `<div>${car.name}: ${car.distance}</div>`;
  });
  $resultDiv.style.marginBottom = '30px';
  $resultWrapper.appendChild($resultDiv);
};

export const makeWinnerText = (winner) => {
  const $winnerDiv = document.createElement('div');
  $winnerDiv.textContent = `최종 우승자: ${winner}`;
  $resultWrapper.appendChild($winnerDiv);
};
