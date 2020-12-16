import {$blackjackContainer} from './element.js';

export const addBettingScreen = (player, amount) => {
  const $amountDiv = document.createElement('p');
  $amountDiv.id = `${player}-amount`;
  $amountDiv.innerHTML = `
    <div>${player}의 베팅 금액은?</div>
    <input/> <button data-player=${player}>등록</button>
  `;
  $blackjackContainer.appendChild($amountDiv);
};
