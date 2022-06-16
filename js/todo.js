const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list");
let toDos = [];

const saveToDos = () => {
  localStorage.setItem("ToDos", JSON.stringify(toDos));
};

const deleteTodo = (e) => {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
};
const paintTodo = (newTodo) => {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "Delete";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  todoList.appendChild(li);
};
const handleToDoSubmit = (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
};

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("ToDos");

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintTodo);
}
