import Screen from './class/screen.js';
import {optionList, tableList, menuList} from './utils.js';

export default class Pos {
  constructor(tableList, menuList) {
    this.tableList = tableList;
    this.menuList = menuList;
    this.selectedTableMenu = [];
  }
}
