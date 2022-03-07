import { useEffect } from "react";

const TodoPanel = ({ todolist, checkItem, deleteItem }: any) => {
  useEffect(() => {}, [todolist]);
  return (
    <>
      {todolist?.map((todo: any, index: number) => (
        <div className="item" key={index}>
          <input
            type="checkbox"
            checked={todo?.complete}
            onChange={(e) => checkItem(index, e)}
          />
          <p>{todo?.description}</p>
          <button onClick={(e) => deleteItem(index)}>❌ </button>
        </div>
      ))}
    </>
  );
};

export default TodoPanel;
