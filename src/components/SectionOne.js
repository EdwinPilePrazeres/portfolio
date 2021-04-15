import React from "react";
import Logo1 from "./Images/1.jpg";
import Logo2 from "./Images/2.jpg";
import Logo3 from "./Images/3.jpg";
import Logo4 from "./Images/4.jpg";
import "./SectionOne.css";

const SectionOne = () => {
  let firstSession = document.querySelector(".first_session");
  window.addEventListener("scroll", () => {
    let value = 1 + window.scrollY / -600;
    firstSession.style.opacity = value;
  });

  return (
    <section className="section">
      <nav>
        <ul>
          <li>EPP</li>
        </ul>
        <ul>
          <li>About Me</li>
          <li>Porjects</li>
          <li>Download CV</li>
        </ul>
      </nav>

      <div className="first_session">
        <img src={Logo1} />
        <h2>Control your own level of <span>Inspiration</span></h2>
        {/* 
        Don't allow your emotions to overpower your intelligence */}
      </div>
      <div className="content">
        <h2>Second section</h2>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </section>
  );
};

export default SectionOne;
