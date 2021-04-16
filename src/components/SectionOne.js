import React from "react";
import Logo1 from "./Images/1.jpg";
import Logo2 from "./Images/2.jpg";
import Logo3 from "./Images/3.jpg";
import Logo4 from "./Images/4.jpg";
import SVGwaveW from "./Images/wave_white.svg";
import SVGwaveB from "./Images/wave_black.svg";
import SVGwaveG from "./Images/wave_gray.svg";
import monitor from "./Images/monitor.png";
import Eren from "./Images/eren.png";
import "./SectionOne.css";
import "./SectionOneKeyFrames.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// var firstSession = document.querySelector("#bg_img");
// window.addEventListener("scroll", () => {

//   let value = 1 + window.scrollY / -600;
//   firstSession.style.opacity = value;
// });

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SectionOne = () => {
  return (
    <section className="section">
      <nav>
        <ul>
          <li>EPP</li>
        </ul>
        <ul>
          <li>About Me</li>
          <li>Projects</li>
          <li>Download CV</li>
        </ul>
      </nav>

      <div className="first_session">
        {/* <img src={Logo1} alt='' /> */}
        <div className="content">
          <div className="mini">
            <h2>
              Control your own level of <span></span>
            </h2>
          </div>
          <img src={Eren} alt="Diamond" />
        </div>
        <img src={SVGwaveW} alt="" className="wave" />
        {/* 
        Don't allow your emotions to overpower your intelligence */}
      </div>
      <div className="second_session">
        <h2 className="tracking-in-contract-bck-bottom">
          Enjoy some <br />
          <span>projects</span>
        </h2>
        <div className="cards_session">
          <div className="cards"></div>
          <div className="cards"></div>
          <div className="cards"></div>
        </div>
        <img src={SVGwaveG} alt="" className="wave" />
      </div>

      <div className="third_session">
        <h2>Some More Projects</h2>
        <Swiper
          className="container"
          spaceBetween={100}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true, show: false }}
          // scrollbar={{ draggable: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <img src={monitor} alt="" className="bg_img" />
          <SwiperSlide>
            <div className="testing">
                <img src='' alt='' />
                <div className='content'>
                  <p>Description</p>    
                  <button></button>
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <img src={SVGwaveB} alt='' className='wave'/>
      </div>

      <div className='fourth_session'>
        <h2>About Me</h2>
        <div className='content'>
          <img src={require('./Images/diamond.png').default} alt='' />
          <section>
            <p>I am Self Taught Software Engineer. Highly motivated seeking to launch a career building web applications and services. Familiar with development and deployment process for many web-based technologies.</p>

            <h3>Skills</h3>
            <ul>
              <li>HTML5/CSS3</li>
              <li>Javascript ES6</li>
              <li>React/React Hooks</li>
              <li>API Design Knowledge</li>
              <li>Git/ Version Control Systems</li>
            </ul>
          </section>
        </div>
        <img src={SVGwaveW} alt='' className='wave' />
      </div>

      <div className='fifth_session'>
        <h2>Leave a Comment here</h2>
        <img src={SVGwaveG} alt='' className='wave' />
      </div>

      <div className='sixth_session'>
        <h2>Contact me</h2>
        <img src={SVGwaveB} alt='' className='wave' />
      </div>
      
      <div className='footer'>
        <div className='container'>
          <div className='grid'>
            <h2>get in <span>touch</span></h2>
            <p>Legacy EPP Copyright</p>
          </div>
          <div className='grid'>
            <div className='info'>
              <p>micorreo@correo.com</p>
              <p>Click here to contact me</p>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Linkedin</li>
                <li>Gmail</li>
              </ul>
            </div>
            <div className='services'>
              <p>terms and services</p>
              <p>Privacy policy</p>
            </div>
          </div>
        </div>
        
      </div>


    </section>
  );
};

export default SectionOne;
