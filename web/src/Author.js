import React, { Component } from "react";
 
class Author extends Component {
  render() {
    return (
      <div>
        <h3>Author</h3>
        <ul >
          <li>Benjamin Fan: <a href="byfan@wisc.edu">bfan@cs.wisc.edu : </a></li>
        </ul>
        <br></br>
        <a
          className="App-link"
          href="https://music-base.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Heroku Link
        </a>
        
      </div>
    );
  }
}
 
export default Author;