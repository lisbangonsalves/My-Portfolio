import React from 'react'
import './About.css';
import aboutimg from '../assets/aboutimg.png'

const About = () => {
  return (
    <div className='about'>
        <div className="aboutcontent">
          <div className="abouttext">
            <div className="aboutheading">
              <p>About me</p>
              <hr/>
            </div>
            <div className="aboutdescription">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, tenetur quasi! Aliquid, eligendi? Corporis aliquam quod quibusdam ex, aperiam exercitationem laborum doloremque dolorem cumque, tempore ipsa, qui autem fugiat! Cumque veniam mollitia voluptatum vero reprehenderit quis fuga, ipsam magni esse adipisci autem nulla eligendi quia non quae aut saepe est!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident ducimus, consectetur a aperiam magni, suscipit exercitationem natus reiciendis alias harum architecto ab velit consequatur eligendi deleniti asperiores qui sequi cumque nesciunt odio et doloribus? Cumque iure hic necessitatibus soluta excepturi dolores voluptatem. Ipsum, quam? Reiciendis deleniti quas corrupti sapiente assumenda?
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
