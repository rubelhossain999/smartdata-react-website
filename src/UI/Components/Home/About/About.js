import React from 'react';

const About = () => {
    return (
        <div>
            <section className="about-layout4 pt-130 pb-0">
                <div className="container">
                    <div className="row heading">
                        <div className="col-12">
                            <div className="d-flex align-items-center mb-20">
                                <div className="divider divider-primary mr-30"></div>
                                <h2 className="heading__subtitle mb-0">Timely Service Delivery & Incident Resolutions!!</h2>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <h3 className="heading__title mb-40">Manages service delivery across various business like, HR, Legal and
                                other IT departments!!
                            </h3>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <p>SmartData has been helping organizations throughout the World to manage their IT with our unique approach
                                to technology management and consultancy solutions. Provide users with appropriate view and access
                                permissions to requests, problems, changes, contracts, assets, solutions, and reports with our experienced
                                professionals.</p>
                            <p>As one of the world's largest ITService Providers, our deep pool of certified engineers and IT staff are
                                ready to help you to keep your IT business safe & ensure high availability.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="about__img">
                                <img src="assets/images/about/2.jpg" alt="about" />
                            </div>
                            <div className="video__btn-wrapper">
                                <a className="video__btn video__btn-white popup-video" href="https://www.youtube.com/watch?v=nrJtHemSPW4">
                                    <div className="video__player">
                                        <i className="fa fa-play"></i>
                                    </div>
                                    <span className="video__btn-title">Watch Our Presentation!</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-between">
                            <ul className="list-items list-items-layout2 list-horizontal list-unstyled d-flex flex-wrap mt-40">
                                <li>Eliminate Repeat Entry</li>
                                <li>Simpliy Communication</li>
                                <li>Drive Business Process</li>
                                <li>Speed Up Transactions</li>
                                <li>Structure Data & Docs</li>
                                <li>Automate Workflows</li>
                            </ul>
                            <div className="clients">
                                <p className="text__link text-center mb-10">Trusted By The World's
                                    <a href="it-solutions.html" className="btn btn__link btn__primary btn__underlined">Best Organizations</a>
                                </p>
                                <div className="slick-carousel"
                                    data-slick='{"slidesToShow": 3, "arrows": false, "dots": false, "autoplay": true,"autoplaySpeed": 2000, "infinite": true, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 2}}, {"breakpoint": 767, "settings": {"slidesToShow": 2}}, {"breakpoint": 480, "settings": {"slidesToShow": 2}}]}'>
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
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;