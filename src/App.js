import React from 'react';
import './App.css';
import ManageEmployee from './components/employeeManagenment';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render(){
    return (
      <ManageEmployee />
    );
  }
}

export default App;
