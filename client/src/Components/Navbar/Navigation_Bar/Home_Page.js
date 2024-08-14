import React from 'react'
import './Home.css'
import hero from '../images/hero-bg.png'
import s1 from '../images/s1.png'
import s2 from '../images/s2.png'
import s3 from '../images/s3.png'
import s4 from '../images/s4.png'
import d1 from '../images/d1.jpg'
import d2 from '../images/d2.jpg'
import d3 from '../images/d3.jpg'
import About from '../images/about-img.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home_Page = () => {

  return (
    <>
      <div className="hero_area">
        <div className='hero_bg_box'>
          <img src={hero} alt="" />
        </div>
        {/* Department Section */}
        <section className='department_section layout_padding'>
          <div className="department_container">
            <div className="container ">
              <div className="heading_container heading_center">
                <h2>
                  Our Departments
                </h2>
                <p>
                  Asperiores sunt consectetur impedit nulla molestiae delectus repellat laborum dolores doloremque accusantium
                </p>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="box ">
                    <div className="img-box">
                      <img src={s1} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>
                        Cardiology
                      </h5>
                      <p>
                        fact that a reader will be distracted by the readable page when looking at its layout.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box ">
                    <div className="img-box">
                      <img src={s2} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>
                        Diagnosis
                      </h5>
                      <p>
                        fact that a reader will be distracted by the readable page when looking at its layout.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box ">
                    <div className="img-box">
                      <img src={s3} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>
                        Surgery
                      </h5>
                      <p>
                        fact that a reader will be distracted by the readable page when looking at its layout.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box ">
                    <div className="img-box">
                      <img src={s4} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>
                        First Aid
                      </h5>
                      <p>
                        fact that a reader will be distracted by the readable page when looking at its layout.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-box">
                <a href="">
                  View All
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Department Section End*/}

        {/* about section */}
        <section className="about_section layout_margin-bottom">
          <div className="container  ">
            <div className="row">
              <div className="col-md-6 ">
                <div className="img-box">
                  <img src={About} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>
                      About <span>Us</span>
                    </h2>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                    are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                    the middle of text. All
                  </p>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about section End*/}

        {/* doctor section */}
        <section className="doctor_section layout_padding">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Our Doctors
              </h2>
              <p className="col-md-10 mx-auto px-0">
                Incilint sapiente illo quo praesentium officiis laudantium nostrum, ad adipisci cupiditate sit, quisquam aliquid. Officiis laudantium fuga ad voluptas aspernatur error fugiat quos facilis saepe quas fugit, beatae id quisquam.
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img src={d1} alt="" />
                  </div>
                  <div className="detail-box">
                    <div className="social_box">
                      <a href="">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-youtube" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </div>
                    <h5>
                      Elina Josh
                    </h5>
                    <h6 className="">
                      Doctor
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img src={d2} alt="" />
                  </div>
                  <div className="detail-box">
                    <div className="social_box">
                      <a href="">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-youtube" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </div>
                    <h5>
                      Adam View
                    </h5>
                    <h6 className="">
                      Doctor
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img src={d3} alt="" />
                  </div>
                  <div className="detail-box">
                    <div className="social_box">
                      <a href="">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-youtube" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </div>
                    <h5>
                      Mia Mike
                    </h5>
                    <h6 className="">
                      Doctor
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a href="">
                View All
              </a>
            </div>
          </div>
        </section>

        {/* doctor section end */}

        {/* Contact section */}
        <section className="contact_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>
                Get In Touch
              </h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form_container contact-form">
                  <form action="">
                    <div className="form-row">
                      <div className="col-lg-6">
                        <div>
                          <input type="text" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div>
                          <input type="text" placeholder="Phone Number" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <input type="text" className="message-box" placeholder="Message" />
                    </div>
                    <div className="btn_box">
                      <button>
                        SEND
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="map_container">
                  <div className="map">
                    <div id="googleMap"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact section end */}

      </div>
    </>
  )
}

export default Home_Page
