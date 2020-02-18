import React, { Component } from 'react'
import Panel from "./Panel"

//Description:
//This is the saved component that holds all the saved memes

export class Saved extends Component {
    state = {
        memes1 : [],
        memes2 : [],
        memes3 : [],
    }

    componentDidMount() {
        this.findMemes()
    }

    //Load saved memes from local storage
    findMemes = () => {
        let temp1 = []
        let temp2 = []
        let temp3 = []
        let len = localStorage.length
        for(let i=0; i<len;i+=3){
            if(JSON.parse(localStorage.getItem(localStorage.key(i)))!==null) {temp1.push(JSON.parse(localStorage.getItem(localStorage.key(i))))}
            if(JSON.parse(localStorage.getItem(localStorage.key(i+1)))!==null) {temp2.push(JSON.parse(localStorage.getItem(localStorage.key(i+1))))}
            if(JSON.parse(localStorage.getItem(localStorage.key(i+2)))!==null) {temp3.push(JSON.parse(localStorage.getItem(localStorage.key(i+2))))}
        }
        this.setState({memes1:temp1,memes2:temp2,memes3:temp3})
        console.log(temp1, temp2, temp3)
    }

    //Loading newly saved memes
    componentDidUpdate() {
        let {memes1,memes2,memes3} = this.state
        if(memes1.length+memes2.length+memes3.length!==localStorage.length){
            this.findMemes()
        }
    }

    //Filtering memes for search
    checkKey = (s) => {
        return s.title.search(this.props.keyword)!==-1;
    }

    //Make the background dark when hovering meme
    blind = () => {
        this.props.isHovered()
    }

    //Rendering JSX
    render() {
        return (
            <div className="main px-3 px-md-5 pt-4">
                <div className="d-flex flex-column align-items center mt-5">
                    <h1 className="savedHeader">Saved Memed</h1>
                    <h2 className="savedHeader">These are the memes that you love</h2>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-4 pr-1 m-0 d-flex flex-column align-items-end">
                        {this.state.memes1.length!==null && this.state.memes1.filter(this.checkKey).map((meme)=>(
                            <Panel key={meme.id} saved={true} meme={meme} isHovered={this.blind}/>
                        ))}
                    </div>
                    <div className="col-4 p-0 d-flex flex-column align-items-center">
                        {this.state.memes2.length!==null && this.state.memes2.filter(this.checkKey).map((meme)=>(
                            <Panel key={meme.id} saved={true} meme={meme} isHovered={this.blind}/>
                        ))}
                    </div>
                    <div className="col-4 pl-1 m-0 d-flex flex-column align-items-start">
                        {this.state.memes3.length!==null && this.state.memes3.filter(this.checkKey).map((meme)=>(
                            <Panel key={meme.id} saved={true} meme={meme} isHovered={this.blind}/>
                        ))}
                    </div> 
                </div>
            </div>
        )
    }
}

export default Saved
