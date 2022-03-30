import React from "react";
import "./products.scss";
import { Link } from "react-router-dom";
import like from "../../assets/images/liked.png";
import primg from "../../assets/images/primg.png";
import starfill from "../../assets/images/Starfill.png";
import star from "../../assets/images/Star.png";

function index() {
    return (
        <div className="products">
            <div className="head-piece">
                <span className="title">Category</span>
                <Link to="/">
                    All Categories<i className="fa fa-angle-right"></i>
                </Link>
            </div>

            <div className="product-card">
                <div className="card-top">
                    <div className="tags">30% OFF</div>
                    <div className="like">
                        <img src={like} alt="" height="12px" width="14px" />
                    </div>
                </div>

                <img src={primg} alt="" />
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
                <center>

                <button className="shop-card">Add to Card</button>
                    <Link to="/" className="quick">Quick view</Link>
                </center>
            </div>

            <div className="product-card">
                <div className="card-top">
                    <div className="tags">30% OFF</div>
                    <div className="like">
                        <img src={like} alt="" height="12px" width="14px" />
                    </div>
                </div>

                <img src={primg} alt="" />
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
                <center>

                <button className="shop-card">Add to Card</button>
                    <Link to="/" className="quick">Quick view</Link>
                </center>
            </div>

            <div className="product-card">
                <div className="card-top">
                    <div className="tags">30% OFF</div>
                    <div className="like">
                        <img src={like} alt="" height="12px" width="14px" />
                    </div>
                </div>

                <img src={primg} alt="" />
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
                <center>

                <button className="shop-card">Add to Card</button>
                    <Link to="/" className="quick">Quick view</Link>
                </center>
            </div>

            <div className="product-card">
                <div className="card-top">
                    <div className="tags">30% OFF</div>
                    <div className="like">
                        <img src={like} alt="" height="12px" width="14px" />
                    </div>
                </div>

                <img src={primg} alt="" />
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
                <center>

                <button className="shop-card">Add to Card</button>
                    <Link to="/" className="quick">Quick view</Link>
                </center>
            </div>

            <div className="product-card">
                <div className="card-top">
                    <div className="tags">30% OFF</div>
                    <div className="like">
                        <img src={like} alt="" height="12px" width="14px" />
                    </div>
                </div>

                <img src={primg} alt="" />
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
                <center>

                <button className="shop-card">Add to Card</button>
                    <Link to="/" className="quick">Quick view</Link>
                </center>
            </div>
        </div>
    );
}

export default index;
