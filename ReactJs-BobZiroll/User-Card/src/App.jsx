import React from "react";
import Profile from "./assets/profile.jpg";
import "./App.css";

function App() {
  return (
    <article className="card">
      <div className="img-box">
        <img src={Profile} className="img" alt="User Profile" />
      </div>
      <div className="details">
        <h2 className="name">Rajeev Kumar</h2>
        <p className="job">Frontend Developer</p>
        <a className="website" href="https://iamrajeev.me/" target="_blank">
          iamrajeev.me
        </a>
        <div className="buttons">
          <a
            className="contact-links email"
            href="mailto:rajeevjewar2@gmail.com"
          >
            <i class="icon icon-email fa-solid fa-envelope"></i>
            <span>Email</span>
          </a>
          <a
            className="contact-links linkedin"
            href="https://www.linkedin.com/in/rajeevkumar504/"
            target="_blank"
          >
            <i class="icon icon-linkedin icon-email fa-brands fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="description">
          <div className="about">
            <h3 className="subheading">About</h3>
            <p className="text">
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
          <div className="interests">
            <h3 className="subheading">Interests</h3>
            <p className="text">
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </div>
      </div>
      <div className="links">
        <a href="https://twitter.com/RajeevKumar504" target="_blank">
          <i class="link-icons fa-brands fa-square-twitter"></i>
        </a>
        <a href="https://www.facebook.com/RajeevKumar504/" target="_blank">
          <i class="link-icons fa-brands fa-square-facebook"></i>
        </a>
        <a href="https://www.instagram.com/rajeevkumar0504/" target="_blank">
          <i class="link-icons fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://github.com/Rajeevjewar" target="_blank">
          <i class="link-icons fa-brands fa-square-github"></i>
        </a>
      </div>
    </article>
  );
}

export default App;
