// import logo from './logo.svg';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';
//Components
import Nav from "./components/Nav.js";
import Discover from "./components/Discover.js";
import Saved from "./components/Saved.js";

// Bootstrap
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import React, { Component } from 'react'

export class App extends Component {
  state={
    memes:[],
    saved:[],
  }
  componentDidMount() {
    axios.get("http://meme-api.herokuapp.com/gimme/15")
    .then(res => this.setState({memes:res.data.memes}))
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Nav/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Discover memes={this.state.memes}/>
              </React.Fragment>
            )}/>
            <Route path="/saved" render={props => (
              <React.Fragment>
                <Saved/>
              </React.Fragment>
            )}/>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}

export default App

