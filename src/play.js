import Screen from './class/screen.js';
import {optionList, tableList, menuList} from './utils.js';
import isInputValid from './inputvalid.js';
import checkScope from './scope.js';

const gameStart = () => {
  const screen = new Screen(optionList, tableList, menuList);
  screen.createMainScreen();
  document.body
    .querySelector('#option-select')
    .addEventListener('submit', onSubmitOption);
};

const onSubmitOption = (e) => {
  e.preventDefault();
  const userOption = e.target.children[0];
  if (!isInputValid(userOption.value, checkScope(optionList))) {
    return (userOption.value = '');
  }
  if (userOption.value === '3') {
    return gameFinish();
  }

  return selectTable(userOption.value);
};

gameStart();
