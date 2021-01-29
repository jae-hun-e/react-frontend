// 일부의 인자를 고정한 새로운 함수를 반환하는 함수를 만드는 기법.

// ex)
function userLogs(username) {
  function wrap(message) {
    // wrap이라는 함수가 만들어질때
    // username이라는 인수를 참조(고정)한다.
    console.log(`${username} - ${message}`);
  }
  return wrap;
}

const log = userLogs("Jae hun");
// 인자Jae hun이 usrname일때 생성된 wrap이 log이다.
log("Hello");
// log를 호출 할때는 'hello'는 message로 들어가고
// username이 jae hun으로 고정이 된 상태가 된다.

//
// arrow 함수로 표현하면 아래와 같다
// const userLogs = username => message => {
//     console.log(`${username} - ${message}`);
// }
