const API = {
  async _fetch(url, options) {
    const result = {
      data: null,
      error: null
    };
    try {
      const response = await fetch(url, options);
      result.data = await response.json();
    } catch (error) {
      result.error = true;
    }
    return result;
  },

  async fetchInitialTodosApi() {
    return this._fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5");
  },
  async addTodoApi(todo) {
    return this._fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  },
  async toggleTodoApi(todo) {
    return this._fetch(`https://jsonplaceholder.typicode.com/posts/${todo.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        isComplete: todo.isComplete
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  },
  async removeTodoApi(todo) {
    return this._fetch(`https://jsonplaceholder.typicode.com/posts/${todo.id}`, {
      method: "DELETE"
    });
  }
};

export default API;
