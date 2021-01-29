// Object선언시 문자열선언빼고가능
// tom1과 tom2는 동일
let tom1 = {
  name: "tom",
  age: 10,
};
console.log(tom1);
console.log(tom1.name);
console.log(tom1["name"]);
// 참조방법 두가지 동일

let tom2 = {
  name: "tom",
  age: 10,
};
console.log(tom2);

// key 값 사용할때
const tom = {
  //"score"+"1":10 //이렇게쓰면 안됨
  ["score" + "1"]: 10,
  //Array는 아님
};
console.log(tom);

// key값 삽입방법 -- 대괄홀 묶어야함
const key1 = "location";

const tom3 = {
  name: "tom",
  [key1]: "Seoul",
};
console.log(tom3);

// 단축 속성명
// js는 클래스없이 객체만들수있음
// key와 value 값이 같으면  줄여서 쓸 수 있음 (아래 tom4 와 tom5는 같은거)
// function 생략 가능
let name = "tom";
let age = 10;

let tom4 = {
  name: name,
  age: age,
  print: function () {
    console.log(`name : ${this.name}, age: ${this.age}`);
  },
};

let tom5 = {
  name,
  age,
  print() {
    console.log(`name : ${this.name}, age: ${this.age}`);
  },
};

console.log(tom4);
console.log(tom5);
