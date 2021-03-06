import {$blackjackContainer} from './element.js';

export const addBettingScreen = (player) => {
  const $amountWrapper = document.createElement('p');
  $amountWrapper.id = `${player}-amount`;
  $amountWrapper.innerHTML = `
    <div>${player}의 베팅 금액은?</div>
    <input/> <button data-player=${player}>등록</button>
  `;
  $blackjackContainer.appendChild($amountWrapper);
};

export const addHandOutCardScreen = (players, dealer) => {
  const $cardWrapper = document.createElement('p');
  const playersName = players.map((player) => player.name).join(', ');
  $cardWrapper.innerHTML = `
  <div>딜러와 ${playersName}에게 2장의 카드를 나누었습니다.</div>
  <div>딜러: ${dealer.cards.join(', ')}</div>
  `;
  createCardContext($cardWrapper, players);
  $blackjackContainer.appendChild($cardWrapper);
};

const createCardContext = ($cardWrapper, players) => {
  players.forEach((player) => {
    $cardWrapper.innerHTML += `
    <div>${player.name}카드: ${player.cards.join(', ')}</div>
  `;
  });
};

export const addCheckingMoreCardScreen = (player) => {
  const $moreCardWrapper = document.createElement('p');
  $moreCardWrapper.className = `${player}-more-card`;
  $moreCardWrapper.innerHTML = `
    <div>${player}는 한장의 카드를 더 받겠습니까?(예는 y, 아니오는 n)</div>
    <input /> <button data-take-more-card=${player}>제출</button>
  `;
  $blackjackContainer.appendChild($moreCardWrapper);
};

export const addPlayerCardScreen = (player) => {
  const $playerCardsWrapper = document.createElement('div');
  $playerCardsWrapper.innerHTML = `
    ${player.name}카드: ${player.cards.join(', ')}
  `;
  $blackjackContainer.appendChild($playerCardsWrapper);
};

export const addDealerMoreCardScreen = () => {
  const $dealerMoreCardWrapper = document.createElement('p');
  $dealerMoreCardWrapper.innerHTML = `
    <div>딜러는 16이하라 한장의 카드를 더 받았습니다.</div>
  `;
  $blackjackContainer.appendChild($dealerMoreCardWrapper);
};

export const addResultScreen = (players, dealer) => {
  const $resultWrapper = document.createElement('p');
  $resultWrapper.innerHTML = `
    <div>딜러 카드: ${dealer.cards.join(', ')} - 결과: ${dealer.sumOfCards}
  `;
  createResultContext($resultWrapper, players);
  $blackjackContainer.appendChild($resultWrapper);
};

const createResultContext = ($resultWrapper, players) => {
  players.forEach((player) => {
    const {name, cards, sumOfCards} = player;
    $resultWrapper.innerHTML += `
    <div>${name}카드: ${cards.join(', ')} - 결과: ${sumOfCards}</div>
  `;
  });
};
