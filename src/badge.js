import React from 'react';
import picfernando from "../src/fernando.jpg"
import apipic from "../src/api.jpg"
import "./styles/badge.css";


class Badge extends React.Component {
    render() {
        return <div className="center">
            <div className="badge">
            <div className="apiPic">

                <img className="apiPic" src={apipic} alt="Logo"/>

            </div>
            <div className="center">
                <img className="picfernando" src={picfernando} alt="avatar"/>
                
            </div>
            <div>
                <p className="center">Frontend Engineer</p>
                <p className="center">@fullstackfernando</p>
            </div>
            <div className="center">
                #fullstackFernando
            </div>
        </div>
        </div>
        
    }
}

export default Badge;