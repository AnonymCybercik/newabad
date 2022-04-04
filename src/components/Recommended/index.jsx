import React from "react";
import "./Recomended.scss";
import Card from "./Card";
function index() {
    return (
        <div className="recomended">
            <div className="blocks">
                <span className="title">Category</span>
                <div className="pro-box">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
            <div className="blocks">
                <span className="title">New Arrivals</span>
                <div className="pro-box">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
            <div className="blocks">
                <span className="title">Top Rated</span>
                <div className="pro-box">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </div>
    );
}

export default index;
