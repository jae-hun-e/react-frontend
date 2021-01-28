// 함수 / Named Parameters

// 파이썬에서는 포지션 아규먼트(위치인자) 사용해서 순서대로 들어간다.
// def print_person(name, age, region)
// print_person('ton',10, seoul)
// print_person(name='tom', age=10,region]'seoul')
// 하나의 정의로 두가지 방식 모두 가능

// node에서는
function print_person1(name, age, region) {
  // 인덱스에 맞춰서 값이 들어가게됨
  console.log("1>", name, age, region);
}
print_person1("tom", 10, "seoul");
// 인덱스에 맞게 들어감

function print_person2({ name, age, region }) {
  console.log("2>", name, age, region);
}
print_person2({ name: "tom", age: 10, region: "seoul" });
// 인자에 이름을 지정하려면 object형식으로 만들어줘야 한다.
// 실제로는 하나의 obj값을 넘기고 비구조화 문법으로 나눠서 들어간다.
