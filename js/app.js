const loginForm = document.querySelector(".Login_form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");
const todo = document.querySelector(".todo");
const todo_List = document.querySelector(".todo-list");
const localUserName = localStorage.getItem("userName");
function onLoginSubmit(data) {
  data.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem("userName", userName);
  loginForm.classList.add("hidden");
  location.reload();
  greeting.innerHTML = `Hello ${userName} Welcome! <br> We Are Blues`;
  greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit);

if (localUserName === null) {
  loginForm.classList.remove("hidden");
} else {
  greeting.classList.remove("hidden");
  todo.classList.remove("hidden");
  todo_List.classList.remove("hidden");

  greeting.innerHTML = `Hello ${localUserName} Welcome! <br> We Are Blues`;
}
