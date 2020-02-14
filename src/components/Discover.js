import React, { Component } from 'react'
import Panel from "./Panel";
// import {useParams} from "react-router-dom"

export class Discover extends Component {
    render() {
        return (
            <React.Fragment>

                <div className="main">
                    <div className="card-columns">
                        {this.props.memes.map((meme)=>(
                            <Panel saved={false} key={meme.url} meme={meme}/>
                        ))}
                    </div>
                </div>
        
            </React.Fragment>
            
        )
    }
}

export default Discover
