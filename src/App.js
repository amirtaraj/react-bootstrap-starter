import React from 'react';
// import logo from './logo.svg';

import './App.css';

function App() {
  

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">Amirtaraj R</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">My Channel</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To My Page!</div>
        <div className="intro-heading text-uppercase">Nice To See You Again</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
      </div>
    </div>
  </header>

  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">My Channel</h2>
          <h3 className="section-subheading text-muted"><a class='btn btn-warning' href='https://www.youtube.com/user/amirtaraj?sub_confirmation=1'>SUBSCRIBE!</a> for more content like this.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
            <iframe id="iFrame1" title="iFrame1" width="336" height="189" src="https://www.youtube.com/embed/W0GtTNxcJ7o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h4 className="service-heading">RetroTech - iPhone 4S</h4>
          <p className="text-muted">Using iPhone 4S in 2020 on iOS6 vs iOS9, which one is usable? [in 8K ProRes].</p>
        </div>
        <div className="col-md-4">
            <iframe id="iFrame2" title="iFrame2" width="336" height="189" src="https://www.youtube.com/embed/xXcVtj8wG3A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h4 className="service-heading">Apple Watch - Series 4</h4>
          <p className="text-muted">Apple Watch Series 4 review in 2019 with WatchOS 6 compared to Series 5, is it worth it? and Series 3, is it better than it?</p>
        </div>
        <div className="col-md-4">
            <iframe id="iFrame3" title="iFrame3" width="336" height="189" src="https://www.youtube.com/embed/OE3ibgXKo4M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h4 className="service-heading">Lamborghini GIRO - 2018</h4>
          <p className="text-muted">From Bangalore - Lamborghini Showroom to Taj Hotel (Kempegowda International Airport) Lamborghini Bengaluru GIRO India June 2018</p>
        </div>
      </div>
    </div>
  </section>
  
  
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About Me</h2>
          <h3 className="section-subheading text-muted">My Journey.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2014-2019</h4>
                  <h4 className="subheading">Infosys</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Test Analyst</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>April 2019</h4>
                  <h4 className="subheading">ABB</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Sales Support Executive</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>November 2019</h4>
                  <h4 className="subheading">TekSystems</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Senior Software Engineer</p>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  </section>

  
 

  
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">On things to improve and Add upon.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Amirtaraj R 2020</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
