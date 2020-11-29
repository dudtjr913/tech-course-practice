import CreateElement from './main.js';

const element = new CreateElement();
const order = [];

let mainForm = null;
let tableForm = null;
let menuForm = null;
let numberForm = null;
let paymentForm = null;
let mainInput = null;
let tableInput = null;
let menuInput = null;
let numberInput = null;
let paymentInput = null;

const gameStart = () => {
  element.createMain();
  mainForm = document.querySelector('#main-form');

  return mainForm.addEventListener('submit', submitMainOption);
};

const paintUserInput = (form, value) => {
  form.replaceWith(value);
};

const submitMainOption = (e) => {
  e.preventDefault();
  mainInput = mainForm.querySelector('#main-input');
  if (!isValidMainInput(mainInput.value)) {
    return (mainInput.value = '');
  }
  paintUserInput(mainForm, mainInput.value);
  if (mainInput.value === '1') {
    return selectTable();
  }
  if (mainInput.value === '2') {
    return showUserOrderMenu();
  }

  return finishGame();
};

const isValidMainInput = (value) => {
  if (value !== '1' && value !== '2' && value !== '3') {
    return alert('1,2,3번 중에 하나의 숫자만 입력해주세요.');
  }

  return true;
};

const selectTable = () => {
  element.createTable();
  tableForm = document.body.querySelector('#table-form');

  return tableForm.addEventListener('submit', submitTableOption);
};

const submitTableOption = (e) => {
  e.preventDefault();
  tableInput = tableForm.querySelector('#table-input');
  if (!isValidTableInput(tableInput.value)) {
    return (tableInput.value = '');
  }
  paintUserInput(tableForm, tableInput.value);

  return selectMenu();
};

const isValidTableInput = (value) => {
  if (!element.tableList.includes(parseInt(value, 10))) {
    return alert('존재하지 않는 테이블입니다.');
  }

  return true;
};

const selectMenu = () => {
  element.createMenu();
  menuForm = document.body.querySelector('#menu-form');

  return menuForm.addEventListener('submit', submitMenuOption);
};

const submitMenuOption = (e) => {
  e.preventDefault();
  menuInput = menuForm.querySelector('#menu-input');
  if (!isValidMenuInput(menuInput.value)) {
    return (menuInput.value = '');
  }
  paintUserInput(menuForm, menuInput.value);

  return selectMenuAmount();
};

const isValidMenuInput = (value) => {
  if (!element.allMenu.find((menu) => menu.number === parseInt(value, 10))) {
    return alert('존재하지 않는 메뉴입니다.');
  }

  return true;
};

const selectMenuAmount = () => {
  element.createMenuNumber();
  numberForm = document.body.querySelector('#number-form');

  return numberForm.addEventListener('submit', submitMenuAmount);
};

const submitMenuAmount = (e) => {
  e.preventDefault();
  numberInput = numberForm.querySelector('#number-input');
  if (!isValidMenuAmountInput(numberInput.value)) {
    return (numberInput.value = '');
  }
  paintUserInput(numberForm, numberInput.value);
  pushUserMenu();

  return continueGame();
};

const isValidMenuAmountInput = (value) => {
  if (value > 99) {
    return alert('99개 이하만 구매 가능합니다.');
  }
  if (value.match(/\D/) || value === '') {
    return alert('숫자를 입력해주세요.');
  }

  return true;
};

const pushUserMenu = () => {
  if (isExUser()) {
    return;
  }

  return order.push({
    table: parseInt(tableInput.value, 10),
    menu: [
      {
        number: parseInt(menuInput.value, 10),
        amount: parseInt(numberInput.value, 10),
      },
    ],
  });
};

const isExUser = () => {
  const exUser = order.find(
    (user) => user.table === parseInt(tableInput.value, 10),
  );
  if (exUser) {
    return isExMenu(exUser);
  }

  return false;
};

const isExMenu = (exUser) => {
  const exMenu = exUser.menu.find(
    (menu) => menu.number === parseInt(menuInput.value, 10),
  );
  if (exMenu) {
    return (exMenu.amount += parseInt(numberInput.value, 10));
  }

  return exUser.menu.push({
    number: parseInt(menuInput.value, 10),
    amount: parseInt(numberInput.value, 10),
  });
};

const continueGame = () => {
  console.log(order);
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }

  return gameStart();
};

const showUserOrderMenu = () => {
  console.log('order');
};

const finishGame = () => {
  console.log(finish);
};

gameStart();
