// 배열과 객체의 비구조화
// 리액트에서 자주 쓰는 문법임

//배열의 비구조화
let [name] = ["Tom", 10, "seoul"]; // name = Tom
// 파이썬에서는 좌우항이 개수가 같아야 하지만
// js는 달라도 가능은 하다. 근데 좌항의 개수만큼만 할당됨

let [, age] = ["Tom", 10, "seoul"]; // age = 10

let [name1, age1, region1, height1] = ["Tom", 10, "seoul"];
// 좌항이 더 많으면 남는건 undefined할당
// height = undefined
let [name2, age2, region2, height2 = 150] = ["Tom", 10, "seoul"];
// 디폴트 값 할당 가능

function get_default_height() {
  console.log("get_default_height() 호출 ");
  return 150;
}

let [name3, age3, region3, height3 = get_default_height] = ["Tom", 10, "seoul"];
// 디폴트값 할당이 필요할 때 호출 가능

// 객체의 비구조화
const tom = {
  name4: "Tom",
  age4: 10,
  region: "Seoul",
};

const { age4, name4, height } = tom;
// 객체에서 필요한 값들만 뽑아냄 - age, name
// 객체에 없는 height는 undefined

const age5 = tom.age; // 이런 식도 가능은 하지만 요즘에는 안씀

/*
var function print_person1(person) {
    console.log(person,name);
}
*/

// 옛날에는 var를 위와같이 썻고 요즘에는 밑에처럼 const로 함수사용
const print_person1 = (person) => {
  console.log(person.name);
};
print_person1(tom);

// 요런식도 가능 -- 소괄호 생략하면 안돼!!!
const print_person2 = ({ name }) => {
  console.log(name);
};
print_person2(tom);

// 값을 변경 안할꺼면 상수(const)로 정의 하는게 가독성, 버그 방지에 좋다
const people = [
  { name: "tom", age: 10, region: "Seoul" }, // 첫번째 obj
  { name: "hun", age: 25, region: "inchoun" }, // 두번째 obj
];

for (const person of people) {
  //people(array값)에서 값을 하나씩 꺼내와서
  console.log(person.name, person, age);
}
// 이렇게도 쓸 수 있다.
for (const { name, age } of people) {
  //매 people에 name, age값 가져와서 사용
  console.log(name, age);
}

const person = {
  name6: "tom",
  age: 10,
  region: {
    country: "서울",
    postcode: "06222",
  },
};

const {
  name6,
  region: { postcode },
} = person;
// region은 경로로서만 활용되고, 실제로 값이 할당되지는 않는다.
// 실제 값 할당은 name, postcode만 된다.

console.log("final: ", name6, postcode);
