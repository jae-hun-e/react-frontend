// var는 변수선언시 최상단으로읽힘
console.log(app); //undefined
var app = "Hello";
console.log(app);

// const는 상수로 선언시 값지정해줘야하고 바꿀수없음 (버그가능성 낮아짐)
// 하지만 안에 속성은 바꿔줄수있음
const name = "hun";
// name = "HUN"; // 변경안됨, 오류뜸
console.log(name);

const tom = { lang: "python" };
tom.lang = "javascript";
console.log(tom);

// let은 변수선언으로 값변경가능,꼭선언시 값지정할 필요없음
// for(let=i,...)로하면 반복때마다 새로운변수로 만들어지면서 참조됨
let name2;
console.log(name2); //undefined
name2 = "hun";
console.log(name2);
