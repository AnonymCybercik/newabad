import React from "react";
import "./banner.scss";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import { Link } from "react-router-dom";

function index() {
    return (
        <div className="main-banner">
            <div>
                <div className="banner">
                    <div className="text-details">
                        <div className="text">Check our huge</div>
                        <div className="title">Smartphones</div>
                        <div className="price">Starts from 599$</div>

                        <button className="banner-btn">Shop now</button>
                    </div>
                </div>
                <div className="mini-banner">
                    <div className="mini-image">
                        <img src={banner1} alt="" />
                    </div>
                    <div className="mini-image">
                        <img src={banner1} alt="" />
                    </div>
                    <div className="mini-image">
                        <img src={banner1} alt="" />
                    </div>
                    <div className="mini-image">
                        <img src={banner1} alt="" />
                    </div>
                    <div className="mini-image">
                        <img src={banner1} alt="" />
                    </div>
                    <div className="mini-image">
                        <img src={banner1} alt="" />
                    </div>
                    <div className="mini-image">
                        <img src={banner1} alt="" />
                    </div>
                    <div className="mini-image">
                        <img src={banner1} alt="" />
                    </div>
                    <div className="mini-image">
                        <img src={banner1} alt="" />
                    </div>
                    <div className="mini-image">
                        <img src={banner1} alt="" />
                    </div>
                    <div className="mini-image">
                        <img src={banner1} alt="" />
                    </div>
                    <div className="mini-image">
                        <img src={banner1} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="second-banner1">
                    <div className="text">
                        Top Rated
                        <br />
                        <b>Gadgets</b>
                        <br />
                        are on <b>Sale</b>
                        <br />
                        <Link to="/" className="shop-btn">
                            Shop now <i className="fa fa-angle-right"></i>
                        </Link>
                    </div>
                    <img src={banner2} alt="" />
                </div>
                <div className="second-banner2">
                    <div className="text">
                        Catch Big <br /><b>Deals</b> on <br /><b> Earbuds</b>
                        <br />
                        <Link to="/" className="shop-btn">
                            Shop now <i className="fa fa-angle-right"></i>
                        </Link>
                    </div>
                    <img src={banner3} alt="" />
                </div>
            </div>
        </div>
    );
}

export default index;
