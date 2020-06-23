import React from "react";
import appStore from "../../store/appStore";
import { Checkbox, Empty } from "antd";
import { useObserver } from "mobx-react";
import "./style.scss";

interface IToDoListProps {
  type?: "all" | "done" | "undone";
}

const ToDoList: React.FC<IToDoListProps> = ({ type = "all" }) => {
  let todos = appStore.todos;

  if (type === "done") {
    todos = appStore.todos.filter((v) => v.done);
  }

  if (type === "undone") {
    todos = appStore.todos.filter((v) => !v.done);
  }

  return useObserver(() => (
    <div className="todolist-root">
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li
              className="todo-item"
              key={todo.id}
              style={{ textDecoration: todo.done ? "line-through" : "" }}
              onClick={() => appStore.toodleToDo(todo.id)}
            >
              {todo.text}
              <Checkbox checked={todo.done}></Checkbox>
            </li>
          ))}
        </ul>
      ) : (
        <Empty description="暂无数据" />
      )}
    </div>
  ));
};

export default ToDoList;
