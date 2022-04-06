import React from "react";
import "./categories.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Card from "./Card";

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
                <Swiper slidesPerView="8">
                    <SwiperSlide>
                        <Card></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card></Card>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default index;
