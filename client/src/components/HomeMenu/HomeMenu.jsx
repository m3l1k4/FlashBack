
import React, { Component } from "react";
import './HomeMenu.scss'

export default function HomeMenu() {

    return (

        <div className="HomeMenu">
            <div className="HomeMenu__maindiv">
            <a href="/about"><img className="HomeMenu__maindiv--icon iconB" src="../assets/icons/ABOUT.svg" ></img></a>
            <a href="/games"> <img className="HomeMenu__maindiv--icon iconA" src="../assets/icons/GAMES.svg" ></img></a>
            <a href="/news"> <img className="HomeMenu__maindiv--icon iconC" src="../assets/icons/NEWS.svg" ></img></a>
            </div>
        </div>

    )
}