import React, { Component } from "react";
import logo from './plate.svg';
import './Container/App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Recommendations from './Container/Recommendations.js'
import Author from './Author.js'
import Sample from './Container/Search.js'
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';
// import Messaging from './Container/Messaging.js'

const Bounce = styled.div`animation: 3s ${keyframes`${bounce}`} infinite`;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Bounce><h1 className="retroshadow">Eat Street</h1></Bounce>
      </header>
      <div>
        <HashRouter>
          <div>
            <ul className="header">
              <li><NavLink to="/Search">Zip Search</NavLink></li>
              <li><NavLink to="/Recommendations">Area Match</NavLink></li>
              <li><NavLink to="/author">Author</NavLink></li>

            </ul>
            <div className="content">
              <Route path="/Search" component={Sample} />
              <Route path="/Recommendations" component={Recommendations} />
              <Route path="/author" component={Author} />
            </div>
          </div>
        </HashRouter>
        </div>
    </div>
  );
}
// 4943VZJ
export default App;
