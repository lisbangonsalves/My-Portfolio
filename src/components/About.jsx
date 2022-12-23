import React from 'react'
import './About.css';
import aboutimg from '../assets/aboutimg.png'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="aboutcontent">
          <div className="abouttext">
            <div className="aboutheading">
              <p>About me</p>
              <hr/>
            </div>
            <div className="aboutdescription">
              <p>
              Hello! My name is <b>Lisban</b> and I enjoy creating things that live on the internet. I am an experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. 
              </p>
              <br />
              <p>
              Well-versed in technology and writing code to create systems that are reliable and user-friendly. Skilled leader who has the proven ability to motivate, educate and manage a team of professionals to build software programs and effectively track changes. Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company’s organizational needs, highlight its core competencies, and further its success.
              </p>
              <br />
              <p>
              Fast-forward to today, and I’ve had the privilege of working at a Ted talk organization and at Entrepreneur Cell. My main focus these days is building accessible, inclusive products and digital experiences for all
              </p>
            </div>
            <div className="aboutlist">
              <ul className='skill-list'>
                <li>JavaScript</li>
                <li>ReactJs</li>
                <li>NodeJs</li>
                <li>UI/UX Design</li>
                <li>Flutter</li>
                <li>Dart</li>
                <li>Graphic Designing</li>
                <li>Video Editing</li>
                <li>Java</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
          <div className="aboutimg">
            <img src={aboutimg} alt="" srcset="" />
          </div>
        </div>
    </div>
  )
}

export default About
