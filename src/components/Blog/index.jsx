import React from "react";
import { Link } from "react-router-dom";
import "./blog.scss";
import ytvid from "../../assets/images/yt-video.png";

function index() {
    return (
        <div className="blog">
            <div className="blog-box">
                <span className="title">Daily Blog</span>
                <Link to="/" className="link">
                    All Articles<i className="fa fa-angle-right"></i>
                </Link>

                <div className="blogs">
                    <div className="blog-item">
                        <img src={ytvid} width="378px" alt="" />
                        <div className="info">
                            <span className="author">by Jane Cooper</span>
                            <span className="date">March 13</span>
                            <div className="text">
                                We Launched Regular Drone Delivery in Tashkent.
                                Watch Demo Video
                            </div>
                        </div>
                    </div>
                    <div className="blog-item">
                        <img src={ytvid} width="378px" alt="" />
                        <div className="info">
                            <span className="author">by Jane Cooper</span>
                            <span className="date">March 13</span>
                            <div className="text">
                                We Launched Regular Drone Delivery in Tashkent.
                                Watch Demo Video
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ads">
                <div className="ads-title">Shop faster with Abad App</div>
                <div className="ads-text">Available on both IOS & Android </div>
                <div>
                    <span></span>
                    <span></span>
                </div>
                <div className="ads-images">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
}

export default index;
