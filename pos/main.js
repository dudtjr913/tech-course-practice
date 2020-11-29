export default class CreateElement {
  constructor() {
    this.tableList = [1, 2, 3, 5, 6, 8];
    this.allMenu = [
      {
        number: 1,
        name: '후라이드',
        price: 16000,
        class: '[치킨]',
      },
      {
        number: 2,
        name: '양념치킨',
        price: 16000,
        class: '[치킨]',
      },
      {
        number: 3,
        name: '반반치킨',
        price: 16000,
        class: '[치킨]',
      },
      {
        number: 4,
        name: '통구이',
        price: 16000,
        class: '[치킨]',
      },
      {
        number: 5,
        name: '간장치킨',
        price: 17000,
        class: '[치킨]',
      },
      {
        number: 6,
        name: '순살치킨',
        price: 17000,
        class: '[치킨]',
      },
      {
        number: 21,
        name: '콜라',
        price: 1000,
        class: '[음료]',
      },
      {
        number: 22,
        name: '사이다',
        price: 1000,
        class: '[음료]',
      },
    ];
  }

  createMain() {
    const mainSection = document.createElement('section');
    mainSection.innerHTML = `
      <h4 style="margin:5px 0px">## 메인화면</h4>
      <div>1 - 주문등록</div>
      <div>2 - 결제하기</div>
      <div>3 - 프로그램 종료</div>
      <h4 style="margin:5px 0px">## 원하는 기능을 선택하세요.</h4>
      <form id="main-form">
      <input type="number" id="main-input"/>
      </form>
      `;
    document.body.appendChild(mainSection);
  }

  createTable() {
    const tableSection = document.createElement('section');
    const tableUl = document.createElement('ul');
    tableSection.innerHTML = `<h4 style="margin:5px 0px">## 테이블 목록</h4>`;
    tableUl.style.display = 'flex';
    tableUl.style.listStyle = 'none';
    tableUl.style.padding = '0px';
    for (const number of this.tableList) {
      tableUl.innerHTML += `
      <li style="border:dashed; padding:15px 10px; 
      margin-right:5px" 
      id="table-${number}">${number}</li>
      `;
    }
    tableSection.appendChild(tableUl);
    document.body.appendChild(tableSection);
    tableSection.innerHTML += `
    <h4 style="margin:5px 0px">## 테이블을 선택하세요.</h4>
    <form id="table-form">
    <input type="number" id="table-input"/>
    </form>
    `;
  }

  createMenu() {
    const menuSection = document.createElement('section');
    const menuUl = document.createElement('ul');
    menuSection.id = 'menu';
    menuUl.style.listStyle = 'none';
    menuUl.style.padding = '0px';
    for (const menu of this.allMenu) {
      menuUl.innerHTML += `
      <li>${menu.class} ${menu.number} - ${menu.name} : ${menu.price}원</li>
      `;
    }
    menuSection.appendChild(menuUl);
    document.body.appendChild(menuSection);
    menuSection.innerHTML += `
    <h4 style="margin:5px 0px">## 등록할 메뉴를 선택하세요.</h4>
    <form id="menu-form">
    <input type="number" id="menu-input"/>
    </form>    
    `;
  }

  createMenuNumber() {
    const menuSection = document.querySelector('#menu');
    menuSection.innerHTML += `
    <h4 style="margin:5px 0px">## 메뉴의 수량을 선택하세요.</h4>
    <form id="number-form">
    <input type="number" id="number-input"/>
    </form>    
    `;
  }

  showOrderList(lists) {
    const orderSection = document.createElement('section');
    orderLists = [];
    for (const number of lists) {
      this.allMenu.find((menu) => {
        menu.number === parseInt(number, 10) && orderLists.push(menu);
      });
    }
    orderSection.innerHTML = `
      <h4 style="margin:5px 0px">## 주문 내역</h4>
      <div>메뉴 수량 금액</div>
      `;
    for (const menu of orderLists) {
      orderSection.innerHTML += `
        <div>${menu.name} ${menu.number} ${menu.price}</div>
        `;
    }
    document.body.appendChild(orderSection);
  }

  proceedWithPayment() {
    const paymentSection = document.createElement('section');
    paymentSection.innerHTML = `
    <h4 style="margin:5px 0px">## 1번 테이블의 결제를 진행합니다.</h4>
    <h4 style="margin:5px 0px">## 신용카드는 1번, 현금은 2번</h4>
    <form id="payment-form">
    <input type="number" id="payment-input"/>
    </form>
    `;
  }

  showOnUserPrice(price) {
    const priceSection = document.createElement('section');
    priceSection.innerHTML = `
    <h4 style="margin:5px 0px">## 최정 결제할 금액</h4>
    <div<${price}원</div>
    `;
  }
}
