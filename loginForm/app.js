const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  //기본행동이란 어떤 function에 대해 브라우저가 기본적으로 수행하는 동작
  //누군가 form을 submit 하면 브라우저는 기본적으로 페이지를 새로고침한다.
  //preventDefault()를 추가함으로써 그 기본동작을 막는다.

  console.log(loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  //이제부터 input에 username을 입력하면 localstorage에 이름이 저장된다.

  //greeting.innerText = "Hello " + username;
  //더 편한 방법
  //만약 변수와 string을 합치고 싶을 때 위와 같이 표현 `` 안에 작성해야한다.
  //greeting.innerText = `Hello ${username} keep going`;
  //greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreeting(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
//addEventListner를 사용하는 것은 function을 바로 사용하려는 것이 아니다.
//그래서 onLoginSubmit() 과 같이 함수 실행을 적으면 안 된다.
//지정된 값이 있을 때만 실행시킨다.

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  // greeting.innerText = `Hello ${savedUsername}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);     함수로 만들었음
  paintGreeting(savedUsername);
}
