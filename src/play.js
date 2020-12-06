import Screen from './class/screen.js';
import Pos from './index.js';
import {optionList, tableList, menuList} from './utils.js';
import isInputValid from './inputvalid.js';
import checkScope from './scope.js';

const screen = new Screen(optionList, tableList, menuList);
const pos = new Pos(tableList, menuList);

const gameStart = () => {
  screen.createMainScreen();
  document.body
    .querySelector('#option-select')
    .addEventListener('submit', onSubmitOption);
};

const onSubmitOption = (e) => {
  const userOption = e.target.children[0];
  if (!isInputValid(userOption.value, checkScope(optionList))) {
    return (userOption.value = '');
  }
  e.target.removeEventListener('submit', onSubmitOption);
  if (userOption.value === '1') {
    return selectTableToRegister();
  }
  if (userOption.value === '2') {
    return selectTableToPay();
  }

  return gameFinish();
};

const selectTableToRegister = () => {
  screen.createTableList();
  document.body
    .querySelector('#table-select')
    .addEventListener('submit', onSubmitTableToRegister);
};

const onSubmitTableToRegister = (e) => {
  const userTable = e.target.children[0];
  if (!isInputValid(userTable.value, checkScope(tableList))) {
    return (userTable.value = '');
  }
  e.target.removeEventListener('submit', onSubmitTableToRegister);

  return selectMenu();
};

const selectMenu = () => {};

gameStart();
