import React from 'react';
import Input from "./Components/Input";
import './App.css';

class App extends React.Component {
  state = { input: "" };
  render() {
    return (
      <div className="ui container">
        <Input />{" "}
      </div>
    );
  }
}

export default App;
