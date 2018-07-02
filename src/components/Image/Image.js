import React from "react";
import "./Image.css";

const Image = props => (
    <div className="col-md-3" onClick={() => props.clickingGif(props.id)}>
        <div className="giffy">
            <img className="img-thumbnail img-fluid" src={props.src} alt="Gif" />
        </div>
    </div>
)

export default Image;