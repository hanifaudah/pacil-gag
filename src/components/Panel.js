import React, { Component } from 'react'

export class Panel extends Component {
    save = (e) => {
        let {meme} = this.props
        localStorage.setItem(localStorage.length,JSON.stringify(meme))
    }
    render() {
        return (
            <div className="panel">
                <img className="meme-img img-fluid" alt="" src={this.props.meme.url}></img>
                <div className="meme-details justify-content-between">
                    <div className="flex-column">
                        <h1>{this.props.meme.title}</h1>
                        <p>{this.props.meme.subreddit}</p>
                    </div>
                    <div className="d-flex">
                        <i className="far fa-bookmark mr-1"></i>
                        <h4 onClick={this.save}>Save</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Panel
