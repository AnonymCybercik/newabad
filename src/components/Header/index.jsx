import React from "react";
import logo from "../../assets/images/logo.png";
import drop from "../../assets/images/dropIcon.png";
import search from "../../assets/images/search.png";
import phone from "../../assets/images/phone.png";
import liked from "../../assets/images/liked.png";
import user from "../../assets/images/user.png";
import card from "../../assets/images/card.png";
import type from "../../assets/images/type.png";
import moln from "../../assets/images/moln.png";
import star from "../../assets/images/Star.png";
import location from "../../assets/images/location.png";

import { Link } from "react-router-dom";

import "./Header.scss";
function index() {
    return (
        <div>
            <div className="header">
                <ul>
                    <li className="logo">
                        <img src={logo} alt="" />
                    </li>
                    <li className="search-box">
                        <span className="allcategories">
                            <div>
                                All categories{" "}
                                <img
                                    src={drop}
                                    className="drop-icon"
                                    width="11px"
                                    alt=""
                                />
                            </div>
                        </span>
                        <span className="search-section">
                            <input
                                type="text"
                                name=""
                                placeholder="I’m searching for..."
                                className="search-inp"
                                id=""
                            />
                            <img
                                src={search}
                                width="16px"
                                height="16px"
                                className="searchIcon"
                                alt=""
                            />
                        </span>
                    </li>
                    <li>
                        <ul className="contacts">
                            <li>
                                <img
                                    src={phone}
                                    width="16px"
                                    height="16px"
                                    alt=""
                                />
                                <div>
                                    <div className="top">Support 24/7</div>
                                    <div className="bottom">
                                        +998 71 202 96 96
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img
                                    src={liked}
                                    width="22px"
                                    height="20px"
                                    alt=""
                                    style={{ margin: "0!important" }}
                                />
                            </li>
                            <li>
                                <img
                                    src={user}
                                    width="16px"
                                    height="16px"
                                    alt=""
                                />
                                <div>
                                    <div className="top">Hi, Sign in</div>
                                    <div className="bottom">Account</div>
                                </div>
                            </li>
                            <li>
                                <img
                                    src={card}
                                    width="16px"
                                    height="18px"
                                    alt=""
                                />
                                <div>
                                    <div className="top">My Cart</div>
                                    <div className="bottom">$575.00</div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <center>
                <div className="second-section">
                    <ul>
                        <li className="categories">
                            <img src={type} alt="" />
                            <span className="category-drop-text">
                                Categories
                            </span>
                            <img
                                src={drop}
                                className="drop-icon"
                                width=".6875rem"
                                height=".375rem"
                                alt=""
                            />
                        </li>
                        <li>
                            <img src={moln} alt="" />
                            <Link to="/" className="text-with-icon">
                                Today’s Deals
                            </Link>
                        </li>
                        <li>
                            <img src={star} alt="" />
                            <Link to="/" className="text-with-icon">
                                Best Sellers
                            </Link>
                        </li>
                        <li>
                            <Link to="/">Sales</Link>
                        </li>
                        <li>
                            <Link to="/">Customer Service</Link>
                        </li>
                    </ul>
                    <ul className="right-side">
                        <li style={{borderRight:"1px solid #E3E9EF", height: "1.75rem"}}>
                            <img src={location} alt="" />
                            <span className="text-with-icon">Tashkent</span>
                        </li>
                        <li>
                            <span className="text-with-icon">Eng / USD</span>
                            <img src={drop} alt="" />
                        </li>
                    </ul>
                </div>
            </center>
        </div>
    );
}

export default index;
