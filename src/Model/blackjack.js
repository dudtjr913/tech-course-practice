export default class Blackjack {
  constructor() {
    this.cards = [];
    this.players = [];
  }

  getCards() {}

  getPlayers(players) {
    return players.forEach((name) => this.players.push({name}));
  }

  betPlayer(player, amount) {}

  handOutCards() {}

  takeMoreCard(player) {}

  findResult() {}

  calculateProfit() {}
}
