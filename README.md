<h1>우아한 테크코스 프리코스를 시작하기 전의 연습 < 준비 > </h1>

<p>우아한 테크코스 1차를 합격했고, 프리코스에 들어가기 앞서 이전 기수가 풀었던 문제를 한 번 풀어볼 예정이다.</p>
<p>최대한 요구사항에 맞추면서 풀어보도록 할 것이다.</p>

<p>우아한 테크코스 합격을 위해!!</p>

<h3> 숫자야구게임 </h3>

1. 컴퓨터는 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 만든다.

2. 사용자는 3자리의 숫자를 입력하고, 컴퓨터의 숫자와 비교하여 같은 수가 같은 자리에 있으면 스트라이크, 다른자리에 있으면 볼, 같은 수가 전혀 없으면 포볼(낫싱)을 출력해준다.

3. 사용자가 숫자를 맞출때까지 해당 기능을 반복한다.

4. 사용자가 숫자를 맞췄을 시 게임을 다시 시작하거나, 완전히 종료할 수 있다.

<h3> 기능 요구 사항 </h3>

1. 자바 코드 컨벤션을 지키면서 프로그래밍한다.

2. indent(들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지 허용한다.
   예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.

3. 함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게 만들어라.

<h3> 구현해야 할 기능 </h3>

1. start 함수를 만들어 게임이 시작할 때 start()를 할 수 있도록 함

2. 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 만드는 함수 구현

- 1 ~ 9의 수가 들어있는 배열(waitingBall) 및 3자리의 수가 담길 배열(threeBall) 생성
- for문 안에서 1 ~ 9의 랜덤한 수를 뽑는 random api 구현 (random() \* waitingBall.length)
- threeBall의 첫 번째 숫자로 랜덤하게 숫자 push 후 뽑힌 숫자를 waitingBall에서 splice
- for문을 통해 세 번째 숫자까지 push --> 겹치는 숫자 없음

3. 사용자가 입력할 수 있는 form, input 및 결과를 html에 구현

- input type = number로 구현
- 결과 = div

4. 사용자가 입력한 숫자와 컴퓨터의 숫자를 비교하는 함수 구현(addEventListener)

- S, B, O을 추가할 수 있는 객체 구현
- threeBall을 forEach를 통해 배열을 돌면서 사용자 값에서 indexOf로 값이 존재하는지 찾음

  - 값이 존재한다면(-1이 아닐 때) forEach의 index와 같다면 1S 추가, 같지 않다면 1B 추가
  - 값이 존재하지 않는다면(-1일 때) 1O 추가

  예외처리) 사용자가 입력한 숫자에 대한 예외사항 js에서 오류처리

  - 음수의 값 입력
  - 3자리 미만의 수 입력
  - 3자리 초과의 수 입력
  - 숫자가 아닌 값 입력 - input = number로 이미 html에서 처리 완료
  - 띄워쓰기 입력
  - 겹치는 수 입력

5. 사용자가 정답을 맞췄을 시 게임 다시 시작 버튼 및 종료 기능 추가

- 3S가 나왔을 시 input을 추가
- 3S가 나왔을 시 게임 종료 메시지를 띄워주고, input을 통해 1번을 누르면 게임 다시 시작, 2번을 누르면 게임 종료
  - 예외처리)
  - 1번 및 2번이 아닌 다른 수를 입력한 경우 - 에러를 띄워줌
- 1번을 입력하면 README의 1번부터 다시 시작
- 2번을 입력하면 removeChild로 삭제

<h3> 레이싱 게임 </h3>

1. 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.

2. 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.

3. 자동차 이름은 쉼표(,)를 기준으로 구분하여 이름은 5자 이하만 가능하다.

4. 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.

5. 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.

6. 전진하는 조건은 0에서 9사이에서 random값을 구한 후 random값이 4이상일 경우 전진하고, 3이하의 값이면 멈춘다.

7. 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.

<h3> 기능 요구 사항 </h3>

1. 1주차의 프로그래밍 요구사항은 기본적으로 가져간다.

2. 저장소에서 제공하는 Car객체를 활용하여 구현해야한다.

3. else 예약어를 쓰지 않는다.

4. 함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.

<h3> 구현해야 할 기능 </h3>

1. 경주에 참가할 자동차 이름과 횟수를 입력할 수 있고, 결과를 보여줄수 있도록 html을 구성한다.

- 이름 - form, input, div
- 횟수 - form(hide), input, div
- 실행 결과 텍스트 - div
- 자동차 이동 거리 - ul

2. 경주에 참가할 자동차 이름을 입력할 수 있도록 함수를 만든다.

- submit 이벤트로 함수를 호출한다.
- 자동차를 담을 수 있는 배열을 만든다.
- ","를 통해 구분하기 위해 split으로 나누어준다. 또한, 예외처리를 위해 각각의 string을 match api로 확인한다.
  - 자동차 이름 예외처리
    - 5자리를 초과하는가?
    - 영어로만 이루어져 있지 않은가?
    - 공백이 있지는 않는가?
    - 이름이 겹치지는 않는가?
- 예외를 모두 통과하면 배열에 각각의 자동차를 new Car을 사용해 할당한다.
- form을 없애고 사용자가 만든 자동차를 div로 보여준다.
- 숨겨진 input에 hide를 풀어 input을 보이게 한 뒤 submit 이벤트를 통해 횟수 입력 함수를 호출한다.

