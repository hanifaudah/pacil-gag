import React, { Component } from 'react'
import Panel from "./Panel";

export class Discover extends Component {
    render() {
        return (
            <div className="main d-flex flex-column flex-wrap">
                {this.props.memes.map((meme)=>(
                    <Panel key={meme.url} meme={meme}/>
                ))}
            </div>
        )
    }
}

export default Discover
