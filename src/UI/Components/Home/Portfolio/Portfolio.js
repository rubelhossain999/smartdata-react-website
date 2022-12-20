import React from 'react';

const Portfolio = () => {
    return (
        <section className="portfolio-grid portfolio-grid-carousel pb-40">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="heading mb-50">
                  <div className="d-flex align-items-center">
                    <div className="divider divider-primary mr-30"></div>
                    <h2 className="heading__subtitle mb-0">Success Stories</h2>
                  </div>
                  <h3 className="heading__title mb-0">Latest Case Studies</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="slick-carousel"
                  data-slick='{"slidesToShow": 3, "slidesToScroll": 2, "arrows": true, "dots": true, "autoplay": true,"autoplaySpeed": 3000, "infinite": true, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 2}}, {"breakpoint": 767, "settings": {"slidesToShow": 2}}, {"breakpoint": 480, "settings": {"slidesToShow": 1}}]}'>

                  <div className="portfolio-item">
                    <div className="portfolio__img">
                      <img src="assets/images/portfolio/grid/1.jpg" alt="portfolio img" />
                    </div>
                    <div className="portfolio__content">
                      <div className="portfolio__cat">
                        <a href="/">Building</a><a href="/">Interior</a>
                      </div>
                      <h4 className="portfolio__title"><a href="/">Financial’s Need For
                        Strategic Advisor</a></h4>
                      <p className="portfolio__desc">We delivered solutions at every step, and moved seamlessly into a more
                        proactive role as a strategic advisor, providing support and guidance across all IT topics.</p>
                      <a href="blog-single-post.html" className="btn btn__secondary btn__link">
                        <span>Read More</span>
                        <i className="icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio__img">
                      <img src="assets/images/portfolio/grid/2.jpg" alt="portfolio img" />
                    </div>
                    <div className="portfolio__content">
                      <div className="portfolio__cat">
                        <a href="/">Software</a><a href="/">Support</a>
                      </div>
                      <h4 className="portfolio__title"><a href="/">24x7 System Monitoring and
                        Alert Response</a></h4>
                      <p className="portfolio__desc">This single, unified platform integrates all operational phases of
                        selling and activation of their wireless services and devices, and serves as the backbone of the
                        operations.</p>
                      <a href="blog-single-post.html" className="btn btn__secondary btn__link">
                        <span>Read More</span>
                        <i className="icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio__img">
                      <img src="assets/images/portfolio/grid/3.jpg" alt="portfolio img" />
                    </div>
                    <div className="portfolio__content">
                      <div className="portfolio__cat">
                        <a href="/">Management</a><a href="/">Cloud</a>
                      </div>
                      <h4 className="portfolio__title"><a href="/">Nonprofit Organization
                        Utilized Security</a></h4>
                      <p className="portfolio__desc">Servers going down on a weekly basis had become the organization’s
                        “normal.” We came on board with the objective of stabilizing the environment, assisting </p>
                      <a href="blog-single-post.html" className="btn btn__secondary btn__link">
                        <span>Read More</span>
                        <i className="icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio__img">
                      <img src="assets/images/portfolio/grid/4.jpg" alt="portfolio img" />
                    </div>
                    <div className="portfolio__content">
                      <div className="portfolio__cat">
                        <a href="/">Digital</a><a href="/">HR</a>
                      </div>
                      <h4 className="portfolio__title"><a href="/">Powerful IT Upgrade Aligns
                        With Your Objectives</a></h4>
                      <p className="portfolio__desc">They needed a robust management solution to organize archive critical
                        documents for client cases, and wanted to determine solutions at every step, and moved </p>
                      <a href="blog-single-post.html" className="btn btn__secondary btn__link">
                        <span>Read More</span>
                        <i className="icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio__img">
                      <img src="assets/images/portfolio/grid/5.jpg" alt="portfolio img" />
                    </div>
                    <div className="portfolio__content">
                      <div className="portfolio__cat">
                        <a href="/">Consulting</a><a href="/">Management</a>
                      </div>
                      <h4 className="portfolio__title"><a href="/">The Best IT Practices in Cloud
                        and Security</a></h4>
                      <p className="portfolio__desc">This single, unified platform integrates all operational phases of
                        selling and activation of their wireless services and devices, and serves as the backbone of the
                        operations.</p>
                      <a href="blog-single-post.html" className="btn btn__secondary btn__link">
                        <span>Read More</span>
                        <i className="icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio__img">
                      <img src="assets/images/portfolio/grid/6.jpg" alt="portfolio img" />
                    </div>
                    <div className="portfolio__content">
                      <div className="portfolio__cat">
                        <a href="/">Software</a><a href="/">Security</a>
                      </div>
                      <h4 className="portfolio__title"><a href="/">Helping Companies With
                        Healthcare Inustry</a></h4>
                      <p className="portfolio__desc">Servers going down on a weekly basis had become the organization’s
                        “normal.” We came on board with the objective of stabilizing the environment, assisting </p>
                      <a href="blog-single-post.html" className="btn btn__secondary btn__link">
                        <span>Read More</span>
                        <i className="icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Portfolio;