export default class Screen {
  constructor(optionList, tableList, menuList) {
    this.optionList = optionList;
    this.tableList = tableList;
    this.menuList = menuList;
  }

  createMainScreen() {
    const $mainSection = document.createElement('section');
    const $optionDiv = document.createElement('div');
    $mainSection.innerHTML = `
      <b>## 메인화면</b>
    `;
    this.optionList.forEach((option) => {
      $optionDiv.innerHTML += `
        <div>${option.number} - ${option.value}</div>
        `;
    });
    $mainSection.appendChild($optionDiv);
    this.createSelectOptionInput($mainSection);
  }

  createSelectOptionInput($mainSection) {
    $mainSection.innerHTML += `
    <br/>
    <b>## 원하는 기능을 선택하세요.</b>
      <form onsubmit="return false" id="option-select">
        <input />
      </form>
    <br/>
    `;
    document.body.querySelector('#pos').appendChild($mainSection);
  }

  createTableList() {
    const $tableSection = document.createElement('section');
    const $tableUl = document.createElement('ul');
    $tableSection.id = 'table';
    $tableSection.innerHTML = `
      <b>## 테이블 목록</b>
    `;
    this.tableList.forEach((table) => {
      $tableUl.innerHTML += `
      <li>${table}</li>
      `;
    });
    $tableSection.appendChild($tableUl);
    document.body.querySelector('#pos').appendChild($tableSection);
    this.createSelectTableInput($tableSection);
  }

  createSelectTableInput($tableSection) {
    $tableSection.innerHTML += `
     <b>## 테이블을 선택하세요.</b>
      <form onsubmit="return false" id="table-select">
        <input />
      </form>
      <br/>
    `;
    document.body.querySelector('#pos').appendChild($tableSection);
  }

  createMenuList() {
    const $menuSection = document.createElement('section');
    const $tableUl = document.createElement('ul');
    this.menuList.forEach((menu) => {
      $tableUl.innerHTML += `
      <li>[${menu.category}] ${menu.number} - ${menu.name} : ${menu.price}원</li>
    `;
    });
    $menuSection.appendChild($tableUl);
    this.createSelectMenuInput($menuSection);
  }

  createSelectMenuInput($menuSection) {
    $menuSection.innerHTML += `
     <b>## 등록할 메뉴를 선택하세요.</b>
      <form onsubmit="return false" id="menu-select">
        <input />
      </form>
      <br/>
    `;
    document.body.querySelector('#pos').appendChild($menuSection);
  }

  createMenuNumberInput() {
    const $menuContainer = document.createElement('div');
    $menuContainer.innerHTML = `
      <b>## 메뉴의 수량을 입력하세요.</b>
      <form onsubmit="return false" id="menu-number">
        <input />
      </form>
      <br/>`;
    document.body.querySelector('#pos').appendChild($menuContainer);
  }

  createOrderList(orderList) {
    const $orderSection = document.createElement('section');
    const $orderUl = document.createElement('ul');
    $orderSection.innerHTML = `
      <b>## 주문 내역</b>
      <div>메뉴 수량 금액</div>
      `;
    orderList.forEach((order) => {
      $orderUl.innerHTML += `
        <li>${order.name} ${order.number} ${order.price}</li>
        `;
    });
    $orderSection.appendChild($orderUl);
    document.body.querySelector('#pos').appendChild($orderSection);
  }

  createPaymentProceed(table) {
    const $paymentSection = document.createElement('section');
    $paymentSection.innerHTML = `
    <b>## ${table}번 테이블의 결제를 진행합니다.</b>
    <b>## 신용 카드는 1번, 현금은 2번</b>
    <form onsubmit="return false" id="payment-means">
      <input />
    </form>
    </br>
    `;
  }

  createFinalPrice(price) {
    const $priceSection = document.createElement('section');
    $priceSection.innerHTML = `
    <b>## 최종 결제할 금액</b>
    <div>${price}원</div>
    </br>
    `;
  }
}
