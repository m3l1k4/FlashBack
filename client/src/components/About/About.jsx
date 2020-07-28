
import React, { Component } from "react";
import './About.scss'

export default function About() {

    return (


        <div className="About">
            <a href="/">   <img className="About--logo" src="../assets/logo.png" ></img></a>

            <div className="About--body">
                <h1 className="About--body__text" >
                    The simpler times.
                    You would come home, grab a snack and go to the computer room.
                    Start Dial-up, hoping your parents weren't going to use the phone.
                    You would chat with your friends on MSN, and play flash games.
                    This place is a flashback to those times.
                 When simple games and poorly designed graphics were rad.</h1>
            </div>


            <div className="About--options">
           
                    <a href="/requests"><button type="submit" className="About--options__button"
                        id="upload-submit-button">REQUEST A GAME</button></a>


            

            </div>

        </div>

    )
}