import React from "react";
import {Swiper , SwiperSlide} from "swiper/react";
import SwiperCore from "swiper";
import {Autoplay , Pagination , Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import myImage from "../Images/myImage3.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./landing.css";

function Landing(){
    SwiperCore.use([Autoplay]);
    return(
        <div id="Home" className="landing-main-container pt-5">
            <div className="landing-inner-container w-75 m-auto pt-5 row">
                <div className="col-md-6 col-12">
                    <div className="my-info d-flex flex-column align-items-end row">
                        <div className="my-info-header fs-3 m-1 p-2 fw-bold col-md-8 col-12">
                            Hi, I'm Emil Sadullazada.<br/>
                            A Creative Web Developer<br/>
                            Study in Baku
                        </div>
                        <div className="info-btns d-flex m-1 col-md-8 col-12">
                            <a target="blank" href="mailto:emil.sadullazade@gmail.com" className="p-1">Got A Project ?</a>
                            <a target="blank" href="tel:+994515630813" className="p-1">Lets Talk</a>
                        </div>
                    </div>
                </div>
                <div className="myImage-div col-md-4 col-8">
                    <img className="myImage w-100" alt="My Image shows here" src={myImage} />
                </div>
            </div>
            <div className="p-2 landing-navigation">
                <Swiper 
                autoplay={{delay:3000 , disableOnInteraction : false,}}
                modules={{Autoplay , Pagination , Navigation}}
                loop={true}
                slidesPerView={3}
                breakpoints={{
                    600: {
                        slidesPerView:3,
                    },
                    900: {
                        slidesPerView:4,
                    },
                    1000: {
                        slidesPerView:5,
                    }
                }}
                className="mySwiper"
                >
                    <SwiperSlide className="sw-sl swiper-slide-custom">
                        <a href="#Home">Home</a>
                    </SwiperSlide>
                    <SwiperSlide className="sw-sl swiper-slide-custom">
                        <a href="#About">About</a>                        
                    </SwiperSlide>
                    <SwiperSlide className="sw-sl swiper-slide-custom">
                        <a target="blank" href="tel:+994515630813">Contact</a>                        
                    </SwiperSlide>
                    <SwiperSlide className="sw-sl swiper-slide-custom">
                        <a href="#Services">Services</a>                        
                    </SwiperSlide>
                    <SwiperSlide className="sw-sl swiper-slide-custom">
                        <a target="blank" href="mailto:emil.sadullazade@gmail.com">Message</a>                        
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default Landing;