import React, { Component } from 'react'
import Panel from "./Panel";
import axios from 'axios';


export class Discover extends Component {
    state = {
        memes1:[],
        memes2:[],
        memes3:[],
        filteredMemes1: [],
        filteredMemes2: [],
        filteredMemes3: [],
    }

    componentDidMount() {
        window.addEventListener('scroll', this.addMemes);
        // this.setState({isLoading:true})
        this.getMemes()
    }

    UNSAFE_componentWillReceiveProps(keyword) {
        this.filterMemes(keyword.keyword)
    }

    filterMemes = (s) => {
        console.log(s)
        let {memes1, memes2, memes3} = this.state
        let key = s
        let mainTemp = []
        let filteredTemp = []
        let temp1 = []
        let temp2 = []
        let temp3 = []
        mainTemp = mainTemp.concat(memes1,memes2,memes3)
        let len = mainTemp.length
        //Filter
        for(let j=0;j<len;j++){
            if(mainTemp[j].title.search(key)!==-1){
                filteredTemp.push(mainTemp[j])
            }
        }
        // console.log(filteredTemp)
        //Distribution
        for(let i=0; i<filteredTemp.length;i+=3){
            if(filteredTemp[i]) {temp1.push(filteredTemp[i])}
            if(filteredTemp[i+1]) {temp2.push(filteredTemp[i+1])}
            if(filteredTemp[i+2]) {temp3.push(filteredTemp[i+2])}
        }
        this.setState({filteredMemes1:temp1,filteredMemes2:temp2,filteredMemes3:temp3})
    }

    getMemes = () => {
        axios.get("http://meme-api.herokuapp.com/gimme/memes/15")
        .then(res => this.setState({memes1:res.data.memes,filteredMemes1:res.data.memes}))

        axios.get("http://meme-api.herokuapp.com/gimme/memes/15")
        .then(res => this.setState({memes2:res.data.memes,filteredMemes2:res.data.memes}))

        axios.get("http://meme-api.herokuapp.com/gimme/memes/15")
        .then(res => this.setState({memes3:res.data.memes,filteredMemes3:res.data.memes}))
    }

    addMemes = () => {
        let {memes1, memes2, memes3} = this.state
        console.log(this.state.memes1.length)
        if(memes1.length > 300 || memes2.length > 300 || memes3.length > 300 ) {
            memes1.shift()
            memes2.shift()
            memes3.shift()
        }
        if(window.scrollY!==0 && Math.abs(window.scrollY%500)<=10){
            // console.log(this.state.memes1.length)
            // console.log("loading...")
            axios.get("http://meme-api.herokuapp.com/gimme/memes/5")
            .then(res => this.setState({memes1:this.state.memes1.concat(res.data.memes)}))

            axios.get("http://meme-api.herokuapp.com/gimme/memes/5")
            .then(res => this.setState({memes2:this.state.memes2.concat(res.data.memes)}))

            axios.get("http://meme-api.herokuapp.com/gimme/memes/5")
            .then(res => this.setState({memes3:this.state.memes3.concat(res.data.memes)}))
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="main px-3 px-md-5 pt-4" onScroll={this.test}>
                    <div className="row d-flex justify-content-center my-5">
                        <div className="col-4 pr-1 m-0 d-flex flex-column align-items-end">
                            {this.state.memes1.map((meme)=>(
                                <Panel saved={false} key={meme.url} meme={meme}/>
                            ))}
                        </div>
                        <div className="col-4 p-0 d-flex flex-column align-items-center">
                            {this.state.memes2.map((meme)=>(
                                <Panel saved={false} key={meme.url} meme={meme}/>
                            ))}
                        </div>
                        <div className="col-4 pl-1 m-0 d-flex flex-column align-items-start">
                            {this.state.memes3.map((meme)=>(
                                <Panel saved={false} key={meme.url} meme={meme}/>
                            ))}
                        </div>
                    </div>
                </div>
        
            </React.Fragment>
            
        )
    }
}
// {this.props.memes.map((meme)=>(
//     <Panel saved={false} key={meme.url} meme={meme}/>
// ))}

/* <div className="col-4 pr-1 m-0 d-flex flex-column align-items-end">
    {this.state.filteredMemes1.length!==0 && this.state.filteredMemes1.map((meme)=>(
        <Panel saved={false} key={meme.url} meme={meme}/>
    ))}
</div>
<div className="col-4 p-0 d-flex flex-column align-items-center">
    {this.state.filteredMemes2.length!==0 && this.state.filteredMemes2.map((meme)=>(
        <Panel saved={false} key={meme.url} meme={meme}/>
    ))}
</div>
<div className="col-4 pl-1 m-0 d-flex flex-column align-items-start">
    {this.state.filteredMemes3.length!==0 && this.state.filteredMemes3.map((meme)=>(
        <Panel saved={false} key={meme.url} meme={meme}/>
    ))}
</div> */

export default Discover
