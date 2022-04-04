import React from "react";
import rec from "../../assets/images/head.png";

function Card() {
    return (
        <div className="box">
            <img src={rec} className="rec-img" alt="" />
            <div className="info">
                <div className="pro-title">Wireless Bluetooth Headphones</div>
                <div className="text">UZS 1 035 000</div>
            </div>
        </div>
    );
}

export default Card;
