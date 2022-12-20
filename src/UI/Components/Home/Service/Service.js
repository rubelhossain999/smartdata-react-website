import React from 'react';

const Service = () => {
    return (
        <section className="services-layout2 services-carousel pt-130 bg-gray">
            <div className="container">
                <div className="row heading mb-40">
                    <div className="col-12">
                        <div className="d-flex align-items-center">
                            <div className="divider divider-primary mr-30"></div>
                            <h2 className="heading__subtitle mb-0">Nationwide Service, Local Expertise</h2>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <h3 className="heading__title">Offering the latest software and IT services to our customers!</h3>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-5">
                        <p className="heading__desc">Improve efficiency, leverage tech, and provide better customer experiences with the
                            modern technology services available allover the world. Our skilled personnel, utilising the latest
                            processing software, combined with decades of experience.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="slick-carousel"
                            data-slick='{"slidesToShow": 3, "slidesToScroll": 2, "arrows": true, "dots": true, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 2}}, {"breakpoint": 767, "settings": {"slidesToShow": 2}}, {"breakpoint": 480, "settings": {"slidesToShow": 1}}]}'>

                            <div className="service-item">
                                <div className="service__content">
                                    <div className="service__icon">
                                        <i className="icon-server"></i>
                                    </div>
                                    <h4 className="service__title">IT Management <br /> Services</h4>
                                    <p className="service__desc">IT management service that manages and oversees the IT infrastructure of
                                        any civil organization responsible for network and operations which includes data </p>
                                    <ul className="list-items list-unstyled mb-30">
                                        <li>Business IT alignment</li>
                                        <li> IT financial management</li>
                                        <li> IT service management</li>
                                    </ul>
                                    <a href="it-solutions-single.html" className="btn btn__secondary">
                                        <span>Read More</span>
                                        <i className="icon-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="service__content">
                                    <div className="service__icon">
                                        <i className="icon-cyberspace"></i>
                                    </div>
                                    <h4 className="service__title">Cyber Security<br /> Services</h4>
                                    <p className="service__desc">Drive your business and manage risk with a global industry leader in
                                        cybersecurity, cloud, and managed security services and extend your team with leading experts.</p>
                                    <ul className="list-items list-unstyled mb-30">
                                        <li>Internet security</li>
                                        <li>Automotive security</li>
                                        <li>Cyberwarfare</li>
                                    </ul>
                                    <a href="it-solutions-single.html" className="btn btn__secondary">
                                        <span>Read More</span>
                                        <i className="icon-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="service__content">
                                    <div className="service__icon">
                                        <i className="icon-cloud-computing"></i>
                                    </div>
                                    <h4 className="service__title">Cloud Computing<br /> Services</h4>
                                    <p className="service__desc">Cloud computing is on-demand availability of computer system resources,
                                        especially data storage computing power, without direct active management by the user.</p>
                                    <ul className="list-items list-unstyled mb-30">
                                        <li>Private cloud services</li>
                                        <li>Public cloud services</li>
                                        <li>Hybrid cloud services</li>
                                    </ul>
                                    <a href="it-solutions-single.html" className="btn btn__secondary">
                                        <span>Read More</span>
                                        <i className="icon-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="service__content">
                                    <div className="service__icon">
                                        <i className="icon-permission"></i>
                                    </div>
                                    <h4 className="service__title">IT Consulting <br /> Services</h4>
                                    <p className="service__desc">TTrying to solve all your IT challenges internally can become costly and
                                        a
                                        major distraction, Leveraging knowledgeable IT consulting firms like ushelps business. </p>
                                    <ul className="list-items list-unstyled mb-30">
                                        <li>Scoping & planning</li>
                                        <li>Process & system design</li>
                                        <li>Project management support</li>
                                    </ul>
                                    <a href="it-solutions-single.html" className="btn btn__secondary">
                                        <span>Read More</span>
                                        <i className="icon-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="service__content">
                                    <div className="service__icon">
                                        <i className="icon-code"></i>
                                    </div>
                                    <h4 className="service__title">Software Dev<br /> Services</h4>
                                    <p className="service__desc">With shorter product cycles, innovation, and mergers contributing to
                                        constant change, you are faced making business decisions every day to advance.</p>
                                    <ul className="list-items list-unstyled mb-30">
                                        <li>Implementation</li>
                                        <li>Testing & documenting</li>
                                        <li>Deployment & maintenance</li>
                                    </ul>
                                    <a href="it-solutions-single.html" className="btn btn__secondary">
                                        <span>Read More</span>
                                        <i className="icon-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="service__content">
                                    <div className="service__icon">
                                        <i className="icon-internet"></i>
                                    </div>
                                    <h4 className="service__title">Backup & Recovery<br /> Services</h4>
                                    <p className="service__desc">While you can’t predict unexpected events, we’ll ensure the right
                                        precautions are in place to minimize downtime and keep you moving in the right direction.</p>
                                    <ul className="list-items list-unstyled mb-30">
                                        <li>Compression & Deduplication</li>
                                        <li>Duplication & Encryption</li>
                                        <li>Multiplexing & Refactoring</li>
                                    </ul>
                                    <a href="it-solutions-single.html" className="btn btn__secondary">
                                        <span>Read More</span>
                                        <i className="icon-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 btn-wrapper">
                        <a href="/" className="btn btn__secondary btn__bordered btn__icon">
                            <span>Explore All Services</span>
                            <i className="icon-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;