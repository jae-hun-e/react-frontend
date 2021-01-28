// 함수 사용방법

// 1번
function fn1(x, y) {
  return x + y;
}

// 2번
const fn2 = function (x, y) {
  return x + y;
};

// 3번
const fn3 = (x, y) => {
  return x + y;
};
// or
// const fn3 = (x,y) => x + y;
// const fn3 = (x,y) => (x + y);

// 요즘에는 주로 3번을 쓰고 가끔 1번도 쓰고 2번은 거의 안 쓴다.

const fn4 = (x) => x + 10;

// arrow 함수에 익숙해지자.

// *중요*
// this와 arguments를 바인딩 하지 않습니다.
// 모든 객체에는 this가 존재한다.
// function과 arrow function을 썼을때 this에 변화가있다.
var tom = {
  name: "tom",
  print1: function () {
    console.log(`[print1-1] name : $(this.name)`); // tom
    // pritnt1에서의 this :
    (function () {
      console.log(`[print1-2] name: $(this.name)`); // undefined
    })();
    // print1d의 function 내부의 this로 바뀌어서 this가 변한다.
  },
  // this가 서로 다르다.

  print2: function () {
    console.log(`[print2-1] name : $(this.name)`); // tom
    var me = this; //this를 할당한다.
    (function () {
      console.log(`[print2-2] name : $(me.name)`); // tom
    })();
  },
  // 결국 this.name이랑 me.name이랑 같은 대상을 가르키게 된다.

  print3: function () {
    console.log(`[print3-1] name : $(this.name)`); // tom
    (() => {
      console.log(`[print3-2] name : $(this.name)`); // tom
    })();
  },
  // this가 변경되지 않아서 this를 따로 바인딩해줄 필요가 없다.
};
