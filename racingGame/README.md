# 🏎️ 자동차 경주 게임

## ✔ 기능 구현 목록

- [v] 추가 요구사항에 따라 html의 input, button에 id를 추가한다.
- [v] html에서 자동차 이름을 입력하는 요소를 제외하고 display:none으로 감추고, id를 부여한다.
- [v] Car class에 이름과 거리를 프로퍼티로 가질 수 있도록 만든다.
- [v] 유저가 자동차 이름을 입력할 수 있는 함수를 구현한다.
  - [v] eventListener와 연결한다.
  - [v] 이름의 유효성을 확인하는 함수를 구현한다.
    - 예외처리)
      - [v] 5자를 초과할 때
      - [v] 특수문자를 입력했을 때
      - [v] 빈 칸을 입력했을 때
      - [v] 중복된 이름을 입력했을 때
- [v] RacingCar class의 프로퍼티로 참여할 자동차를 담을 배열을 할당한다.
- [v] RaicngCar class에 참여할 자동차를 push할 메소드를 구현한다.
- [v] 자동차 이름 입력이 유효하다면 위의 메소드를 호출한다.
- [v] 횟수 입력 칸을 display : block으로 만들어주는 함수를 구현한다.
  - [v] eventListener를 해제한다.
- [v] 횟수 입력을 받을 함수를 구현한다.
  - [v] eventListener와 연결한다.
  - [v] 횟수 입력의 유효성을 확인하는 함수를 구현한다.
    - 예외처리)
      - [v] 숫자를 입력하지 않았을 때
      - [v] 0을 이하의 수를 입력했을 때
      - [v] 빈칸을 입력했을 때
- [] RacingCar class에 횟수만큼 반복문을 돌면서 게임을 진행할 메소드를 구현한다.
- [] 자동차를 움직이는 함수를 구현한다.(4보다 크면 움직이고, 아니면 정지)
- [] 횟수 입력이 유효하다면 위의 메소드에 input을 인자로 주면서 호출한다.
- [] 실행 결과 창을 display : block으로 만들어주는 함수를 구현한다.
- [] 실행 결과를 보여줄 함수를 구현한다.
  - [] 진행사항을 보여줄 함수를 구현한다.
  - [] 우승자를 보여줄 함수를 구현한다.
    - [] 우승자를 가려낼 함수를 구현한다.

## 🎯 기능 요구사항

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러명일 경우 ,를 이용하여 구분한다.

## 💻 프로그램 실행 결과

![실행이미지](images/result.gif)
![실행이미지](images/result.jpg)

## ✅ 프로그래밍 요구사항

- 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 재입력할 수 있게 한다.
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다
  - [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html)
  - [https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- **함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게** 만들어라.

### 추가된 요구사항

- **함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.**
  - 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.
- 자동차의 이름을 입력하는 input 태그는 `#car-names-input` id값을 가진다.
- 자동차의 이름을 제출하는 button 태그는 `#car-names-submit` id값을 가진다.
- 레이싱 횟수를 입력하는 input 태그는 `#racing-count-input` id값을 가진다.
- 레이싱 횟수을 제출하는 button 태그는 `#racing-count-submit` id값을 가진다.
- 다음 Car 객체를 만들고, new 를 이용해 인스턴스를 만든다.

```javascript
function Car(name) {
  this.name = name;
}

class Car {
  constructor(name) {
    this.name = name;
  }
}
```

- 변수 선언시 `var` 를 사용하지 않는다. `const` 와 `let` 을 사용한다.
  - [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)
  - [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
- `import` 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
- `template literal`을 이용해 데이터와 html string을 가독성 좋게 표현한다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)
