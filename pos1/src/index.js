import Screen from './class/screen.js';
import {optionList, tableList, menuList} from './utils.js';

export default class Pos {
  constructor(tableList, menuList) {
    this.tableList = tableList;
    this.menuList = menuList;
    this.selectedTableMenu = [];
  }

  pushUserTable(tableNumber) {
    if (this.findUserTable(tableNumber)) {
      return null;
    }
    this.paintUserTable(tableNumber);

    return this.selectedTableMenu.push({table: tableNumber});
  }

  pushUserMenu(tableNumber, menuNumber) {
    const userTable = this.findUserTable(tableNumber);
    const userMenu = this.findUserMenu(menuNumber);
    if (userMenu) {
      return null;
    }

    userTable.menu = userMenu;
  }

  findUserTable(tableNumber) {
    const userTable = this.selectedTableMenu.find(
      (user) => user.table === tableNumber,
    );

    return userTable;
  }

  paintUserTable(userTableNumber) {
    const $userTable = document.body.querySelector(`#table-${userTableNumber}`);
    $userTable.style.backgroundColor = 'red';
  }

  findUserMenu(menuNumber) {
    const userMenu = this.menuList.find(
      (menu) => menu.number === parseInt(menuNumber, 10),
    );

    return userMenu;
  }
}
