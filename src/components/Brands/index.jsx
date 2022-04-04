import React from "react";
import brand from "../../assets/images/brand.png";
import { Link } from "react-router-dom";

import './brands.scss'

function index() {
    return (
        <div className="brand-box">
            <div className="head-piece">
                <span className="title">Featured Brands</span>
                <Link to="/">
                    All Offers<i className="fa fa-angle-right"></i>
                </Link>
            </div>
            <span className="brand">
                <img src={brand} width="297px" alt="" />
                <div className="title">APPLE</div>
                <div className="text">New Rose gold Iphone 13</div>
            </span>
            <span className="brand">
                <img src={brand} width="297px" alt="" />
                <div className="title">APPLE</div>
                <div className="text">New Rose gold Iphone 13</div>
            </span>
            <span className="brand">
                <img src={brand} width="297px" alt="" />
                <div className="title">APPLE</div>
                <div className="text">New Rose gold Iphone 13</div>
            </span>
            <span className="brand">
                <img src={brand} width="297px" alt="" />
                <div className="title">APPLE</div>
                <div className="text">New Rose gold Iphone 13</div>
            </span>
        </div>
    );
}

export default index;
