import Menu from './class/menu.js';
import Option from './class/option.js';

export const optionList = [
  new Option(1, '주문등록'),
  new Option(2, '결제하기'),
  new Option(3, '프로그램 종료'),
];

export const menuList = [
  new Menu('치킨', 1, '후라이드', 16000),
  new Menu('치킨', 2, '양념치킨', 16000),
  new Menu('치킨', 3, '반반치킨', 16000),
  new Menu('치킨', 4, '통구이', 16000),
  new Menu('치킨', 5, '간장치킨', 17000),
  new Menu('치킨', 6, '순살치킨', 17000),
  new Menu('음료', 21, '콜라', 1000),
  new Menu('음료', 22, '사이다', 1000),
];

export const tableList = [1, 2, 3, 5, 6, 8];

export const MAX_MENU_NUMBER = 99;
