import React, { Component } from "react";
import './ArrowKeys.scss'

// import '../SoundCloud/SoundCloud.js'

class ArrowKeys extends Component {


    componentDidMount() {
        // const script = document.createElement("script");
        // script.async = true;
        // script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js";
        // this.div.appendChild(script);


        // const script2 = document.createElement("script");
        // script2.async = true;
        // script2.src = './jsRev.js';
        // this.div.appendChild(script2);



        const script3 = document.createElement("script");
        script3.async = true;
        script3.src = '../SoundCloud/SoundCloud.js';
        this.div.appendChild(script3);

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
                        <div className="stage"></div>
                    </div>
                    <div div className="score">

                        <h1 className="score--text">Score</h1>
                        {/* <h1 className="score--text">C</h1>
                        <h1 className="score--text">O</h1>
                        <h1 className="score--text">R</h1>
                        <h1 className="score--text">E</h1> */}
                        <div className="board"></div>
               
                    </div>

                    {/* <div className="soundCloud">
   
                            <iframe className="soundCloud__iframe"width="200" height="100" scrolling="no"
                                frameborder="no" allow="autoplay"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1098848317&color=%239b3ee3&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false">
                                    
                                </iframe>
                                <img  className="soundCloud__img"src="../assets/juke-box-neon.png" ></img>
                        </div> */}
                </div>
            </div>
        );
    }

}



export default ArrowKeys;
