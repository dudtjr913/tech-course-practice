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

    return this.selectedTableMenu.push({table: tableNumber});
  }

  findUserTable() {
    const userTable = this.selectedTableMenu.find((user) => user.table);

    return userTable;
  }
}
