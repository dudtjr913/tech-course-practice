import Screen from './class/screen.js';
import {menuList} from './utils.js';

const a = new Screen([1, 2, 3, 4, 5, 6], menuList);
a.createMainScreen();
a.createTableList();
a.createMenuList();
a.createMenuNumberInput();
