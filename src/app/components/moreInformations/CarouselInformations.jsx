"use client";
import EmblaCarouselTexts from "./EmblaCarousel";
import style from "./Carousel.module.css";

const CarouselTestimonials = () => {
  const OPTIONS = { slidesToScroll: "auto", containScroll: "trimSnaps" };
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <div className={style.sectionCarousel}>
        <div className={style.containerCarousel}>
          <EmblaCarouselTexts slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </>
  );
};

export default CarouselTestimonials;
