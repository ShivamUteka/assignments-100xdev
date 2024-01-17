/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
      this.todos = [];
  }

  add(todo) {
      this.todos.push(todo);
  }

  remove(indexOfTodo) {
      if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
          this.todos.splice(indexOfTodo, 1);
      } else {
          throw new Error("Invalid index. Todo not found.");
      }
  }

  update(index, updatedTodo) {
      if (index >= 0 && index < this.todos.length) {
          this.todos[index] = updatedTodo;
      } else {
          throw new Error("Invalid index. Todo not found.");
      }
  }

  getAll() {
      return this.todos.slice(); // Return a copy of the todos array to prevent direct modification
  }

  get(indexOfTodo) {
      if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
          return this.todos[indexOfTodo];
      } else {
          throw new Error("Invalid index. Todo not found.");
      }
  }

  clear() {
      this.todos = [];
  }


}

module.exports = Todo;
