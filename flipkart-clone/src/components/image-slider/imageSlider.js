import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function ImageSlider() {
  return (
    <div className="d-none d-md-flex" style={{ width: "97%", margin: "0 auto" }}>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/327e2f5c78d2380e.jpg?q=20"
            loading="lazy"
            alt="Image 1"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/c4a4c37d9fa12546.jpg?q=20"
            loading="eager"
            alt="Image 2"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/ca68a997de0af12f.jpg?q=20"
            loading="lazy"
            alt="Image 3"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/98400de00ddb16fd.jpg?q=20"
            loading="lazy"
            alt="Image 4"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/be168a4f35799055.jpg?q=20"
            loading="lazy"
            alt="Image 5"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
