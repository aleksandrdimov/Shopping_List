import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

let styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onToggle}
          ></TodoItem>
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;