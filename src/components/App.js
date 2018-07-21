import React, { Component } from 'react';
import UsersComponent from './UsersComponent'
import SelectData from './SelectData'
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SelectData/>
        <UsersComponent/>
      </div>
    );
  }
}

export default App;
