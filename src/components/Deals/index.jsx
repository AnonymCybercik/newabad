import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../assets/images/shop1.png";
import banner2 from "../../assets/images/shop2.png";
import banner3 from "../../assets/images/shop3.png";

function index() {
    return (
        <div style={{ display: "flex" }}>
            <div className="shop-banner1">
                <div className="text">
                    Top Rated
                    <br />
                    <b>Gadgets</b>
                    <br />
                    are on <b>Sale</b>
                    <br />
                    <br />
                    <Link to="/" className="shop-btn" style={{color:"#1BBBEA"}}>
                        Shop now <i className="fa fa-angle-right"></i>
                    </Link>
                </div>
                <img src={banner3} alt="" />
            </div>
            <div className="shop-banner2">
                <div className="text">
                    Catch Big <br />
                    <b>Deals</b> on <br />
                    <b> Earbuds</b>
                    <br />
                    <br />
                    <Link to="/" className="shop-btn" style={{color:"#4B566B"}}>
                        Shop now <i className="fa fa-angle-right"></i>
                    </Link>
                </div>
                <img src={banner2} alt="" />
            </div>
            <div className="shop-banner3">
                <div className="text">
                    Catch Big <br />
                    <b>Deals</b> on <br />
                    <b> Earbuds</b>
                    <br />
                    <br />
                    <Link to="/" className="shop-btn" style={{color:"#E55452"}}>
                        Shop now <i className="fa fa-angle-right"></i>
                    </Link>
                </div>
                <img src={banner1} alt="" />
            </div>
        </div>
    );
}

export default index;
