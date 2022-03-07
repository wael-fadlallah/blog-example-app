import { useState } from "react";
import TodoPanel from "./components/TodoPanel";
import { TodoType } from "./Types";

function App() {
  const [todolist, setTodolist] = useState<Array<TodoType>>([]);

  const checkItem = (index: number) => {
    const todos = [...todolist];
    todos[index] = {
      ...todos[index],
      complete: !todos[index].complete ?? true,
    };
    setTodolist(todos);
  };

  const addTodo = (e: any) => {
    e.preventDefault();

    const todo: TodoType = {
      description: e.target.elements.todo.value,
      complete: false,
    };
    const newTodo = [...todolist, todo];
    setTodolist(newTodo);
    e.target.reset();
  };

  const deleteItem = (index: number) => {
    setTodolist((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <div className="inbox">
        <TodoPanel
          todolist={todolist}
          deleteItem={deleteItem}
          checkItem={checkItem}
        />

        <div className="add-todo">
          <form onSubmit={addTodo}>
            <input
              type="text"
              placeholder="Add todo item"
              name="todo"
              className="h-[40px] w-[80%] border-none"
            />
            <button className="h-[40px] w-[18%]" type="submit">
              📓 Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
