You have been given the code of a purely frontend TODO app
You have to fill in the following functions - 
 - addTodoToDom
 - removeTodoFromDom
 - updateTodoInDom
 - updateState

These 4 functions comprise of what it means to create a library like React.
The goal is the following - 
1. Any time the updateState function is called with a new state, the updateState function calculates the diff between newTodos and oldTodos and call `addTodoToDom`, `removeTodoFromDom` or `updateState` based on the calculated diff.
2. They id of a todo uniquely identifies it. If the title of a todo with the same id changes in two iterations, updateTodoInDom should be called for it.
3. The structure of the state variable looks something like this - 
```js
    const todos = [{
        title: "Go to gym",
        description: "Go to gym from 7-8PM",
        id: 1
    }]
```

// Sample initial state
let oldTodos = [];
let newTodos = [
  {
    title: "Go to gym",
    description: "Go to gym from 7-8PM",
    id: 1
  },
  // Add more todos as needed
];

function addTodoToDom(todo) {
  const todosDiv = document.getElementById("todos");
  const todoElement = document.createElement("div");
  todoElement.id = `todo_${todo.id}`;
  todoElement.innerHTML = `<strong>${todo.title}</strong>: ${todo.description}`;
  todosDiv.appendChild(todoElement);
}

function removeTodoFromDom(todoId) {
  const todosDiv = document.getElementById("todos");
  const todoElement = document.getElementById(`todo_${todoId}`);
  if (todoElement) {
    todosDiv.removeChild(todoElement);
  }
}

function updateTodoInDom(oldTodo, newTodo) {
  const todoElement = document.getElementById(`todo_${oldTodo.id}`);
  if (todoElement) {
    todoElement.innerHTML = `<strong>${newTodo.title}</strong>: ${newTodo.description}`;
  }
}

function updateState(newTodos) {
  const added = [];
  const deleted = [];
  const updated = [];

  newTodos.forEach((newTodo) => {
    const oldTodo = oldTodos.find((todo) => todo.id === newTodo.id);

    if (!oldTodo) {
      added.push(newTodo);
    } else if (oldTodo.title !== newTodo.title || oldTodo.description !== newTodo.description) {
      updated.push({ oldTodo, newTodo });
    }
  });

  oldTodos.forEach((oldTodo) => {
    if (!newTodos.find((todo) => todo.id === oldTodo.id)) {
      deleted.push(oldTodo);
    }
  });

  added.forEach(addTodoToDom);
  deleted.forEach((todo) => removeTodoFromDom(todo.id));
  updated.forEach(({ oldTodo, newTodo }) => updateTodoInDom(oldTodo, newTodo));

  oldTodos = newTodos;
}

// Example usage
updateState(newTodos);
