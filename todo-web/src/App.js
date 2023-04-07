import React from 'react';
import Todo from './Todo';
import './App.css';
import { List, Paper } from '@material-ui/core';


const App = () => {

  const items = [
    { id: 0, title: "hard", done: true },
    { id: 1, title: "react", done: false }
  ];

  const todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item,idx) => (
        <Todo item={item} key={item.id} />
        ))}
      </List>
    </Paper>
  );

  return (
    <div className="App">
      {todoItems}
    </div>
  );
}

export default App;
