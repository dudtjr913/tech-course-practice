import {CARDS, CARDS_SHAPE} from '../constant/constant.js';

export default class Blackjack {
  constructor() {
    this.cards = [];
    this.players = [];
    this.dealer = {};
  }

  getCards() {
    for (let i = 0; i < 4; i++) {
      CARDS.forEach((card) => this.cards.push(card + CARDS_SHAPE[i]));
    }
  }

  getPlayers(players) {
    return players.forEach((name) => this.players.push({name}));
  }

  betPlayer(playerName, amount) {
    const nowPlayer = findNowPlayer(this.players, playerName);
    nowPlayer.betting = amount;
  }

  handOutCards() {
    this.dealer.cards = drawCard(this.cards);

    for (let i = 0; i < this.players.length; i++) {
      this.players[i].cards = drawCard(this.cards, 2);
    }
  }

  takeMoreCard(playerName) {
    const nowPlayer = findNowPlayer(this.players, playerName);
    const oneCard = drawCard(this.cards, 1);
    nowPlayer.cards = [...nowPlayer.cards, ...oneCard];
  }

  pushPlayerCardSumResult(playerName) {
    const nowPlayer = findNowPlayer(this.players, playerName);
    const sumofCards = sumCards(nowPlayer.cards);

    return (nowPlayer.sumofCards = sumofCards);
  }

  checkDealerCard() {
    console.log('dealer');
  }

  findResult() {}

  calculateProfit() {}
}

const drawCard = (cards, count) => {
  const drawnCards = [];
  while (drawnCards.length < count) {
    const randomNumber = Math.floor(Math.random() * cards.length);
    const deletedCard = cards.splice(randomNumber, 1);
    drawnCards.push(...deletedCard);
  }

  return drawnCards;
};

const findNowPlayer = (players, playerName) => {
  const nowPlayer = players.find((player) => player.name === playerName);

  return nowPlayer;
};

const convertCardsToNumber = (cards) => {
  const convertedCards = cards.map((card) => {
    if (card.match(/10|J|Q|K/)) {
      return 10;
    }
    return card.slice(0, 1);
  });

  return parseNumberCards(convertedCards);
};

const parseNumberCards = (cards) => {
  const numberCards = cards.map((card) => {
    if (card === 'A') {
      return card;
    }
    return parseInt(card);
  });

  return numberCards;
};

const sumCards = (cards) => {
  const convertedCards = convertCardsToNumber(cards).sort();
  if (convertedCards.includes('A')) {
    return sumAceCard(convertedCards);
  }
  return convertedCards.reduce((acc, cur) => acc + cur, 0);
};

const sumAceCard = (cards) => {
  const sumOfAceCards = cards.reduce((acc, cur) => {
    if (cur !== 'A') {
      return acc + cur;
    }
    return acc < 11 ? acc + 11 : acc + 1;
  });

  return sumOfAceCards;
};
