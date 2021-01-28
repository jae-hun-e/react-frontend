// js 는 object/array에 대해서는 대입 시에 얕은 복사(shallow copy)가 됨

const obj1 = { value1: 10 };
const obj2 = obj1; // obj2가 obj1을 가르키고 있음, 얕은 복사임 obj1이 바뀌면 같이 바뀜
const obj3 = JSON.parse(JSON.stringify(obj1)); // 깊은 복사, 다른 여러가지 방식의 깊은 복사도 있음

obj1.value1 += 1;

console.log("obj1: ", obj1); // 11
console.log("obj2: ", obj2); // 11
console.log("obj3: ", obj3); // 10
