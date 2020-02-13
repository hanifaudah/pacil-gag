import React, { Component } from 'react'
import Panel from "./Panel"

export class Saved extends Component {
    state = {
        memes : [],
    }
    componentDidMount() {
        for(let i=0; i<localStorage.length;i++){
            this.state.memes.push(localStorage.getItem(i))
        }
    }
    render() {
        return (
            <div className="main d-flex flex-column flex-wrap">
                {this.state.memes.map((meme)=>(
                    <Panel meme={JSON.parse(meme)}/>
                ))}
            </div>
        )
    }
}

export default Saved
