/* eslint react/no-did-not-mount-set-state: 0 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';

import MovieList from './MoviesList';
import MovieDetail from './MovieDetail';


const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <ReactTitle>Movie</ReactTitle> <img src={logo} className="App-logo" alt="logo" /> <ReactTitle>Database</ReactTitle>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;

const ReactTitle = styled.span`
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  color: #61dafb;
  font-size: 52px;
  letter-spacing: 2px;
  font-weight: bold;
`;
