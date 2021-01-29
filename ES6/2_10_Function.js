// 함수의 다양한 형태

// {}를 사용하면 함수로 인지한다.

const mysum1 = (x, y) => x + y;

const mysum2 = (x, y) => {
  x, y;
};

const mysum3 = (x, y) => ({ x: x, y: y });

const mysum4 = (x, y) => {
  return { x: x, y: y };
};

const mysum5 = function (x, y) {
  return { x: x, y: y };
};

function mysum6(x, y) {
  return { x: x, y: y };
}
