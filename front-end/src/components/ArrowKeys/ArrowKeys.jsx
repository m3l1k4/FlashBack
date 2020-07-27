import React, { Component } from "react";
import './ArrowKeys.scss'

// import '../SoundCloud/SoundCloud.js'

class ArrowKeys extends Component {


    componentDidMount() {


        const script = document.createElement("script");
        script.async = true;
        script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js";
        this.div.appendChild(script);


        const script2 = document.createElement("script");
        script2.async = true;
        script2.src = '../jQuery/jsRev.js';
        this.div.appendChild(script2);


    }


    render() {


        return (


            <div>

                <div className="ArrowKeys" ref={el => (this.div = el)}>


                    <div>
                        <div id="controls">
                            <img id="left" src="../assets/arrows/staticLeft.gif" width="66px" height="66px"></img>
                            <img id="up" src="../assets/arrows/staticUp.gif" width="66px" height="66px"></img>
                            <img id="down" src="../assets/arrows/staticDown.gif" width="66px" height="66px"></img>
                            <img id="right" src="../assets/arrows/staticRight.gif" width="66px" height="66px"></img>
                        </div>
                        <div className="stage" id="stage">
                        <h3 className="pauseMsg" >Click on disco and press any key</h3>
                        </div>
                    </div>


                    

                    <div className="score" id="score">
                   
                        <h1 className="score--text">Score</h1>
                        <div className="board"></div>
                        <div class="instruc"><h1 class="instruc--text">Instructions</h1>
  <span class="instructext">Press P for Pause. To listen to music, pause game, start the DJ, then resume! Have fun!</span>
</div>
                    </div>
                </div>
            </div>
        );
    }

}



export default ArrowKeys;
