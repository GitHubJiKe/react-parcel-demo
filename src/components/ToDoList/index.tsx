import React, { useCallback } from 'react';
import appStore, { ToDO } from '../../store/appStore';
import { Checkbox, Empty } from 'antd';
import { useObserver } from 'mobx-react';
import './style.scss';

interface IToDoListProps {
  type?: 'all' | 'done' | 'undone';
}

const ToDoItem = ({
  todo,
  onClick
}: {
  todo: ToDO;
  onClick(id: number): void;
}) => {
  return useObserver(() => (
    <li
      className="todo-item"
      key={todo.id}
      style={{ textDecoration: todo.done ? 'line-through' : '' }}
      onClick={() => onClick(todo.id)}
    >
      {todo.text}
      <Checkbox checked={todo.done}></Checkbox>
    </li>
  ));
};

const ToDoList: React.FC<IToDoListProps> = ({ type = 'all' }) => {
  let todos = appStore.todos;

  if (type === 'done') {
    todos = appStore.todos.filter((v) => v.done);
  }

  if (type === 'undone') {
    todos = appStore.todos.filter((v) => !v.done);
  }

  const toggleToDo = useCallback((id) => {
    appStore.toggleToDo(id);
  }, []);

  return useObserver(() => (
    <div className="todolist-root">
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <ToDoItem todo={todo} key={todo.id} onClick={toggleToDo} />
          ))}
        </ul>
      ) : (
        <Empty description="暂无数据" />
      )}
    </div>
  ));
};

export default ToDoList;
