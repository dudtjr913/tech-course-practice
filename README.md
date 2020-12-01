# ⚾ 미션 - 숫자 야구 게임

## ✔ 기능 구현 목록

- [v] 1 ~ 9까지의 서로 다른 수로 이루어진 3자리의 수(정답)를 만드는 메소드를 구현한다. - **createAnswerNumber**
- [v] constructor에 정답을 변수에 할당한다. **this.answer = createAnswerNumber()**
  - [v] 1 ~ 9까지의 배열을 담을 함수를 만든다. **createMaxNumberArray**
  - [v] 랜덤하게 숫자를 뽑을 함수를 만든다. **selectRandomNumber**
- [v] 사용자의 input을 받아 게임을 시작할 수 있는 메소드를 구현한다. - **gameStart**
- [v] 사용자의 input을 받았을 때 input이 올바르다면 게임을 play할 메소드를 구현한다. **onSubmittedUserInput**
- [v] 사용자의 input이 유효한지 검사하는 메소드를 구현한다. **isInputValid**
  - [v] 예외처리)
    - [v] 0을 입력한 경우
    - [v] 빈 칸을 submit한 경우
    - [v] 숫자 이외의 문자를 입력한 경우
    - [v] 4자리 이상을 입력한 경우
    - [v] 2자리 이하를 입력한 경우
    - [v] 중복된 숫자를 입력한 경우
- [v] input이 유효하다면, submittedUserInput함수에서 play 메소드를 호출한다. **play(this.answer, userInput)**
- [v] userInput과 answer을 비교하여 strike를 결정하는 메소드를 구현한다. **getStrikeNumber**
- [v] userInput과 answer을 비교하여 ball 결정하는 메소드를 구현한다. **getBallNumber**
- [v] 위 두 메소드를 기존에 존재하는 play 메소드에서 각각 변수로 할당한다.
  **const strike = this.getStrikeNumber(); const ball = this.getBallNumber();**
- [v] play 메소드에서 조건문을 사용해 ball과 strike를 string으로 return한다.
- [] play 메소드의 return값을 submittedUserInput에서 받아 화면에 띄워줄 메소드를 호출한다. **showUserResult**
- [] strike가 3일 때 승리하여 게임이 종료되는 메소드를 구현한다. **gameFinish**
- [] 다시 시작 할 수 있는 메소드를 구현한다. **gameRestart**

## 🎯 기능 요구사항

- 기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.
- 같은 수가 같은 자리에 있으면 `스트라이크`, 다른 자리에 있으면 `볼`, 같은 수가 전혀 없으면 `낫싱`이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다.
  - 예) 상대방(컴퓨터)의 수가 425일 때
  - 123을 제시한 경우 : 1스트라이크
  - 456을 제시한 경우 : 1볼 1스트라이크
  - 789를 제시한 경우 : 낫싱
- 위 숫자 야구게임에서 상대방의 역할을 컴퓨터가 한다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.
- 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
- 게임을 종료한 후 게임을 다시 시작할 수 있다.
- 게임을 종료한 후 id가 `game-restart-button`인 버튼을 클릭함으로써 게임을 다시 시작할 수 있다.
  - `예) <button id="game-restart-button">재시작</button>`

<br>

## 💻 프로그래밍 실행 결과

![baseball_result](https://user-images.githubusercontent.com/50367798/100166088-32473e00-2eff-11eb-9454-5d45e648b37e.jpg)

<br>

## ✅ 프로그래밍 요구사항

- `play`(컴퓨터의 랜덤 값, 유저의 입력 값) 메서드를 만들어 게임을 진행한다.
- `play`메서드는 `String`으로 결과값을 return 한다.
- `index.js`에서 아래의 function 또는 class 형태를 활용한다.

```javascript
export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  };
}

export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  }
}

// 예시
play(123, 456); // '낫싱'
play(123, 345); // '1볼'
play(123, 432); // '2볼'
play(123, 312); // '3볼'
play(123, 145); // '1스트라이크'
play(123, 134); // '1볼 1스트라이크'
play(123, 132); // '2볼 1스트라이크'
play(123, 124); // '2스트라이크'
```

- 스트라이크와 볼이 같이 있는 경우 볼을 먼저쓰고, 스트라이크를 쓴다.
- 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 재입력할 수 있게 한다.
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다
  - [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html)
  - [https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- **함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게** 만들어라.
