import React from "react";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?doctors" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="https://source.unsplash.com/random/900×700/?medicines" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?injections" alt="Third slide" />
          </div>
        </div>
        <Link
          className="carousel-control-prev"
          to="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </Link>
        <Link
          className="carousel-control-next"
          to="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </Link>
      </div>
    </div>
  );
}
