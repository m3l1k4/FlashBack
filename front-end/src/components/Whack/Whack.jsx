
import React, { Component } from "react";
import './Whack.scss'



class Whack extends Component {


  componentDidMount() {

    const script = document.createElement("script");
    script.async = true;
    script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js";
    this.div.appendChild(script);


    const script5 = document.createElement("script");
    script5.async = true;
    script5.src = '../jQuery/ducky.js';
    this.div.appendChild(script5);


  }


  render() {
    return (
      <div className="Whack" ref={el => (this.div = el)}>
        {/* <div className="Whack" >  */}
        <h1>Your score is</h1>
        <h1 className="score">0</h1>
        <div id="mole">
          <input type="image" src="./assets/duck.png" width="66px"></input>
        </div>
      

      </div>
    )
  }
}


export default Whack;