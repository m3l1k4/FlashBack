
import React, { Component } from "react";
import './Cup.scss'



class Cup extends Component {


    render() {
        return (
            <div className="Cup" ref={el => (this.div = el)}>

                <h1 style={{ color: "white" }} >Coming Soon!</h1>

            </div>
        )
    }
}


export default Cup;