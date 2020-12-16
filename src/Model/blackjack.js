import {CARDS, CARDS_SHAPE} from '../constant/constant.js';

export default class Blackjack {
  constructor() {
    this.cards = [];
    this.players = [];
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

  handOutCards() {}

  takeMoreCard(player) {}

  findResult() {}

  calculateProfit() {}
}
