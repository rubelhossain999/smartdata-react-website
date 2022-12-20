import React from 'react';

const Blog = () => {
    return (
        <section className="blog-grid pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
                        <div className="heading text-center mb-40">
                            <h2 className="heading__subtitle">Recent Articles</h2>
                            <h3 className="heading__title">Resource Library</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="post-item">
                            <div className="post__img">
                                <a href="blog-single-post.html">
                                    <img src="assets/images/blog/grid/1.jpg" alt="blog image" />
                                </a>
                            </div>
                            <div className="post__content">
                                <div className="post__meta d-flex flex-wrap">
                                    <div className="post__meta-cat">
                                        <a href="/">Consulting</a><a href="/">Sales</a>
                                    </div>
                                    <span className="post__meta-date">May 13, 2020</span>
                                </div>
                                <h4 className="post__title"><a href="/">Five Ways to Develop a World className Sales Operations
                                    Function</a>
                                </h4>
                                <p className="post__desc">Outsourcing IT infrastructure is a concept that has been around for a while.
                                    Characterized in terms of technicians and engineers, workstations and servers, the idea of outsourcing
                                    your basic IT needs...
                                </p>
                                <a href="blog-single-post.html" className="btn btn__secondary btn__link">
                                    <span>Read More</span>
                                    <i className="icon-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="post-item">
                            <div className="post__img">
                                <a href="blog-single-post.html">
                                    <img src="assets/images/blog/grid/2.jpg" alt="blog image" />
                                </a>
                            </div>
                            <div className="post__content">
                                <div className="post__meta d-flex flex-wrap">
                                    <div className="post__meta-cat">
                                        <a href="/">Tech</a><a href="/">Communications</a>
                                    </div>
                                    <span className="post__meta-date">April 17, 2020</span>
                                </div>
                                <h4 className="post__title"><a href="/">Succession Risks That Threaten Your Leadership Strategy</a>
                                </h4>
                                <p className="post__desc">Today’s organizations need a quality bench of leaders to drive business
                                    outcomes and satisfy employees, customers and investors who now demand more transparency and
                                    accountability...
                                </p>
                                <a href="blog-single-post.html" className="btn btn__secondary btn__link">
                                    <span>Read More</span>
                                    <i className="icon-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="post-item">
                            <div className="post__img">
                                <a href="blog-single-post.html">
                                    <img src="assets/images/blog/grid/3.jpg" alt="blog image" />
                                </a>
                            </div>
                            <div className="post__content">
                                <div className="post__meta d-flex flex-wrap">
                                    <div className="post__meta-cat">
                                        <a href="/">Digital Business</a><a href="/">Cloud</a>
                                    </div>
                                    <span className="post__meta-date">March 20, 2020</span>
                                </div>
                                <h4 className="post__title"><a href="/">What Do Employee Engagement Surveys Tell You About
                                    Employee?</a>
                                </h4>
                                <p className="post__desc">Outsourcing IT infrastructure is a concept that has been around for a while.
                                    Characterized in terms of technicians and engineers, workstations and servers, the idea of outsourcing
                                    your basic IT needs...
                                </p>
                                <a href="blog-single-post.html" className="btn btn__secondary btn__link">
                                    <span>Read More</span>
                                    <i className="icon-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;