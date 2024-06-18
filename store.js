const store = {
  todos: [
    {
      id: "1",
      title: "Test",
      completed: false,
    },
    {
      id: "2",
      title: "Test-2",
      completed: true,
    },
    {
      id: "3",
      title: "Test-3",
      completed: true,
    },
  ],
};

const storeHandler = {
  get(target, property) {
    return target[property];
  },
  set(target, property, value) {
    target[property] = value; // storeProxy.todos = [...storeProxy.todos, newTodo] ::: Immutable Change
    if (property === "todos") {
      window.dispatchEvent(new Event("todosChange"));
    }
    localStorage.setItem("store", JSON.stringify(store));
    return true;
  },
};
const addTodo = (newTodo) => {
  storeProxy.todos = [...storeProxy.todos, newTodo];
};

const deleteTodo = (id) => {
  storeProxy.todos = storeProxy.todos.filter((todo) => todo.id !== id);
};

function toggleComplete(id, completed) {
  storeProxy.todos = storeProxy.todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: completed };
    } else {
      return todo;
    }
  });
}

const storeProxy = new Proxy(store, storeHandler);

export { addTodo, deleteTodo, toggleComplete };
export default storeProxy;
