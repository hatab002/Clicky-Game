import React from "react";
import "./Score.css";

const Score = props => (
    <nav className="navbar navbar-default">
        <div className="container">
            <span className="navbar-brand">Clicky-Game</span>
            <span className="navbar-text">
                Score <span className="badge">{props.score}</span> | Top Score <span className="badge">{props.topScore}</span>
            </span>
        </div>
        <div>
        <span id="msg">{props.message}</span>  
        </div>
    </nav>
)

export default Score;