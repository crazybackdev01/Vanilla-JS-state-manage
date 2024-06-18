import render from "./render.js";
import store from "./store.js";
import { addTodo, deleteTodo, toggleComplete } from "./store.js";

window.addEventListener("todosChange", () => {
  render();
});

const storeFromLocalStorage = JSON.parse(localStorage.getItem("store"));
if (storeFromLocalStorage?.todos.length > 0) {
  store.todos = storeFromLocalStorage.todos;
} else {
  localStorage.setItem("store", JSON.stringify(store));
  render();
}

const form = document.querySelector("#form");
const input = document.querySelector("#todo-title-input");
const todos = document.querySelector(".todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  const newTodo = {
    id: crypto.randomUUID(),
    title: value,
    completed: false,
  };
  addTodo(newTodo);
  input.value = "";
});

todos.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains("delete-todo-button")) {
    const id = target.closest(".todo").dataset.id;
    console.log(id);
    deleteTodo(id);
  }
});

todos.addEventListener("change", (e) => {
  const target = e.target;
  if (target.classList.contains("todo-checkbox")) {
    const id = target.closest(".todo").dataset.id;
    const completed = target.checked;
    toggleComplete(id, completed);
  }
});
