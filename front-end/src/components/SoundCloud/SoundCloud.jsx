
import React, { Component } from "react";
import './SoundCloud.scss'

export default function SoundCloud() {

    return (


        <div className="SoundCloud">
            <img className="SoundCloud__img" src="../assets/juke-box-neon.png" ></img>
            <iframe className="SoundCloud__iframe" width="100" height="100" scrolling="no"
                frameborder="no" allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1098848317&color=%239b3ee3&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false">

            </iframe>
            

        </div>

    )
}