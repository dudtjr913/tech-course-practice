# POS 시스템

## 기능 요구사항

- 치킨집 사장님이 사용하는 간단한 포스 프로그램 구현
  주문등록, 결제하기, 프로그램 종료 기능을 가진다.
- 메뉴 기본 정보가 주어지며 메뉴 번호, 이름, 가격을 가진다.
- 테이블 기본 정보가 주어지며 메뉴 번호, 종류, 이름, 가격을 가진다.
- 한 테이블에서 주문할 수 있는 한 메뉴의 최대 수량은 99개이다.
- 주문이 등록된 테이블은 결제가 이루어지기 전까지 테이블 목록에 별도로 표시한다.
- 주문 내역에 대한 계산을 할 때는 결제 유형에 따라 할인율이 달라진다.
- 치킨 종류 메뉴의 수량 합이 10개가 넘는 경우 10,000원씩 할인된다.
  - e.g. 10개는 10,000원 할인, 20개는 20,000원 할인
- 현금 결제는 5%가 할인되며, 할인된 금액에서 한 번 더 할인이 가능하다.
- 주문 혹은 결제가 불가능한 경우 그 이유를 보여 주고, 다시 주문 혹은 결제가 가능하도록 해야 한다.
- 최종 결제 금액을 보여준다.

## 실행 결과

  <img width="80%"  src="https://user-images.githubusercontent.com/64782636/100534307-c7746a80-3250-11eb-9a16-3a33c2e56163.png">
  <img width="80%"  src="https://user-images.githubusercontent.com/64782636/100534308-c93e2e00-3250-11eb-8c49-55a620d1de53.png">
  
## 구현해야 할 기능

- [v] html로 필요한 element를 생성한다.
- [v] element를 만드는 함수를 구현한다.
- [v] 선택 가능한 테이블과 메뉴, 선택된 테이블과 선택된 메뉴를 프로퍼티로 가지는 pos class를 만든다.
- [v] 각종 input을 받았을 때 유효성을 검사하는 함수를 만든다.
  - [v] 기능선택 시 1,2,3 숫자를 제외한 모든 input에 대한 에러 처리
  - [v] 테이블 선택 시 존재하지 않는 테이블 또는 이미 선택된 테이블을 제외한 모든 input에 대한 에러 처리
  - [v] 메뉴 선택 시 존재하지 않는 메뉴를 제외한 모든 input에 대한 에러 처리
  - [] 메뉴의 수량 입력 시 양의 정수만 입력 가능하고, 최대 수량인 99개를 넘지 않도록 에러 처리
  - [v] 결제 진행 시 1, 2 숫자를 제외한 모든 input에 대한 에러 처리
- [v] 주문등록 선택 시 테이블 선택을 할 수 있도록 함수를 구현한다.
- [v] 테이블 선택 시 메뉴를 선택할 수 있도록 함수를 구현한다.
  - [v] 테이블 선택 시 테이블에 표시한다.
- [v] 메뉴 선택 시 수량을 입력할 수 있도록 함수를 구현한다.
- [v] 수량 입력 시 메인화면으로 돌아갈 수 있도록 함수를 구현한다.
- [] 결제하기 선택 시 테이블을 선택할 수 있도록 함수를 구현한다.
- [] 테이블 선택 시 주문 내역을 보여줄 수 있도록 위의 함수에 기능을 추가한다.
- [] 주문 내역을 보여준 후에 결제 진행을 할 수 있도록 함수를 구현한다.
  - [] 1, 2 숫자를 제외한 나머지 에러처리
- [] 최종 결제할 금액을 보여주는 함수를 구현한다.
- [] 프로그램 종료를 선택할 시 게임이 종료되는 함수를 구현한다.
- [] 메인 화면으로 돌아가서 위 과정을 반복한다.
