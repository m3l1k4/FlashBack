
import React, { Component } from "react";
import './News.scss'

export default function News() {

    return (


        <div className="News">
            <a href="/news">   <img className="News--logo" src="../assets/banner.png" ></img></a>

            <div className="News--body">
                <h1 className="News--body__text" >
                    Slider-Puzzle
                   </h1>
                <p className="News--body__text--p">
                    Slider puzzle with randomly generated images, and different levels of difficulty
                     </p>
            </div>


            <div className="News--body">
                <h1 className="News--body__text" >
                    Cup-n-Ball
                   </h1>
                <p className="News--body__text--p"> 
              Classic cup and ball game
                </p>
            </div>



            <div className="News--options">


            </div>

        </div>

    )
}