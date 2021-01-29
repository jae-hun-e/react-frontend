/*
리액트는 컴포넌트의 많은 루틴을순수함수로서 작성하기를 요구한다.

순수함수는 
1. 입력이 같으면 같은결과을 반환해야하고
2. 다른side effects를 발생시키면 안된다 - 외부에 변화를 일으키면 안된다.
(http요청, 데이터 저장, 쿠키 조작 등)
3. 하나 이상의 인자를 받고, 인자를 변경하지 않고, 
참조하여 새로운 값을 변환 side effects가 없도록 구성

컴포넌트의 상탯값은 불변객체로 관리하기를 요구한다.
수정할 떄는 기존 값을 변경하는게 아니라 같은 이름의 새로운객체를 생성한다.
=> UI복잡도를 낮추고, 버그 발생 확률을 줄인다.


예를 들어 jsx문법으로 작성된 header 리액트 컴포넌트
const Header = (props) =>(
    <div>
        <h1>{props.title}</h1>
    </div>
)
이렇게 속성이 같으면 같은 결과를 반환하기 때문에 순수함수이다.
*/

// 순수 함수를 활용한 데이터 변환
// 자주쓰는 array function들: raduce, filter, map, join 등

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const number = numbers.reduce((acc, n) => acc + n, 0);
// acc(accumulater)라는 인자는 누적기이고 acc의 초기값을 0으로 세팅한다.
// sum처럼 합을 구하는 함수
console.log(number);

const even_numbers = numbers.filter((i) => i % 2 == 0);
// 개별 값에 대해서 참/거짓을 반환하는 로직을 만듬
console.log(even_numbers);
