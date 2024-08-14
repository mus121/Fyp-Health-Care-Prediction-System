import React from 'react'
import About1 from '../images/doctor.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'

const About = () => {
  return (
    <>
      {/* about section */}
      <section className="about_section layout_margin-top">
        <div className="container  ">
          <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
                <img src={About1} alt="" />
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
                  Dr. Ghulam Muhammad is a Senior Associate Professor and the Post Graduate Program Coordinator at the Department of Computer Science, Bahria University Karachi Campus. Specializing in Cloud Computing, Cloud Security, IoT, Mobile Communication, SDN, Machine Learning, and AI, Dr. Muhammad holds a PhD in Parallel Processing and Networking from the Beijing Institute of Technology, China, an M.E in Communication System & Networks, and a B.E in Computer Systems from Mehran University of Engineering & Technology, Jamshoro. Since joining Bahria University in 2015, he has taught courses such as Cloud Computing, IoT, Data Communication & Networks, and AI. With 21 research publications to his name, Dr. Muhammad is an HEC Approved Supervisor and holds a PEC Certificate (COMP/5444). He has guided over 12 Final Year Projects and previously served as Cluster Head. His notable publications include studies on language model accuracy, smart home technologies, and deep learning for breast cancer detection. Dr. Muhammad also conducts workshops on cloud computing, inspiring and mentoring students in research and innovation. His dedication to advancing technology and education makes him a valuable asset to Bahria University.
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
    </>
  )
}

export default About
