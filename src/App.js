import React from 'react';
import axios from 'axios'
import Input from "./Components/Input";
import './App.css';

class App extends React.Component {
  handleSearchSubmit = async (searchInput)=>{
    const response = await axios.get("https://www.googleapis.com/youtube/v3/search",{
      params:{
        part: 'snippet',
        maxResults: 10,
        key: 'AIzaSyC0S6tivEgoHXjbVFmzLSI0Xy1TKBwD6YY',
        q: searchInput
      }
    })

    console.log(response.data.items);
  }






    // const response = await axios.get  ("https://www.googleapis.com/youtube/v3/search",
    //   {params: {
        
    // } }})}


  render() {
    return (
      <div className="ui container">
        <Input onSearchSubmit = {this.handleSearchSubmit} />
      </div>
    );
  }
}

export default App;
