// 이름 data 받아서 화면에 기록하기

// 만약 querySelect 쓰면 Id 데려오는 거라고 명확히 알려주기
const logninInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  // username 유효성 검사
  //input에 입력되는 값에 대한 조건을 걸 수 있다
  const username = logninInput.value;
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  }
}
