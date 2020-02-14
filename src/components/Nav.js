import React, { Component } from 'react'
import '../App.css';
import {NavLink, Link} from "react-router-dom";


export class Nav extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <Link className="logo ml-lg-5" to={"/"}>PACIL-GAG</Link>
                <button id="burgerBtn" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="burger"></div>
                    <div className="burger"></div>
                </button>
                <div className="collapse navbar-collapse p-3 p-lg-0" id="navbarSupportedContent">
                    <form className="search-form ml-lg-auto p-0 pl-lg-5">
                        <input className="search-bar" type="search" placeholder="Search a meme" aria-label="Search" name="keyword"></input>
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
