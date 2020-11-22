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
  - for문 안에서 1 ~ 9의 랜덤한 수를 뽑는 random api 구현 (random() * waitingBall.length)
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
    
5. 사용자가 정답을 맞췄을 시 게임 다시 시작 버튼 및 종료 버튼 추가 
  - html에 다시 시작 버튼 및 종료 버튼 미리 추가 후 hide로 숨김
  - 3S가 나왔을 시 hide 제거 및 click 이벤트 추가
  - 다시 시작 버튼을 누르면 1번부터 다시 시작
  - 종료 버튼을 누르면 removeChild로 삭제
