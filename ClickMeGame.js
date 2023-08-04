import React, { Component } from 'react'
import './ClickMeGame.css'
export class ClickMeGame extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            time:10,
            msg:''
            
        }
    }
    incrementCount=()=>{
        if(this.state.time!==0){
        this.setState({
            count:this.state.count+1
        })
        }
       
          
    }
    restart=()=>{
        this.setState({
            count:0,
            time:10,
            msg:''
           

    })
    this.interval=setInterval(this.tick,1000)
    
    }
    componentDidMount(){
        this.interval=setInterval(this.tick,1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    tick=()=>{
        
        if(this.state.time==0){
            clearInterval(this.interval);
            this.setState({
                msg:"Enough! I can't be beaten by you",
              
               })
        }
        else{
            this.setState({
                time:this.state.time-1
            })
        }
    }
  render() {
    return (
      <div>
        <h2 id="time">Click the butterfly Picture as many times as you can within {this.state.time} Seconds</h2>
       <img src="https://e0.pxfuel.com/wallpapers/386/414/desktop-wallpaper-whatsapp-d-p-orange-flowers-butterfly-whatsapp-dp.jpg" onClick={this.incrementCount}/>
       <h1 id="count">Your Score : {this.state.count}</h1>
       <h3 id="msg">{this.state.msg}</h3>
      {this.state.time==0 &&
            <button onClick={this.restart}>Restart </button>
       }
       
      </div>
    )
  }
}

export default ClickMeGame