import Screen from './class/screen.js';
import {optionList, tableList, menuList} from './utils.js';

export default class Pos {
  constructor(tableList, menuList) {
    this.tableList = tableList;
    this.menuList = menuList;
    this.selectedTableMenu = [];
  }

  pushUserTable(tableNumber) {
    if (this.findUserTable()) {
      return null;
    }
    this.paintUserTable(tableNumber);

    return this.selectedTableMenu.push({table: tableNumber});
  }

  findUserTable() {
    const userTable = this.selectedTableMenu.find((user) => user.table);

    return userTable;
  }

  paintUserTable(userTableNumber) {
    const $userTable = document.body.querySelector(`#table-${userTableNumber}`);
    $userTable.style.backgroundColor = 'red';
  }
}
