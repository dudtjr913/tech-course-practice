import Screen from './class/screen.js';
import Pos from './index.js';
import {optionList, tableList, menuList} from './utils.js';
import isInputValid from './inputvalid.js';
import checkScope from './scope.js';

const screen = new Screen(optionList, tableList, menuList);
const pos = new Pos(tableList, menuList);
let userTableNumber = null;
let userMenuNumber = null;

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
  userTableNumber = userTable.value;
  pos.pushUserTable(userTableNumber);
  console.log(pos);

  return selectMenu();
};

const selectMenu = () => {
  screen.createMenuList();
  document.body
    .querySelector('#menu-select')
    .addEventListener('submit', onSubmitMenu);
};

const onSubmitMenu = (e) => {
  const userMenu = e.target.children[0];
  if (!isInputValid(userMenu.value, checkScope(menuList))) {
    return (userMenu.value = '');
  }
  e.target.removeEventListener('submit', onSubmitMenu);
  userMenuNumber = userMenu.value;
  pos.pushUserMenu(userTableNumber, userMenuNumber);
  console.log(pos);
  return enterMenuCount();
};

const enterMenuCount = () => {
  screen.createMenuCountInput();
  document.body
    .querySelector('#menu-count')
    .addEventListener('submit', onSubmitMenuCount);
};

const onSubmitMenuCount = (e) => {
  const menuCount = e.target.children[0];
  const count = finduserMenuCount();
  if (!isInputValid(menuCount.value, count)) {
    return (menuCount.value = '');
  }
  e.target.removeEventListener('submit', onSubmitMenuCount);

  return gameStart();
};

const finduserMenuCount = () => {
  const userTable = findUserTable();
  if (userTable) {
    const userMenu = userTable.menu.find(
      (menu) => menu.number === userMenuNumber,
    );
    return userMenu ? userMenu.count : null;
  }

  return null;
};

const findUserTable = () => {
  const userTable = pos.selectedTableMenu.find(
    (pos) => pos.table === userTableNumber,
  );

  return userTable;
};

gameStart();
