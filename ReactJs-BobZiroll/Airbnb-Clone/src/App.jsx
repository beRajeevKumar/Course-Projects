import airLogo from "./assets/airbnb-logo.svg";
import heroImages from "./assets/hero-img.jpg";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <a href="#">
          <img src={airLogo} alt="Airbnb Logo" />
        </a>
      </header>
      <main>
        <section className="section-hero">
          <div className="hero-imgs">
            <img
              src={heroImages}
              className="imgs"
              alt="Hero Images defines Airbnb"
            />
          </div>
          <h1 className="heading-primary">Online Experiences</h1>
          <p className="text">
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </section>
        <section className="section-text"></section>
      </main>
    </div>
  );
}
