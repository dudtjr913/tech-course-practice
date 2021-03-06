import {$resultWrapper} from '../utils.js';

export const createResultText = (cars) => {
  const $resultDiv = document.createElement('div');
  cars.forEach((car) => {
    $resultDiv.innerHTML += `<div>${car.name}: ${car.distance}</div>`;
  });
  $resultDiv.style.marginBottom = '30px';
  $resultWrapper.appendChild($resultDiv);
};

export const createWinnerText = (winner) => {
  const $winnerDiv = document.createElement('div');
  $winnerDiv.textContent = `최종 우승자: ${winner}`;
  $resultWrapper.appendChild($winnerDiv);
};

export const createRestartButton = () => {
  const $restartButton = document.createElement('button');
  $restartButton.textContent = '다시하기';
  $restartButton.id = 'restart-btn';
  $resultWrapper.appendChild($restartButton);

  return $restartButton;
};
