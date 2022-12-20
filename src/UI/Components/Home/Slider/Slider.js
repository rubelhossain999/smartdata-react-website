import React from 'react';

const Slider = () => {
    return (
        <section className="slider">
            <div className="slick-carousel carousel-arrows-light carousel-dots-light m-slides-0"
                data-slick='{"slidesToShow": 1, "arrows": true, "dots": true, "speed": 700,"fade": true,"cssEase": "linear"}'>
                <div className="slide-item align-v-h bg-overlay bg-overlay-gradient">
                    <div className="bg-img"><img src="assets/images/sliders/1.jpg" alt="slide img" /></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                                <div className="slide__content">
                                    <h2 className="slide__title">We Run All Kinds Of IT Services That Vow Your Success</h2>
                                    <p className="slide__desc">We are experienced professionals who understand that It services is
                                        changing,
                                        and are true partners who care about your success. Our team provides a consultative approach on
                                        emerging technology.</p>
                                    <a href="/" className="btn btn__primary btn__icon mr-30">
                                        <span>More About Us</span>
                                        <i className="icon-arrow-right"></i>
                                    </a>
                                    <a href="projects-grid.html" className="btn btn__white">Our Services</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide-item align-v-h bg-overlay bg-overlay-gradient">
                    <div className="bg-img"><img src="assets/images/sliders/2.jpg" alt="slide img" /></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                                <div className="slide__content">
                                    <h2 className="slide__title">Keep Business Safe And Ensure High Availability.</h2>
                                    <p className="slide__desc">We are experienced professionals who understand that It services is
                                        changing,
                                        and are true partners who care about your success. Our team provides a consultative approach on
                                        emerging technology.</p>
                                    <a href="/" className="btn btn__primary btn__icon mr-30">
                                        <span>More About Us</span>
                                        <i className="icon-arrow-right"></i>
                                    </a>
                                    <a href="projects-grid.html" className="btn btn__white">Our Services</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;