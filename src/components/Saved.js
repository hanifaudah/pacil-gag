import React, { Component } from 'react'
import Panel from "./Panel"

export class Saved extends Component {
    state = {
        memes : [],
    }
    componentDidMount() {
        let temp = []
        for(let i=0; i<localStorage.length;i++){
            temp.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
        this.setState({memes:temp})
        console.log(this.state.memes)
    }

    componentDidUpdate() {
        if(this.state.memes.length!==localStorage.length){
            let temp = []
            for(let i=0; i<localStorage.length;i++){
                temp.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
            }
            this.setState({memes:temp})
        }
    }

    render() {
        return (
            <div className="main">
                <div className="card-columns">
                    {this.state.memes.map((meme)=>(
                        <Panel key={meme.id} saved={true} meme={meme}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Saved
