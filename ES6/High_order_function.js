function base_10(fn) {
  const i = 10;
  return i;
}

const result = base_10(0);
console.log(result); // 10

//함수안에 함수 호출
function base_11(fn) {
  return (x, y) => fn(x, y) + 10;
  //   const wrap = (x, y) => fn(x, y) + 10;
  //   //   function wrap(x, y) {
  //   //     return fn(x, y) + 10;
  //   //   }
  //   return wrap;
}

const mysum = (a, b) => a + b;
// function mysum(a, b) {
//     return a + b;
//   }

// 위의 식을 arrow로 간추리면 아래와 같이 나타낼 수 있다.

// const base_11 = (fn) => (x, y) => fn(x, y) + 10;
// const mysum = (a, b) => a + b;

const result_fn = base_11(mysum);
console.log(result_fn(1, 2)); // wrap = 13
