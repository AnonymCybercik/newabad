import React from "react";
import "./categories.scss";

import { Link } from "react-router-dom";

import camera from "../../assets/images/category-icons/camera.png";
import magnitafon from "../../assets/images/category-icons/magnitafon.png";
import phone from "../../assets/images/category-icons/phone.png";
import monitor from "../../assets/images/category-icons/monitor.png";
import ps from "../../assets/images/category-icons/ps.png";
import headphone from "../../assets/images/category-icons/headphone.png";
import speaker from "../../assets/images/category-icons/speaker.png";
import accessory from "../../assets/images/category-icons/accessory.png";

function index() {
    return (
        <div className="categories-box">
            <div className="head-piece">
                <span className="title">Category</span>
                <Link to="/">
                    All Categories<i className="fa fa-angle-right"></i>
                </Link>
            </div>
            <div className="body-piece">
                <div className="caregory-card">
                    <img src={camera} alt="" />
                    <div className="text">Cameras, TVs & Audio</div>
                </div>
                <div className="caregory-card">
                    <img src={magnitafon} alt="" />
                    <div className="text">Radios & Subwoofers</div>
                </div>
                <div className="caregory-card">
                    <img src={phone} alt="" />
                    <div className="text">Smartphones & GPS</div>
                </div>
                <div className="caregory-card">
                    <img src={monitor} alt="" />
                    <div className="text">Monitors & Desktop</div>
                </div>
                <div className="caregory-card">
                    <img src={ps} alt="" />
                    <div className="text">Playstations & Games</div>
                </div>
                <div className="caregory-card">
                    <img src={headphone} alt="" />
                    <div className="text">Headphones & Airpods</div>
                </div>
                <div className="caregory-card">
                    <img src={speaker} alt="" />
                    <div className="text">Headphones & Airpods</div>
                </div>
                <div className="caregory-card">
                    <img src={accessory} alt="" />
                    <div className="text">Accessories & Devices</div>
                </div>
            </div>
        </div>
    );
}

export default index;
