
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
    return (
        <>
            <section className="banner-section style-one p_relative">
                <Swiper {...swiperOptions} className="banner-carousel">                    
                    <SwiperSlide className="slide-item p_relative">
                        <div className="image-layer p_absolute" style={{ backgroundImage: 'url(/assets/images/new_images/new-banner.png)' }}></div>
                        <div className="starshine">
                            <div className="shine shine-1"></div>
                            <div className="shine shine-2"></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                            <div className="content-inner">
                                <span>Change The World</span>
                                <h2>Build & Grow Your Business</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis ridiculus tellus.</p>
                                <Link href="/about-us" className="theme-btn-one">Discover More</Link>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="image-layer p_absolute" style={{ backgroundImage: 'url(/assets/images/new_images/new-banner.png)' }}></div>
                        <div className="starshine">
                            <div className="shine shine-1"></div>
                            <div className="shine shine-2"></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                            <div className="content-inner">
                                <span>Change The World</span>
                                <h2>Build & Grow Your Business</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis ridiculus tellus.</p>
                                <Link href="/about-us" className="theme-btn-one">Discover More</Link>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                            <span>‹</span>
                        </button>
                        <button type="button" className="owl-next h1n">
                            <span>›</span>
                        </button>
                    </div>
                </Swiper>

            </section>
        </>
    )
}
