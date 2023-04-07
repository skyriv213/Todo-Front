import React from 'react'; 
import Todo from './Todo';
import './App.css';

const App = ()=> {

  const items = [
    {id: 0,title: "hard",done: true},
    {id: 1,title: "react",done: false}
  ];
  
  const todoItems = items.map((item)=>
    <Todo item={item} key={item.id} />
  )

  return (
    <div className="App">
      {todoItems}
    </div>
  );
}

export default App;
