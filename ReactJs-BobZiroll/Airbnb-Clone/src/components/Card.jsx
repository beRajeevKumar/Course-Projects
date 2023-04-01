export default function Card() {
  return (
    <div className="card">
      <div className="card-img-box">
        <img
          src="./src/assets/card-1.jpg"
          className="card-img"
          alt="Girl is Standing Alone"
        />
      </div>
      <div className="card-stats">
        <img className="card-star" src="./src/assets/star.svg" />
        <span>5.0</span>
        <span className="grey-color">(6) • </span>
        <span className="grey-color">USA</span>
      </div>
      <p className="card-text">Life Lessons with Katie Zaferes</p>
      <p className="card-price">
        <strong>From $136</strong> / person
      </p>
    </div>
  );
}