3. 횟수를 입력할 수 있는 함수를 만든다.

- 예외처리
  - 숫자가 아닌가?
  - 10보다 큰 수인가?
- 에러가 없으면 form을 없애고 사용자가 입력한 횟수를 div로 보여준다.
- setInterval api를 사용해 횟수를 인자로 전달하면서 자동차가 이동하는 함수를 만든다.(1초 간격으로 결과창 띄워줌)

4. 자동차가 이동하는 함수를 만든다.

- Math.random를 사용해 0~9까지의 수를 랜덤하게 만든 후 3이하이면 넘어가고 4이상이면 해당 car의 position에 +1을 해준다.
- setTimeout을 사용해 전달받은 수 \* 1000을 해 예를 들어 9개면 9초 후에 clearInterval을 할 수 있도록 한다.
- 매 번 함수가 실행될 때마다 결과를 보여주는 함수에 car이름과 position을 인자로 전달하여 호출한다.
- 전달받은 인자를 앞서 만든 ul의 child로 계속 넣어준다.

5. 결과를 보여주는 함수를 만든다.

- position.length가 가장 큰 자동차들을 결과로 화면에 출력하기 위해 length가 가장 멀리 나간 자동차를 구하는 함수를 만든다.
- 가장 멀리 나간 자동차를 화면에 띄워주는 함수를 만든다.

---

# 로또

## 기능요구사항

- 로또 게임 기능을 구현해야 한다.

- 로또 구입 금액을 입력하면 구입 금액에 해당하는 로또를 발급해야 한다.

- 로또 1장의 가격은 1000원 이다.

- 로또 당첨 금액은 고정되어 있는 것으로 가정한다.

- 수익률을 계산해 출력해야 한다.

## 실행 결과

<img src="https://user-images.githubusercontent.com/64782636/100424092-70478c00-30d0-11eb-8693-582f46cd6e70.png"/>

## 구현해야 할 기능

- [v] 로또 숫자를 담을 배열을 전역에 설정한다. **const userLotto = []**
- [v] 일치하는 숫자의 개수를 담을 객체를 전역에 설정한다. **const matchingNumbers = {}**
- [v] 당첨 번호를 담을 배열을 전역에 설정한다. **let winningLottoNumbers = null**
- [v] 보너스 번호를 담을 변수를 전역에 설정한다. **let bonusNumber = null**

- [v] 랜덤하게 1 ~ 45까지의 수를 중복 없이 6개 뽑는 함수를 구현한다. **createLottoNumbers**
   - [v] 1 ~ 45까지의 수를 생성하는 함수를 구현한다 **createNumbersToMaxNumber**
   - [v] 1 ~ 45까지의 수 중 랜덤하게 1개씩 뽑는 함수를 구현한다. **selectNumber**
   
- [v] 사용자의 금액이 submit될 때 화면에 입력한 금액을 표시하는 함수를 구현한다. **showPrice**

- [v] showPrice 함수 안에 금액이 올바른지 확인하는 함수를 구현한다. **isRightPrice**
  - 예외처리)
    - [v] 양의 정수가 아닐 경우
    - [v] 1000의 배수가 아닐 경우
    - [] 아무 것도 입력하지 않을 경우

- [v] 금액이 올바르다면 금액에 맞는 개수의 로또만큼 createLottoNumbers함수에서 만들어 userLotto에 push한다. **pushLottoNumbers**

- [v] 랜덤하게 생성된 로또 번호를 화면에 출력할 수 있는 함수를 구현한다. **showLottoNumbers**

- [] 지난 주 당첨 번호를 입력할 수 있는 input을 submit할 수 있는 함수를 구현한다. **submitWinningNumbers**

- [] 지난 주 당첨 번호를 입력 받고, 화면에 표시하는 함수를 구현한다. **showWinningNumbers**
  - [] 이 때, 내부에 input이 올바른지 확인하는 함수를 구현한다. **isRightWinningNumbers**
    - 예외처리)
      - [] 1 ~ 45의 숫자가 아닌 경우
      - [] 중복된 숫자를 입력한 경우
      - [] 6자리의 수를 입력하지 않은 경우
      - [] 쉼표로 구분하지 않은 경우
      - [] 아무 것도 입력하지 않은 경우
    - [] input이 올바르다면 winningLottoNumbers를 바꿔준다.
- [] 보너스 볼을 입력 받고, 화면에 표시하는 함수를 구현한다. **showBonusNumber**

  - [] 이 때, 내부에 input이 올바른지 확인하는 함수를 구현한다. **isRightBonusNumber**
    - 예외처리)
      - [] 1 ~ 45의 숫자가 아닌 경우
      - [] 1개의 숫자를 입력하지 않은 경우(1개만 가능)
    - [] input이 올바르다면 bonusNumber을 바꿔준다.

- [] 사용자가 구매한 로또와 당첨 번호를 비교하는 함수를 구현한다. **compareLottoNumbers**

- [] 수익률을 구하는 함수를 구현한다. **calculateProfit**

- [] 당첨 통계 화면을 표시하는 함수를 구현한다. **showResult**

- [] 게임을 종료하는 함수를 구현한다. **gameFinish**
