import React, { Component } from 'react'

class Timer extends Component{
    constructor(props){
        super(props)
        this.state = {
            time : 10,
            showTime : true,
            date : new Date()
        }
    }
    
    componentDidMount(){
        this.myInterval = setInterval(() => {
            this.setState(({ time }) => ({
                time: time - 1
            }))
        }, 1000);
    }

    tick(){
        this.setState(
            {
                time: this.componentDidMount(),
                date: new Date()
            }
        );
    }

    hideTime(){
        this.setState({showTime : false})
    }
    
    componentDidUpdate(){
        if(this.state.time === 0){
            this.state.showTime = false
        }
    }
    
    render(){
        return(
            <>
            {
                this.state.showTime && (
                    <h1 style = {{textAlign: "center"}}>
                        sekarang jam : {this.state.date.toLocaleTimeString()} hitung mundur: {this.state.time}
                    <br/>
                    </h1>
                )}
            </>
        )
    }
}



export default Timer