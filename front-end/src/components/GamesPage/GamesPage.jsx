
import React, { Component } from "react";
import './GamesPage.scss'

export default function GamesPage() {

    return (

        <div className="GamesPage">
            <div className="GamesPage__sidebar">
                <a href="/">   <img className="GamesPage__sidebar--logo" src="../assets/logo.png" ></img></a>

                <div className="GamesPage__sidebar--options">

                    <a href="/about"><img className="GamesPage__sidebar--options__icon" src="../assets/icons/ABOUT.svg" ></img></a>
                    <a href="/games"> <img className="GamesPage__sidebar--options__icon" src="../assets/icons/GAMES.svg" ></img></a>
                </div>
            </div>


            <div className="GamesPage__main">
            <a href="/DDR">   <img  className="GamesPage__main--sign__one" src="../assets/AD.png" ></img></a>
            <a href="#">   <img  className="GamesPage__main--sign__two" src="../assets/neon.png" ></img></a>
            <a href="#">   <img  className="GamesPage__main--sign__three" src="../assets/neon.png" ></img></a>
            </div>


        </div>

    )
}