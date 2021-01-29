// 함수의 다양한 형태

//

const hello1 = function (name, age) {
  return `안녕 나는 ${name}. ${age}살이야`;
};

let hello2 = (name, age) => `안녕 나는 ${name}. ${age}살이야`;
// {}로 감싸지 않으면, return문을 쓰지 않아도 return값으로 사용된다.
let hello3 = (name, age) => {
  return `안녕 나는 ${name}. ${age}살이야`;
};
console.log(hello1("a", 10));
console.log(hello2("b", 20));
console.log(hello3("c", 30));

// this와 argument는 바인딩하지 않는다.
//

let tom = {
  name: "Tom",
  print1: function () {
    console.log(`1-1 name: ${this.name}`);
    (function () {
      console.log(`1-2 name: ${this.name}`);
    })();
    // this가 변경되서 1-1의 값이랑 1-2의 값이 다르다.
  },

  print2: function () {
    console.log(`2-1 name : ${this.name}`);
    let me = this;
    (function () {
      console.log(`2-2 name : ${me.name}`);
    })();
    // 2-1과 2-2를 같게 해주기 위해 2-1의 this값을 me에 저장해서 사용한다.
  },

  print3: function () {
    console.log(`3-1 name : ${this.name}`)(() => {
      console.log(`3-3 name : ${this.name}`);
    })();
  },
};

console.log(tom);

// 다양한 형태들

const mysum1 = (x, y) => x + y;

const mysum2 = (x, y) => {
  x, y; //x, y가 되야하는데 자동고침 때문에 귀찮
};

const mysum3 = (x, y) => ({ x: x, y: y });
// :을 사용하면 함수로 인지하기 때문에 소괄호가 반드시 필요하다.

const mysum4 = (x, y) => {
  return { x: x, y: y };
};

const mysum5 = function (x, y) {
  return { x: x, y: y };
};

function mysum6(x, y) {
  return { x: x, y: y };
}

console.log(mysum1(1, 2));
console.log(mysum2(2, 3));
console.log(mysum3(3, 4));
console.log(mysum4(4, 5));
console.log(mysum5(5, 6));
console.log(mysum6(6, 7));
