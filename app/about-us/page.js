'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import TestimonialSlider0 from '@/components/slider/TestimonialSlider0'
import AwardSlider1 from '@/components/slider/AwardSlider1'
import Link from "next/link"
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="About Us">
                {/* about-section */}
                <section className="about-section p_relative">
                    <div className="auto-container">
                        <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_one">
                            <div className="image-box p_relative pr_50 mr_30">
                                <figure className="image image-1"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                                <figure className="image image-2"><img src="assets/images/resource/about-2.jpg" alt="" /></figure>
                                <div className="video-inner">
                                    <div className="video-btn">
                                        <VideoPopup />
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_one">
                            <div className="content-box p_relative ml_30">
                                <div className="sec-title mb_25">
                                <span className="sub-title">About BizTech</span>
                                <h2>Dedicated And <br/>Professional Consulting Services</h2>
                                </div>
                                <div className="text mb_35">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis amet odio est. Sit semper et velit fusce.</p>
                                </div>
                                <div className="inner-box mb_35">
                                <div className="single-item">
                                    <div className="icon-box"><i className="icon-11"></i></div>
                                    <h3>Solution Focused</h3>
                                    <p>Lorem ipsum dolor sit amet tempus consectetur adipiscing.</p>
                                </div>
                                <div className="single-item">
                                    <div className="icon-box"><i className="icon-11"></i></div>
                                    <h3>99.99% Success</h3>
                                    <p>Lorem ipsum dolor sit amet tempus consectetur adipiscing.</p>
                                </div>
                                </div>
                                <figure className="signature"><img src="assets/images/icons/signature-1.png" alt="" /></figure>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/* about-section end */}


                {/* service-style-two */}
                <section className="service-style-two p_relative bg-color-1">
                    <div className="auto-container">
                        <div className="sec-title centred mb_50">
                            <span className="sub-title">What We Do</span>
                            <h2>Provide the Best Consulting <br />in This Industry</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/service/service-1.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-7"></i></div>
                                                <h3><Link href="/strategy-planning">Strategy & Planning</Link></h3>
                                                <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                                <div className="btn-box">
                                                    <Link href="/strategy-planning" className="theme-btn-one">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/service/service-2.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-7"></i></div>
                                                <h3><Link href="/program-manager">Program Manager</Link></h3>
                                                <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                                <div className="btn-box">
                                                    <Link href="/program-manager" className="theme-btn-one">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/service/service-3.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-7"></i></div>
                                                <h3><Link href="/tax-management">Tax Management</Link></h3>
                                                <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                                <div className="btn-box">
                                                    <Link href="/tax-management" className="theme-btn-one">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/service/service-4.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-7"></i></div>
                                                <h3><Link href="/investment-policy">Investment Policy</Link></h3>
                                                <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                                <div className="btn-box">
                                                    <Link href="/investment-policy" className="theme-btn-one">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/service/service-5.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-7"></i></div>
                                                <h3><Link href="/financial-advices">Financial Advices</Link></h3>
                                                <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                                <div className="btn-box">
                                                    <Link href="/financial-advices" className="theme-btn-one">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/service/service-6.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-7"></i></div>
                                                <h3><Link href="/insurance-strategy">Insurance Strategy</Link></h3>
                                                <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                                <div className="btn-box">
                                                    <Link href="/insurance-strategy" className="theme-btn-one">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* service-style-two end */}


                {/* clients-section */}
                <section className="clients-section p_relative bg-color-2">
                    <div className="auto-container">
                        <div className="inner-box">
                            <figure className="clients-logo"><Link href="/about-us"><img src="assets/images/clients/clients-1.png" alt="" /></Link></figure>
                            <figure className="clients-logo"><Link href="/about-us"><img src="assets/images/clients/clients-2.png" alt="" /></Link></figure>
                            <figure className="clients-logo"><Link href="/about-us"><img src="assets/images/clients/clients-3.png" alt="" /></Link></figure>
                            <figure className="clients-logo"><Link href="/about-us"><img src="assets/images/clients/clients-4.png" alt="" /></Link></figure>
                            <figure className="clients-logo"><Link href="/about-us"><img src="assets/images/clients/clients-5.png" alt="" /></Link></figure>
                        </div>
                    </div>
                </section>
                {/* clients-section end */}


                {/* team-section */}
                <section className="team-section sec-pad">
                    <div className="auto-container">
                        <div className="sec-title mb_50 centred">
                            <span className="sub-title">Exclusive Team</span>
                            <h2>We Have A Professional Team <br />Member</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-1.jpg" alt="" /></figure>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/about-us"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/team-details">Wade Warren</Link></h3>
                                            <span className="designation">Founder</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-2.jpg" alt="" /></figure>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/about-us"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/team-details">Guy Hawkins</Link></h3>
                                            <span className="designation">Consultant</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-3.jpg" alt="" /></figure>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/about-us"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/team-details">Bessie Cooper</Link></h3>
                                            <span className="designation">Advisor</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-4.jpg" alt="" /></figure>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/about-us"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/about-us"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/team-details">Devon Lane</Link></h3>
                                            <span className="designation">Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* team-section end */}


                {/* chooseus-style-two */}
                <section className="chooseus-style-two sec-pad">
                    <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images/background/chooseus-bg-2.jpg)' }}></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-xl-6 col-lg-12 offset-xl-6 content-column">
                                <div className="content_block_six">
                                    <div className="content-box p_relative ml_30">
                                        <div className="sec-title mb_50">
                                            <span className="sub-title">Why Choose BizTech</span>
                                            <h2>Reason For Choosing Our Consultancy</h2>
                                        </div>
                                        <ul className="accordion-box">
                                            {/*Accordion Block*/}
                                            <li className="accordion block">
                                                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                    <div className="icon-box"></div>
                                                    <h3>Quick Response</h3>
                                                </div>
                                                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/*Accordion Block*/}
                                            <li className="accordion block">
                                                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-box"></div><h3>Experience Consultant</h3></div>
                                                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/*Accordion Block*/}
                                            <li className="accordion block">
                                                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-box"></div><h3>Flexible Payment</h3></div>
                                                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* chooseus-style-two end */}


                {/* testimonial-style-two */}
                <section className="testimonial-style-two p_relative">
                    <div className="auto-container">
                        <div className="sec-title mb_50 centred">
                            <span className="sub-title">Testimonials</span>
                            <h2>What They’re Say <br />About Us?</h2>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                {/*Theme Carousel*/}
                                <TestimonialSlider0 />                        
                            </div>
                        </div>
                    </div>
                </section>
                {/* testimonial-style-two end */}


                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
            </Layout>
        </>
    )
}


