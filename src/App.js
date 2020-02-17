import {BrowserRouter as Router, Route} from "react-router-dom";
//Components
import Nav from "./components/Nav.js";
import Discover from "./components/Discover.js";
import Saved from "./components/Saved.js";
import React, { Component } from 'react'

//Description:
//This is the main component where all the other components are rendered

//Component Structure:
// App
//   |
//   |==> Nav
//   |
//   |==> Discover
//   |       |
//   |       |==> Panel
//   |
//   |==> Saved
//           |
//           |==> Panel

export class App extends Component {
  state={
    keyword:"",
  }

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

