
import React, { Component } from "react";
import './SideBar.scss'

export default function SideBar() {

    return (

        
      <div className="SideBar">
                <a href="/">   <img className="SideBar--logo" src="../assets/logo.png" ></img></a>

                <div className="SideBar--options">

                    <a href="/about"><img className="SideBar--options__icon" src="../assets/icons/ABOUT.svg" ></img></a>
                    <a href="/games"> <img className="SideBar--options__icon" src="../assets/icons/GAMES.svg" ></img></a>
                </div>
          
    </div>

    )
}