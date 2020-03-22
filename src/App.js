import React from 'react';
import logo from './logo.svg';
import './App.css';
import GitHubLogin from 'react-github-login';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { BrowserRouter as Router } from 'react-router-dom'


import Routes from './routes'

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);


class App extends React.Component {

  render() {
    return (
        <Router>
          <Routes />
        </Router>
    )
  }
}

export default App;
