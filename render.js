import store from "./store.js";

const render = () => {
  const todos = document.querySelector(".todos");
  /*
  todos.innerHTML = `<li class="todo" data-id="1" >
            <span class="todo-title">Todo 1</span>
            <div class="toggle-delete">
                <input type="checkbox" class="todo-checkbox">
                <button class="delete-todo-button">X</button>
            </div>
        </li>`;
    */
  const todosElements = store.todos.map(
    (item) => `
      <li class="todo" data-id=${item.id} >
            <span class="todo-title ${item.completed ? "completed" : ""}">${
      item.title
    }</span>
            <div class="toggle-delete">
                <input type="checkbox" class="todo-checkbox" ${
                  item.completed ? "checked" : ""
                }>
                <button class="delete-todo-button">X</button>
            </div>
        </li>
    `
  );
  todos.innerHTML = todosElements.join("");
};

export default render;
