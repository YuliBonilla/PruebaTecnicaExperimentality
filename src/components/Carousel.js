import React from "react";
import ImgBanner from "../Images/banner-principal-desktop.png";
import LeftArrowWhite from "../Images/leftArrowWhite.svg";
import RigthArrowWhite from "../Images/rigthArrowWhite.svg";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Carousel(props) {
  return (
    <div className="carousel__container">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={2}
        visibleSlides={1}
        currentSlide={1}
      >
        <Slider>
          <Slide index={0}>
            <img
              src={ImgBanner}
              className="carousel__img"
              alt="ImgBanner"
            ></img>
          </Slide>
          <Slide index={1}>
            <img
              src={ImgBanner}
              className="carousel__img"
              alt="ImgBanner"
            ></img>
          </Slide>
        </Slider>
        <ButtonBack className="carousel__button carousel__button--left">
          <img
            src={LeftArrowWhite}
            className="carousel__img--button"
            alt="ImgBanner"
          ></img>
        </ButtonBack>
        <ButtonNext className="carousel__button carousel__button--rigth">
          <img
            src={RigthArrowWhite}
            className="carousel__img--button"
            alt="ImgBanner"
          ></img>
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
}

export default Carousel;
