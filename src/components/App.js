import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import   './App.css'
const App = () => (
  <div className='App'>
    <h1>ToDo-List</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;