
import React, { Component } from "react";
import './HomeMenu.scss'

export default function HomeMenu() {

    return (

        <div className="HomeMenu">

            <div className="HomeMenu__sidebar">
            <img className="HomeMenu__sidebar--logo" src="../assets/logo.png" ></img>
            </div>

            <div className="HomeMenu__maindiv">
            <img className="HomeMenu__maindiv--icon iconB" src="../assets/icons/ABOUT.svg" ></img>
            <img className="HomeMenu__maindiv--icon iconA" src="../assets/icons/GAMES.svg" ></img>
            </div>
        </div>

    )
}