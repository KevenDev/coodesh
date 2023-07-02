"use client";
import EmblaCarousel from "./EmblaCarousel";
import style from "./Carousel.module.css";

const CarouselCards = () => {
  const OPTIONS = { slidesToScroll: "auto", containScroll: "trimSnaps" };
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <div className={style.sectionCarousel}>
        <div className={style.containerCarousel}>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </>
  );
};

export default CarouselCards;
