// import logo from './logo.svg';
import {BrowserRouter as Router, Route} from "react-router-dom";
//Components
import Nav from "./components/Nav.js";
import Discover from "./components/Discover.js";
import Saved from "./components/Saved.js";

// Bootstrap


import React, { Component } from 'react'

export class App extends Component {
  state={
    keyword:"",
  }
  // componentDidMount() {
  //   axios.get("http://meme-api.herokuapp.com/gimme/15")
  //   .then(res => this.setState({memes:res.data.memes}))
  // }
  printKey = (s) => {
    this.setState({keyword:s})
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="">
            <Nav printKey={this.printKey}/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Discover keyword={this.state.keyword}/>
              </React.Fragment>
            )}/>
            <Route path="/saved" render={props => (
              <React.Fragment>
                <Saved keyword={this.state.keyword}/>
              </React.Fragment>
            )}/>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}

export default App

