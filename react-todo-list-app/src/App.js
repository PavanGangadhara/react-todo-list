import React from 'react';
import uuid from 'uuid'
import "bootstrap/dist/css/bootstrap.min.css"
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

// showing vs-code git-hub setup
// second committtttttttt

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <TodoInput />
        <TodoList />
      </div>
    );
  }
 
}

export default App;
