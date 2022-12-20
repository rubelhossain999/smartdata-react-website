import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header class="header header-transparent">
        <nav class="navbar navbar-expand-lg sticky-navbar">
          <div class="container">
  
            <Link class="navbar-brand" to="/">
              <img src="assets/images/logo/logo-light.png" class="logo-light" alt="logo" />
              <img src="assets/images/logo/logo-dark.png" class="logo-dark" alt="logo" />
            </Link>
            <button class="navbar-toggler" type="button">
              <span class="menu-lines"><span></span></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNavigation">
              <ul class="navbar-nav ml-auto">
                <li class="nav__item  has-dropdown">
                  <Link to="/" data-toggle="dropdown" class="dropdown-toggle nav__item-link active">Home</Link>
                  <ul class="dropdown-menu">
                    <li class="nav__item">
                      <a href="index-2.html" class="nav__item-link">Home Main</a>
                    </li>
                    <li class="nav__item">
                      <a href="home-modern.html" class="nav__item-link">Home Modern</a>
                    </li>
                    <li class="nav__item">
                      <a href="home-classic.html" class="nav__item-link">Home Classic</a>
                    </li>
                  </ul>
                </li>
                <li class="nav__item  has-dropdown">
                  <a href="/" data-toggle="dropdown" class="dropdown-toggle nav__item-link">Company</a>
                  <ul class="dropdown-menu">
                    <li class="nav__item">
                      <a href="about-us.html" class="nav__item-link">About Us</a>
                    </li>
                    <li class="nav__item">
                      <a href="why-us.html" class="nav__item-link">Why Choose Us</a>
                    </li>
                    <li class="nav__item">
                      <a href="leadership-team.html" class="nav__item-link">Leadership Team</a>
                    </li>
                    <li class="nav__item">
                      <a href="awards.html" class="nav__item-link">Award & Recognition</a>
                    </li>
                    <li class="nav__item">
                      <a href="pricing.html" class="nav__item-link">Pricing & Plans</a>
                    </li>
                    <li class="nav__item">
                      <a href="faqs.html" class="nav__item-link">Help & FAQs</a>
                    </li>
                    <li class="nav__item">
                      <a href="careers.html" class="nav__item-link">Careers</a>
                    </li>
                  </ul>
                </li>
                <li class="nav__item  has-dropdown">
                  <a href="/" data-toggle="dropdown" class="dropdown-toggle nav__item-link">IT Solutions</a>
                  <ul class="dropdown-menu wide-dropdown-menu">
                    <li class="nav__item">
                      <div class="row mx-0">
                        <div class="col-sm-6 dropdown-menu-col">
                          <a href="it-solutions.html" class="nav__item-link dropdown-menu-title">IT Solutions</a>
                          <ul class="nav flex-column">
                            <li class="nav__item"><a class="nav__item-link" href="it-solutions-single.html">IT
                                Management</a>
                            </li>
                            <li class="nav__item"><a class="nav__item-link" href="it-solutions-single.html">Cyber
                                Security</a>
                            </li>
                            <li class="nav__item"><a class="nav__item-link" href="it-solutions-single.html">Cloud
                                Computing</a>
                            </li>
                            <li class="nav__item"><a class="nav__item-link" href="it-solutions-single.html">IT
                                Consulting</a>
                            </li>
                            <li class="nav__item"><a class="nav__item-link" href="it-solutions-single.html">Software
                                Dev</a>
                            </li>
                            <li class="nav__item"><a class="nav__item-link" href="it-solutions-single.html">IT Support</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-sm-6 dropdown-menu-col">
                          <a href="industries.html" class="nav__item-link dropdown-menu-title">Industries</a>
                          <ul class="nav flex-column">
                            <li class="nav__item"><a class="nav__item-link"
                                href="industries-single-industry.html">Education,
                                Non-Profit</a></li>
                            <li class="nav__item"><a class="nav__item-link"
                                href="industries-single-industry.html">Accounting,
                                Finance</a></li>
                            <li class="nav__item"><a class="nav__item-link"
                                href="industries-single-industry.html">Government &
                                Public</a></li>
                            <li class="nav__item"><a class="nav__item-link" href="industries-single-industry.html">Energy
                                &
                                Utilities</a></li>
                            <li class="nav__item"><a class="nav__item-link" href="industries-single-industry.html">Legal,
                                Law
                                Firms</a></li>
                            <li class="nav__item"><a class="nav__item-link"
                                href="industries-single-industry.html">Manufacturing</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="nav__item  has-dropdown">
                  <a href="/" data-toggle="dropdown" class="dropdown-toggle nav__item-link">News&Media</a>
                  <ul class="dropdown-menu">
                    <li class="nav__item">
                      <a href="blog.html" class="nav__item-link">Our Blog</a>
                    </li>
                    <li class="nav__item">
                      <a href="blog-single-post.html" class="nav__item-link">Single Blog Post</a>
                    </li>
                    <li class="nav__item">
                      <a href="case-studies-grid.html" class="nav__item-link">Case Studies Grid</a>
                    </li>
                    <li class="nav__item">
                      <a href="case-studies-carousel.html" class="nav__item-link">Case Studies Carousel</a>
                    </li>
                    <li class="nav__item">
                      <a href="case-studies-classic.html" class="nav__item-link">Case Studies Classic</a>
                    </li>
                    <li class="nav__item">
                      <a href="case-studies-single.html" class="nav__item-link">Single Case Study</a>
                    </li>
                  </ul>
                </li>
                <li class="nav__item  has-dropdown">
                  <a href="#" data-toggle="dropdown" class="dropdown-toggle nav__item-link">Features</a>
                  <ul class="dropdown-menu">
                    <li class="nav__item">
                      <a href="coming-soon.html" class="nav__item-link">Coming Soon</a>
                    </li>
                    <li class="nav__item">
                      <a href="404.html" class="nav__item-link">404 Page</a>
                    </li>
                    <li class="nav__item">
                      <a href="#" class="nav__item-link  open-register-popup">Register</a>
                    </li>
                    <li class="nav__item">
                      <a href="#" class="nav__item-link  open-login-popup">Login</a>
                    </li>
                  </ul>
                </li>
                <li class="nav__item">
                  <a href="contact-us.html" class="nav__item-link">Contacts</a>
                </li>
              </ul>
            </div>
            <ul class="navbar-actions list-unstyled mb-0 d-flex align-items-center">
              <li class="d-none d-xl-block">
                <a href="request-quote.html" class="btn action__btn-contact">Request A Quote</a>
              </li>
              <li>
                <button class="action__btn action__btn-login open-login-popup">
                  <i class="icon-user"></i><span>Login</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
};

export default Header;