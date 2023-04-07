import React from "react";

const Todo = ({ item }) => {
  return (
    <div className="Todo">
      <input type="checkbox" id={item.id} name={item.name} checked={item.done} />
      <label htmlFor={item.id}>{item.title}</label>
    </div>
  );
};

export default Todo;
