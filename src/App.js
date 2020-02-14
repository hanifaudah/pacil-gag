// import logo from './logo.svg';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';
//Components
import Nav from "./components/Nav.js";
import Discover from "./components/Discover.js";
import Saved from "./components/Saved.js";

// Bootstrap


import React, { Component } from 'react'

export class App extends Component {
  state={
    memes:[],
  }
  componentDidMount() {
    axios.get("http://meme-api.herokuapp.com/gimme/15")
    .then(res => this.setState({memes:res.data.memes}))
  }

  // search = (keyword) => {
  //   let res = []
  //   let {memes} = this.state
  //   for(let i=0; i<memes.length;i++){
  //     if(memes[i].title.search(keyword)!==-1){
  //       res.push(memes[i])
  //     }
  //   }
  //   return res;
  // }
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="">
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
            {/* <Route path="/:keyword" render={props => (
              <React.Fragment>
                <Discover memes={this.search("z")}/>
            </React.Fragment> */}
          </div>
        </Router>
      </React.Fragment>
    )
  }
}

export default App

