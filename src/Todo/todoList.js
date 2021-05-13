import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ data, toggleTodo, deleteTodo }) => {
  console.log('TodoList');
  return (
    <div className="listContainer">
      {data.map(todo => (
        <div className="todoList" key={todo.id}>
          <input type="checkbox" checked={todo.isDone} onChange={() => toggleTodo(todo)} />
          <p
            className="todoText"
            style={{
              textDecoration: todo.isDone ? 'line-through' : 'none',
            }}
          >
            {todo.todoText}
          </p>
          <button type="button" onClick={() => deleteTodo(todo)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

TodoList.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      todoText: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default memo(TodoList);