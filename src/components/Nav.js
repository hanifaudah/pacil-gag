import React, { Component } from 'react'
import '../App.css';
import {NavLink, Link} from "react-router-dom";


export class Nav extends Component {
    state = {
        btn1:"burger",
        btn2:"burger",
        icon:"",
        clicked:false,
    }
    search = (e) => {
        this.props.printKey(e.target.value)
    }

    changeIcon = () => {
        let {clicked} = this.state
        if(!clicked) { 
            this.setState({icon:"fas fa-times fa-2x",btn1:"",btn2:""})
        } else {
            this.setState({icon:"",btn1:"burger",btn2:"burger"})
        }
        this.setState({clicked:!clicked})
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top">
                <Link className="logo ml-lg-5" to={"/"}>PACIL-GAG</Link>
                <button onClick={this.changeIcon} id="burgerBtn" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div className={this.state.btn1}></div>
                    <div className={this.state.btn2}></div>
                    <i class={this.state.icon}></i>
                </button>
                <div className="collapse navbar-collapse p-3 p-lg-0" id="navbarSupportedContent">
                    <form className="search-form ml-lg-auto p-0 pl-lg-5">
                        <input onChange={this.search} className="search-bar" type="search" placeholder="Search a meme" aria-label="Search" name="keyword"></input>
                    </form>
                    <div className="navbar-nav ml-lg-auto mr-lg-5">
                        <NavLink className="link nav-item nav-link" exact activeClassName="clicked" to={"/"}>Discover</NavLink>
                        <NavLink className="link nav-item nav-link" exact activeClassName="clicked" to={"/saved"}>Saved Memes</NavLink>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav
