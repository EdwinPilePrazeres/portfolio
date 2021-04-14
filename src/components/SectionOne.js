import React from "react";
// import { TweenMax, ScrollMagic, Animation } from "gsap";
import Img6 from "./Images/img/6.png";
import Img5 from "./Images/img/5.png";
import Img4 from "./Images/img/4.png";
import Img3 from "./Images/img/3.png";
import Img2 from "./Images/img/2.png";
import Img1 from "./Images/img/1.png";
import Logo1 from "./Images/1.jpg";
import Logo2 from "./Images/2.jpg";
import Logo3 from "./Images/3.jpg";
import Logo4 from "./Images/4.jpg";
import { TimelineMax } from "gsap/gsap-core";
import { Controller, Scene } from "react-scrollmagic";

const SectionOne = () => {
    document.addEventListener('DOMContentLoaded', () => {
        let controller = new ScrollMagic.Controller();
    
        let timeline = new TimelineMax();
        timeline
        .to('#sixth', 6, {
            y: -700
        })
        .to('#fifth', 6, {
            y: -500
        }, '-=6')
        .to('#forth', 6, {
            y: -400
        }, '-=6')
        .to('#third', 6, {
            y: -300
        }, '-=6')
        .to('#second', 6, {
            y: -200
        }, '-=6')
        .to('#first', 6, {
            y: -100
        }, '-=6')
        .to('.content, .blur', 6, {
            top: '0%'
        }, '-=6')
        .to('.title, nav, .footer-wrapper', 6, {
            y: -600,
        }, '-=6')
        .from('.one', 3, {
            top: '40px',
            autoAlpha: 0
        }, '-=4')
        .from('.two', 3, {
            top: '40px',
            autoAlpha: 0
        }, '-=3.5')
        .from('.three', 3, {
            top: '40px',
            autoAlpha: 0
        }, '-=3.5')
        .from('.four', 3, {
            top: '40px',
            autoAlpha: 0
        }, '-=3.5')
        .from('.text', 3, {
            y: 60,
            autoAlpha: 0
        }, '-=4')
    
        let scene = new ScrollMagic.Scene({
            triggerElement: 'section',
            duration: '200%',
            triggerHook: 0
        })
        .setTween(timeline)
        .setPin('section')
        .addTo(controller);
    })

  return (
        <section className="first-section">
          <nav>
            <div className="nav-wrapper">
              <h4>Ready co.</h4>
              <button className="button">Sign Up</button>
            </div>
          </nav>
          <div className="container">
            <div className="title">Nature</div>
            <div className="images">
              <div className="image-wrapper" id="first">
                <img src={Img6} alt="" />
              </div>
              <div className="image-wrapper" id="first">
                <img src={Img5} alt="" />
              </div>
              <div className="image-wrapper" id="first">
                <img src={Img4} alt="" />
              </div>
              <div className="image-wrapper" id="first">
                <img src={Img3} alt="" />
              </div>
              <div className="image-wrapper" id="first">
                <img src={Img2} alt="" />
              </div>
              <div className="image-wrapper" id="first">
                <img src={Img1} alt="" />
              </div>
              <div className="blur"></div>
            </div>
            <footer>
              <div className="footer-wrapper">
                <ul>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Dribble</li>
                  <li>Twitter</li>
                </ul>
              </div>
            </footer>
            <div className="content">
              <div className="content-wrapper">
                <div className="content-images">
                  <div className="content-image-wrapper one">
                    <img src={Logo1} alt="" />
                    <h4>W</h4>
                  </div>
                  <div className="content-image-wrapper two">
                    <img src={Logo2} alt="" />
                    <h4>W</h4>
                  </div>
                  <div className="content-image-wrapper three">
                    <img src={Logo3} alt="" />
                    <h4>W</h4>
                  </div>
                  <div className="content-image-wrapper four">
                    <img src={Logo4} alt="" />
                    <h4>W</h4>
                  </div>
                </div>
                <p className="text">YEEEEah</p>
              </div>
            </div>
          </div>
        </section>
  );
};

export default SectionOne;
