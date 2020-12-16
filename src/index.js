import Blackjack from './Model/blackjack.js';
import {$playerNameAddButton} from './View/element.js';
import {onSubmitPlayerName} from './Controller/play.js';

export const blackjackGame = new Blackjack();
blackjackGame.getCards();

$playerNameAddButton.addEventListener('click', onSubmitPlayerName);
