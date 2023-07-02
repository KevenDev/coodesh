import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import style from "./Carousel.module.css";
import { spotlights } from "@/app/mockDataImages";

export const images = spotlights.map((spotlight) => spotlight.image);
const imageByIndex = (index) => images[index % images.length];

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className={style.carousel}>
      <div className={style.carouselViewport} ref={emblaRef}>
        <div className={style.carouselImgContainer}>
          {slides.map((index) => (
            <div className={style.carouselSlide} key={index}>
              <div className={style.carouselSlideNumber}>
                <span>{index + 1}</span>
              </div>
              <img
                className={style.carouselSlideImage}
                src={imageByIndex(index)}
                alt="Imagens de destaque"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
