import React from "react";
import logo from "../../assets/images/logo3.png";
import "./Partners.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function idnex() {
    return (
        <div className="partners">
            <Swiper slidesPerView="5">
                <SwiperSlide>
                    <div className="partner-item">
                        <img src={logo} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="partner-item">
                        <img src={logo} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="partner-item">
                        <img src={logo} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="partner-item">
                        <img src={logo} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="partner-item">
                        <img src={logo} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="partner-item">
                        <img src={logo} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default idnex;
