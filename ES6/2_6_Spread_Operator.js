// 전개 연산자 (spread operator)
// 파이썬의 *, **와 유사

// array에서의 전개
let [name, ...rest] = ["tom", 10, "seoul"];
// name= tom 이되고 나머지 10, seoul은 array로 rest에 들어간다.
// rest = [10, 'seoul']

let names = ["steve", "john"]; //array 값
let students = ["tom", ...names, ...names];
// ...은 펼쳐놓는 것(전개)이기 떄문에 실제 출력값은
// tom , steve, john, steve, john 이된다.

let printArgs = (...args) => {
  //여러개의 인자를 받을때 파이썬은 *를 쓰지만 node.js는 ...을 사용
  console.log(args);
};

//odject에서의 전개
//react스러운 문법
let tom = {
  name: "tom",
  age: 10,
  region: "seoul",
};

let steve = {
  ...tom,
  // tom 을 펼쳐 놓음으로써 복사가 되는 효과가 발생
  name: "steve",
};
// name이 중복되므로 앞에 값은 무시되고 마지막 값으로 저장된다.
// steve객체의 값은 name: steve, age:10, region:seoul이 된다.

/*
react에서 수많은 값들을 불변객체로서 처리한다.
그래서 스프레드 문법을 많이쓴다.
*/

// 전개연산자(...)를 많이 쓰다보면 가독성이 떨어진다. 이럴경우
// immer라이브러리를 사용하면 가독성에 도움이 된다. (https://github.com/immeris/immer)

// cf) 전개를 어떨때 사용하나?
// const num = [1,3,5,7];
// Math.max(num); // NaN
// Math.max(...num); // 9
// max는 인자끼리 비교하는 것이기 때문에 array값 비교가 안되고,
// 전개를 해야지 비교할 수 있다.

// 파이썬은 그냥 해도 된다. num, *num 둘다 됨
