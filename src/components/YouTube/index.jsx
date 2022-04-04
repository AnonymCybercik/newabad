import React from "react";
import "./YouTube.scss";
import yt from "../../assets/images/yt.png";
import user from "../../assets/images/user.svg";
import useradd from "../../assets/images/userAdd.svg";
import { Link } from "react-router-dom";
import ytvid from "../../assets/images/yt-video.png";

function index() {
    return (
        <div className="YouTube-box">
            <div className="rec-box">
                <img src={yt} width="120" alt="" />

                <div className="users">
                    <img src={user} className="user-icon" alt="" />
                    <img src={user} className="user-icon" alt="" />
                    <img src={user} className="user-icon" alt="" />
                    <img src={user} className="user-icon" alt="" />
                    <img src={user} className="user-icon" alt="" />
                    <div className="user-text">250k+</div>
                </div>

                <button className="sub">
                    <img src={useradd} alt="" style={{ marginRight: "9px" }} />
                    Subscribe*
                </button>

                <div className="info-text">
                    *View latest gadgets reviews available for purchase in our
                    store.
                </div>
            </div>

            <div className="videos-box">
                <div className="top">
                    <div className="title">Latest videos from Abad channel</div>
                    <Link to="/" className="more">
                        More videos <i className="fa fa-angle-right"></i>
                    </Link>
                </div>
                <div className="videos">
                    <div className="main-box">
                        <img src={ytvid} alt="" />
                        <div className="yt-text">
                            5 New Cool Cameras You Must See on Abad - Cheap
                            Budget
                        </div>
                    </div>
                    <div className="main-box">
                        <img src={ytvid} alt="" />
                        <div className="yt-text">
                            5 New Cool Cameras You Must See on Abad - Cheap
                            Budget
                        </div>
                    </div>
                    <div className="main-box">
                        <img src={ytvid} alt="" />
                        <div className="yt-text">
                            5 New Cool Cameras You Must See on Abad - Cheap
                            Budget
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;
