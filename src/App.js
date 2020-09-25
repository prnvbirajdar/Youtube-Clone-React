import React from 'react';
import axios from 'axios'
import Input from "./Components/Input";
import './App.css';

class App extends React.Component {
  handleSearchSubmit = (searchInput)=>{

    console.log(searchInput);
  }


  render() {
    return (
      <div className="ui container">
        <Input onSearchSubmit = {this.handleSearchSubmit} />
      </div>
    );
  }
}

export default App;
