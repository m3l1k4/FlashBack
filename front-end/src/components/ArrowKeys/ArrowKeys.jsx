import React, { Component } from "react";
import './ArrowKeys.scss'
import $ from 'jquery';
var notes = [];


class ArrowKeys extends Component {


    componentDidMount() {
        // const script = document.createElement("script");
        // script.async = true;
        // script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js";
        // this.div.appendChild(script);


        const script2 = document.createElement("script");
        script2.async = true;
        script2.src = './jsRev.js';
        this.div.appendChild(script2);

    }


    render() {

        return (


            <div>

                <div className="ArrowKeys" ref={el => (this.div = el)}>

                    <div class="stage"></div>
                    <div id="controls">
                        <img id="left" src="../assets/arrows/staticLeft.png"></img>
                        <img id="up" src="../assets/arrows/staticUp.png"></img>
                        <img id="down" src="../assets/arrows/staticDown.png"></img>
                        <img id="right" src="../assets/arrows/staticRight.png"></img>
                    </div>

                </div>
            </div>
        );
    }

}



export default ArrowKeys;
