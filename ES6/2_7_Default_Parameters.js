// node/ python 디폴트 값에 함수를 적용하는 경우 차이점
// node는 함수의 디폴트 값이 필요할 때 마다 호출된다.
// python은 함수가 만들어질때 호출된다.

function hello(name = "Tom", age = 10) {
  console.log(`나는 ${name}. ${age}살이야.`);
}

const get_default_age = () => 10;

function hello2(name = "Tom", age = get_default_age()) {
  console.log(`나는 ${name}. ${age}살이야.`);
}

console.log(hello("steve"));
console.log(hello2("steve2"));
