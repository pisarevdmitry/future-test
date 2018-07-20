import React, { Component } from 'react';
import UsersTable from './UsersComponent'
import SelectData from './SelectData'
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SelectData/>
        <UsersTable/>
      </div>
    );
  }
}

export default App;
