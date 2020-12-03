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
