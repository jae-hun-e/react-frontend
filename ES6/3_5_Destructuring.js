// 배열과 객체의 비구조화
// 리액트에서 자주 쓰는 문법임

// 배열(array)의 비구조화
let [name] = ["Tom", 10, "seoul"]; // name = Tom
// 파이썬에서는 좌우항이 개수가 같아야 하지만
// js는 달라도 가능은 하다. 좌항의 개수만큼만 할당됨
console.log("1: ", name);

let [, age] = ["Tom", 10, "seoul"]; // age = 10
// 인덱스를 맞춰줌으로써 값 지정가능
console.log("2: ", age);

let [name1, age1, region1, height1] = ["Tom", 10, "seoul"];
// 좌항이 더 많으면 남는건 undefined할당
// height = undefined
console.log("3: ", name1, age1, region1, height1);

let [name2, age2, region2, height2 = 150] = ["Tom", 10, "seoul"];
// 디폴트 값 할당 가능
console.log("4: ", name2, age2, region2, height2);

//함수 설정
function get_default_height() {
  console.log("get_default_height() 호출 ");
  return 150;
}
let [name3, age3, region3, height3 = get_default_height] = ["Tom", 10, "seoul"];
// 디폴트값 할당이 필요할 때 함수호출 가능
// 실제 디폴트값 할당이 필요할때 함수 호출
console.log("5: ", name3, age3, region3, height3);

// 객체(object)의 비구조화
const tom = {
  name4: "Tom",
  age4: 10,
  region: "Seoul",
};
const { age4, name4, height4 } = tom; // age4, name4, height4는 변수 tom의 속성중 동일 한 이름의 속성값을 저장한 새로 지정해준 변수명임
// 객체에서 필요한 값들만 뽑아냄 - age4, name4
// 객체에 없는 height는 undefined
console.log("6: ", age4, name4, height4);
const age5 = tom.age4; // 이런 식도 가능은 하지만 요즘에는 안씀
console.log("7: ", age5);
/*
옛날 방식 함수 쓰는 방법
var function print_person1(person) {
    console.log(person.name4);
}
*/
// 옛날에는 var를 위와같이 썻고 요즘에는 밑에처럼 const + arrow function 사용
// const 함수명 = (인수명지정) => {함수식}
const print_person1 = (person) => {
  console.log("8: ", person.name4);
};
print_person1(tom);

// 변수의 속성을 바로 사용가능
// 요런식도 가능 -- 소괄호 생략하면 안돼!!!
const print_person2 = ({ name4 }) => {
  console.log("9: ", name4);
};
print_person2(tom);

// 값을 변경 안할꺼면 상수(const)로 정의 하는게 가독성, 버그 방지에 좋다
const people = [
  { name: "tom", age: 10, region: "Seoul" }, // 첫번째 obj
  { name: "hun", age: 25, region: "Incheon" }, // 두번째 obj
];
for (const person of people) {
  // for( const 변수 of array값) => array의 index만큼 반복해서 person에 넣어줌,
  // person은 array의 index만큼 생김
  // people(array값)에서 값(obj1, obj2)을 하나씩 꺼내와서 person 이라는 상수로 저장함
  console.log(
    "10: ",
    person,
    "and",
    person.name,
    "and",
    age,
    "and",
    person.region
  );
}
// obj의 속성값만 사용하려면 이렇게도 쓸 수 있다.
for (const { name, age } of people) {
  console.log("11: ", name, "and", age);
}

// obj안에 obj 생성
const jaehun = {
  name5: "tom", // 속성이므로 앞에 name을 사용했어도 name사용 가능
  age5: 10,
  region: {
    country: "서울",
    postcode: "06222",
  },
};
const {
  name5, // 변수명이므로 앞에 변수명으로 사용한 name 사용 안됨
  region: { country, postcode, no },
} = jaehun;
// region은 경로로서만 활용되고, 실제로 값이 할당되지는 않는다.
// 실제 값 할당은 name, postcode만 된다.

console.log("12: ", name5, country, postcode, no);

/*
의문점

const tom ={
  name : "Tom"
}
console.log(tom.name)  은 Tom이다.
const {name} = tom 
console.log(name) 도 Tom이다.

const hun={
  name : "hun"
}
이건 가능하다.

console.log(hun.name) 은 hun이다.
const {name} = hun 은 name이 앞에 쓰였다고 name을 다른 이름으로 바꾸란다.

그러면 앞에 함수에 속성값에 name을 쓰면 밑에 오는 함수들의 속성값에 name은 속성이름으로 사용가능 하지만
const {name} = hun 을 하면서 hun의 name 속성을 받아오는 건 안된다?
그럼 속성값 재활용을 못하는거아님?? 
그럼 const {변수명이자 객체의 속성명} = 객체 꼴은 무슨 쓸모임??

const{변수명}의 변수명이 객체의 속성명과 다르면 참조를 못해오고 
같으려면 객체의 속성명이 매번 달라야 하는데??
*/
