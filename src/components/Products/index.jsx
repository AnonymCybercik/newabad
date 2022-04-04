import React from "react";
import "./products.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import Card from "../../components/Card"
function index({ title, linktitle }) {
    return (
        <div className="products">
            <div className="head-piece">
                <span className="title">{title}</span>
                <Link to="/">
                    All {linktitle}
                    <i className="fa fa-angle-right"></i>
                </Link>
            </div>
            <Swiper
                spaceBetween={16}
                slidesPerView={5}
                style={{padding: "25px 0"}}
            >
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
    );
}

export default index;
