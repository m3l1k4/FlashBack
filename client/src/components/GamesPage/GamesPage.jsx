
import React, { Component } from "react";
import './GamesPage.scss'

export default function GamesPage() {

    return (

        <div className="GamesPage">

            <div className="GamesPage__main">
            <a href="/DDR">   <img  className="GamesPage__main--sign__one" src="../assets/AD.png" ></img></a>
            <a href="/whack">   <img  className="GamesPage__main--sign__three" src="../assets/whack.png" ></img></a>
            <a href="/piano">   <img  className="GamesPage__main--sign__two" src="../assets/piano.png" ></img></a>
            <a href="/cup">   <img  className="GamesPage__main--sign__one" src="../assets/cup.png" ></img></a>
            </div>


        </div>

    )
}