import React, { Component } from 'react'

export class Panel extends Component {
    state = {
        imgClass:"card-img-top",
        cardFooterClass:"card-footer justify-content-between",
        saved:this.props.saved,
        bookmark:"far fa-bookmark mr-1 mt-1",
        id:this.props.meme.id,
    }

    componentDidMount() {
        if(this.state.saved){
            this.setState({bookmark:"fas fa-bookmark mr-1 mt-1"})
        } else {
            this.setState({bookmark:"far fa-bookmark mr-1 mt-1"})
        }
    }

    out = (e) => {
        this.setState({imgClass:"card-img-top",cardFooterClass:"card-footer justify-content-between"})
    }

    in = (e) => {
        this.setState({imgClass:"card-img-top border-transform",cardFooterClass:"card-footer justify-content-between transform"})
    }

    save = (e) => {
        let {meme} = this.props
        if(this.state.saved===true){
            console.log(this.state.id)
            localStorage.removeItem(this.state.id)
            this.setState({saved:false,id:null,bookmark:"far fa-bookmark mr-1 mt-1"})
        } else {
            meme["id"]=meme.postLink.slice(16)
            console.log(meme.id + " saved")
            this.setState({saved:true,id:meme.id,bookmark:"fas fa-bookmark mr-1 mt-1"})
            localStorage.setItem(meme.id,JSON.stringify(meme))
        }
    }

    render() {
        return (
            <div className="card" onMouseOver={this.in} onMouseOut={this.out}>
                <img src={this.props.meme.url} className={this.state.imgClass} alt="..."></img>
                <div className={this.state.cardFooterClass} onMouseOver={this.in} onMouseOut={this.out}>
                    <div>
                        <h1>{this.props.meme.title}</h1>
                        <p>{this.props.meme.subreddit}</p>
                    </div>
                    <div className="bookmark d-flex" onClick={this.save}>
                        <i className={this.state.bookmark}></i>
                        <h4>Save</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Panel
