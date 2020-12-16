import {$playerNameAddButton} from './View/element.js';
import {onSubmitPlayerName} from './Controller/play.js';

$playerNameAddButton.addEventListener('click', onSubmitPlayerName);
