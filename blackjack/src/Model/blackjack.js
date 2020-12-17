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
    nowPlayer.cards.push(drawCard(this.cards, 1));
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
