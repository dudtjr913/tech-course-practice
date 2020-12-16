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
    const nowPlayer = this.players.find((player) => player.name === playerName);
    nowPlayer.betting = amount;
  }

  handOutCards() {
    this.dealer.cards = drawCard(this.cards);

    for (let i = 0; i < this.players.length; i++) {
      this.players[i].cards = drawCard(this.cards);
    }
  }

  takeMoreCard(player) {}

  findResult() {}

  calculateProfit() {}
}

const drawCard = (cards) => {
  const drawnCards = [];
  while (drawnCards.length < 2) {
    const randomNumber = Math.floor(Math.random() * cards.length);
    const deletedCard = cards.splice(randomNumber, 1);
    drawnCards.push(...deletedCard);
  }

  return drawnCards;
};
