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
    if (property === "todos") {
      window.dispatchEvent(new Event("todosChange"));
    }
    return (target[property] = value);
  },
};

const storeProxy = new Proxy(store, storeHandler);

export default storeProxy;
