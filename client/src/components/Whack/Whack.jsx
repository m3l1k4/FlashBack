
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

        <div className="Whack--menu">
          <div className="Whack__score-board">
            <h1 className="Whack__score-board--text">Score</h1>
            <h1 className="Whack__score-board--value">0</h1>
          </div>

          <div id="Whack__restart" className="Whack__restart" >
            <input className="Whack__restart" type="image" src="../assets/reset.png" width="66px" ></input>
          </div>


        <div className="Whack__instructions">
<h1 className="Whack__instructions--opt" >INSTRUCTIONS</h1>
          <h1 className="Whack__instructions--text">
            Thats not a Duck! <br/>
            Click him to start.  <br/>
            Catch him if you can! <br/>
            Hint: turn on sound : )
        
          </h1>

</div>
        </div>

       

        <div className="Whack__mole">
        <div id="mole">
          <input type="image" className="mole-img" src="https://media.giphy.com/media/2zdnjezC5JzvG69G8U/giphy.gif" width="100px" ></input>
        </div>
        </div>
       


      </div>
    )
  }
}


export default Whack;