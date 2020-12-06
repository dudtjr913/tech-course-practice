import Screen from './class/screen.js';
import {menuList, tableList} from './utils.js';

class Pos {
  constructor(tableList, menuList) {
    this.tableList = tableList;
    this.menuList = menuList;
    this.selectedTableMenu = [];
  }
}
