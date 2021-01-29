const tom = {
  name1: "Tom",
  age1: 10,
};
const { name1, age1 } = tom;
console.log(name1, age1);

//객체 비구조화

// const hun2 = {
//     name: "Hun",
//     age: 25,
//   };
//   const { name, age2 } = hun2;
//   console.log(name2, age2);
// name은 위에 key값이랑 겹쳐서 오류
// age2는 맞는 키값이없어서 할당안됨

const hun2 = {
  name2: "Hun",
  age2: 25,
};
const { name2, age2 } = hun2;
console.log(name2, age2);
// 객체 비구조화를 하려면 key값을 매번 새로운것으로 지정해줘야됨?
//

//원래방법
const hun2_1 = {
  name1: "Hun2",
  age1: 25.1,
};
const name3 = hun2_1.name1;
const age3 = hun2_1.age1;
console.log(name3, age3);
// 이건 key값 같게해도 찾아서 쓸 수있음
