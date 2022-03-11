import React, { useEffect, useState } from "react";
import { TodoType } from "./../Types";

const TodoPanel = ({
  todolist,
  checkItem,
  deleteItem,
}: {
  todolist: Array<TodoType>;
  checkItem: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteItem: (index: number) => void;
}) => {
  useEffect(() => {}, [todolist]);
  return (
    <>
      {todolist?.map((todo: TodoType, index: number) => (
        <div className="item" key={index}>
          <input
            type="checkbox"
            checked={todo?.complete}
            onChange={(e) => checkItem(index, e)}
          />
          <p>{todo?.description}</p>
          <button onClick={() => deleteItem(index)}>❌ </button>
        </div>
      ))}
    </>
  );
};

export default TodoPanel;
