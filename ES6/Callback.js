// 콜백 함수 => 요즘 지양하는 추세

const fs = require("fs");
// node.js에서만 가능, react에서는 require안씀

fs.readdir(".", function (err, files) {
  //현재 디렉토리에서 순회해서 에러와 파일목록을 얻어냄
  if (err) {
    console.log("Error finding files: " + err);
  } else {
    console.log(files);
  }
});

// fs.readdir이 시작하고 콜백함수가 호출되기 전에 출력된다.
console.log("1: ENDED");

//
//
// promise 패턴

const fs = require("fs");
const fsPromises = fs.promises;

fsPromises
  .readdir(".") // readdir가 promise를 지원한다면
  .then((files) => {
    // 정상처리
    console.log(files);
  }) // .then 계속 체이닝걸수있다. 앞선 then에서 반환한 값을 뒤에서 연계해서 반환가능
  .catch((err) => console.error(err)); // 에러사항

// fsPromises.readdir이 끝나기 전에 수행한다.
console.log("2 : ENDED");

// 콜백과의 차이점은 콜백에서는 err,file을 같이 받고 promise 패턴에서는 err, file이 각각 분기가 된다.
// 즉, promise가 더 가독성이 좋다.

//
//
// async/await 패턴 => EX8부터 지원

const fs = require("fs");
const fsPromises = fs.fsPromises;

async function fn() {
  try {
    let files = await fsPromises.readdir("."); // 내부적으로는 promise객체를 사용
    // promise패턴 코드가 있어야 한다.
    // then의 결과를 받아옴
    console.log(files);
  } catch (err) {
    console.log(err);
  }
}

fn(); //async 함수 이기에, 완료 전에 다음 로직이 동장

// async함수가 완료되기 전에 수행한다.
console.log("3: ENDED");

// react 프로젝트를 할때 creatreact.app안에 위 세팅이 다 되어있어서 바로 사용 가능
