
import React from 'react';

const FormBanner = () => {
    return (
        <section className="banner-layout2 pb-0 bg-overlay bg-overlay-primary">
            <div className="bg-img"><img src="assets/images/banners/8.jpg" alt="background" /></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-inner">
                        <div className="heading heading-light">
                            <h3 className="heading__title mb-30">Satisfied Users Over The Globe</h3>
                        </div>
                        <div className="testimonials testimonials-wrapper">
                            <div className="slider-with-navs">
                                <div className="testimonial-item">
                                    <p className="testimonial__desc color-white">If youre looking for a rewarding career and the
                                        chance to make an
                                        impact, youve come to the right place. We will transform your business through our techniques!
                                    </p>
                                    <div className="testimonial__meta">
                                        <h4 className="testimonial__meta-title">Ahmed Abdallah</h4>
                                        <p className="testimonial__meta-desc">Digital Media Manager</p>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <p className="testimonial__desc color-white">If youre looking for a rewarding career and the chance
                                        to
                                        make an impact, youve come to the right place. We will transform your business through our
                                        techniques! </p>
                                    <div className="testimonial__meta">
                                        <h4 className="testimonial__meta-title">John Peter</h4>
                                        <p className="testimonial__meta-desc">7oroof Inc</p>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <p className="testimonial__desc color-white">If you’re looking for a rewarding career and the
                                        chance to make an
                                        impact, you’ve come to the right place. We will transform your business through our techniques!
                                    </p>
                                    <div className="testimonial__meta">
                                        <h4 className="testimonial__meta-title">Ayman</h4>
                                        <p className="testimonial__meta-desc">7oroof Inc</p>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <p className="testimonial__desc color-white"> If you’re looking for a rewarding career and the chance to
                                        make an impact, you’ve come to the right place. We will transform your business through our
                                        techniques! </p>
                                    <div className="testimonial__meta">
                                        <h4 className="testimonial__meta-title">John Peter</h4>
                                        <p className="testimonial__meta-desc">7oroof Inc</p>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <p className="testimonial__desc color-white">My project was a simple & small task, but the
                                        persistence and
                                        determination turned it into an awesome and great project which make me happy .
                                    </p>
                                    <div className="testimonial__meta">
                                        <h4 className="testimonial__meta-title">John Peter</h4>
                                        <p className="testimonial__meta-desc">7oroof Inc</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-nav">
                                <div className="testimonial__thumb">
                                    <img src="assets/images/testimonials/thumbs/1.png" alt="author thumb" />
                                </div>
                                <div className="testimonial__thumb">
                                    <img src="assets/images/testimonials/thumbs/2.png" alt="author thumb" />
                                </div>
                                <div className="testimonial__thumb">
                                    <img src="assets/images/testimonials/thumbs/3.png" alt="author thumb" />
                                </div>
                                <div className="testimonial__thumb">
                                    <img src="assets/images/testimonials/thumbs/2.png" alt="author thumb" />
                                </div>
                                <div className="testimonial__thumb">
                                    <img src="assets/images/testimonials/thumbs/3.png" alt="author thumb" />
                                </div>
                            </div>
                        </div>
                        <div className="divider divider-light w-100 mt-60 mb-60"></div>
                        <div className="heading heading-light">
                            <h3 className="heading__title mb-30">Our Trusted Clients</h3>
                        </div>
                        <div className="clients">
                            <div className="slick-carousel"
                                data-slick='{"slidesToShow": 4, "arrows": false, "dots": false, "autoplay": true,"autoplaySpeed": 2000, "infinite": true, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 3}}, {"breakpoint": 767, "settings": {"slidesToShow": 3}}, {"breakpoint": 480, "settings": {"slidesToShow": 2}}]}'>
                                <div className="client">
                                    <img src="assets/images/clients/1.png" alt="client" />
                                    <img src="assets/images/clients/1.png" alt="client" />
                                </div>
                                <div className="client">
                                    <img src="assets/images/clients/2.png" alt="client" />
                                    <img src="assets/images/clients/2.png" alt="client" />
                                </div>
                                <div className="client">
                                    <img src="assets/images/clients/3.png" alt="client" />
                                    <img src="assets/images/clients/3.png" alt="client" />
                                </div>
                                <div className="client">
                                    <img src="assets/images/clients/4.png" alt="client" />
                                    <img src="assets/images/clients/4.png" alt="client" />
                                </div>
                                <div className="client">
                                    <img src="assets/images/clients/5.png" alt="client" />
                                    <img src="assets/images/clients/5.png" alt="client" />
                                </div>
                                <div className="client">
                                    <img src="assets/images/clients/6.png" alt="client" />
                                    <img src="assets/images/clients/6.png" alt="client" />
                                </div>
                                <div className="client">
                                    <img src="assets/images/clients/7.png" alt="client" />
                                    <img src="assets/images/clients/7.png" alt="client" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                        <div className="contact-panel">
                            <form className="contact-panel__form" method="post" action="http://bs.xobasoft.com/assets/php/contact.php" id="contactForm">
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="contact-panel__title mb-20">Request A Quote</h4>
                                        <p className="contact-panel__desc mb-30">Our deep pool of certified engineers and IT staff are ready
                                            to
                                            help you to keep your IT business safe & ensure high availability.</p>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name" id="contact-name" name="contact-name"
                                                required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email" id="contact-email"
                                                name="contact-email" required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option value="0">Inquiry</option>
                                                <option value="1">IT Management Services 2</option>
                                                <option value="2">IT Management Services 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Phone" id="contact-Phone"
                                                name="contact-phone" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Additional Details!" id="contact-message"
                                                name="contact-message"></textarea>
                                        </div>
                                        <div className="custom-control custom-checkbox d-flex align-items-center mb-20">
                                            <input type="checkbox" className="custom-control-input" id="acceptTerms" />
                                            <label className="custom-control-label" for="acceptTerms">I accept the privacy and terms.</label>
                                        </div>
                                        <button type="submit" className="btn btn__primary btn__xl btn__block">Submit Request </button>
                                        <div className="contact-result"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormBanner;