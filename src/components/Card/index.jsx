import React from "react";
import { Link } from "react-router-dom";
import like from "../../assets/images/liked.png";
import primg from "../../assets/images/primg.png";
import starfill from "../../assets/images/Starfill.png";
import "./card.scss";
import store_light from "../../assets/images/store_light.svg"
import eye from "../../assets/images/eye.svg"

function index() {
    return (
        <div className="product-card">
            <div className="card-top">
                <div className="tags">30% OFF</div>
                <div className="like">
                    <img src={like} alt="" height="12px" width="14px" />
                </div>
            </div>
                <img src={primg} alt="" />
            <div className="info-box">
                <div className="price">UZS 5 835 000</div>
                <div className="info">Smart TV LED 49’’ Ultra HD</div>

                <div className="rating">
                    <img src={starfill} alt="" />
                    <img src={starfill} alt="" />
                    <img src={starfill} alt="" />
                    <img src={starfill} alt="" />
                    <img src={starfill} alt="" />
                    <span className="nums"> 235</span>
                </div>
            </div>
            <center>
                <button className="shop-card"><img src={store_light} width="12px" height="14px" style={{marginRight:"6px"}} alt="" />Add to Card</button>
                <Link to="/" className="quick">
                <img src={eye} alt="" style={{marginRight:"6px"}} /> Quick view
                </Link>
            </center>
        </div>
    );
}

export default index;
