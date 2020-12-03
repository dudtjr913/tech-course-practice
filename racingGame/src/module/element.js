export const showCountElement = () => {
  const $countWrapper = document.body.querySelector('#racing-count-wrapper');
  $countWrapper.style.display = 'block';
};

export const showResultElement = () => {
  const $resultWrapper = document.body.querySelector('#result-wrapper');
  $resultWrapper.style.display = 'block';
};

export const makeResultText = (cars) => {
  const $resultWrapper = document.body.querySelector('#result-wrapper');
  const $resultDiv = document.createElement('div');
  cars.forEach((car) => {
    $resultDiv.innerHTML += `<div>${car.name}: ${car.distance}</div>`;
  });
  $resultDiv.style.marginBottom = '30px';
  $resultWrapper.appendChild($resultDiv);
};

export const makeWinnerText = (winner) => {
  console.log(winner);
  const $resultWrapper = document.body.querySelector('#result-wrapper');
  const $winnerDiv = document.createElement('div');
  $winnerDiv.textContent = `최종 우승자: ${winner}`;
  $resultWrapper.appendChild($winnerDiv);
};
