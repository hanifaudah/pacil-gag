import React, { Component } from 'react'
import Panel from "./Panel";
import axios from 'axios';

//Description:
//This is the Discover page component where you can find as many memes as you want

export class Discover extends Component {
    state = {
        memes1:[],
        memes2:[],
        memes3:[],
    }

    componentDidMount() {
        //Requesting memes when scrolling
        window.addEventListener('scroll', this.addMemes);
        this.getMemes()
        this.render()
    }

    //Get initial batch of memes
    getMemes = () => {
        axios.get("http://meme-api.herokuapp.com/gimme/memes/30")
        .then(res => this.setState({
            memes1:res.data.memes.slice(0,10),
            memes2:res.data.memes.slice(10,20),
            memes3:res.data.memes.slice(20,30),
        }))
    }

    //Load more memes
    addMemes = () => {
        let {memes1, memes2, memes3} = this.state
        if(window.scrollY!==0 && Math.abs(window.scrollY%500)<=10 && this.props.keyword===""){
            axios.get("http://meme-api.herokuapp.com/gimme/memes/30")
            .then(res => this.setState({
                memes1:memes1.concat(res.data.memes.slice(0,10)),
                memes2:memes2.concat(res.data.memes.slice(10,20)),
                memes3:memes3.concat(res.data.memes.slice(20,30))
            }))
        }
    }

    //Removing duplicate memes
    unique = (value,index,self) => {
        return self.indexOf(value) === index;
    }

    //Filtering memes for search
    checkKey = (s) => {
        return s.title.search(this.props.keyword)!==-1;
    }

    // Rendering JSX
    render() {
        return (
            <React.Fragment>
                <div className="main px-3 px-md-5 pt-4" onScroll={this.test}>
                    <div className="row d-flex justify-content-center my-5">
                        <div className="col-4 pr-1 m-0 d-flex flex-column align-items-end">
                            {this.state.memes1.filter(this.checkKey).map((meme)=>(
                                <Panel saved={false} key={meme.url} meme={meme}/>
                            ))}
                        </div>
                        <div className="col-4 p-0 d-flex flex-column align-items-center">
                            {this.state.memes2.filter(this.checkKey).map((meme)=>(
                                <Panel saved={false} key={meme.url} meme={meme}/>
                            ))}
                        </div>
                        <div className="col-4 pl-1 m-0 d-flex flex-column align-items-start">
                            {this.state.memes3.filter(this.checkKey).map((meme)=>(
                                <Panel saved={false} key={meme.url} meme={meme}/>
                            ))}
                        </div>
                    </div>
                </div>
        
            </React.Fragment>
            
        )
    }
}

export default Discover
