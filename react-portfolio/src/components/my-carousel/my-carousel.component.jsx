import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './my-carousel.style.css'
import slide1 from '../../assets/img/carousal/slide1.webp'
import slide2 from '../../assets/img/carousal/slide2.webp'
import slide3 from '../../assets/img/carousal/slide3.webp'
import ScrollDown from "../scroll-down/scroll-down.component";

const MyCarousel = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pause={false}>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={slide1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={slide2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={slide3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
<ScrollDown/>
        </div>
    )
}

export default MyCarousel