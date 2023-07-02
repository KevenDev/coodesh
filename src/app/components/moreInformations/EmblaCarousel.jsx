"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import style from "./Carousel.module.css";

const arrayTestimonials = [
  {
    text: "Ha sido un curso muy gratificante,en el que he podido aprender muchas cosas gracias a los grandes ponentes que han colaborado y aportado sus conocimientos. Ahora toca ponerse manos a la obra y poner en practica todo lo aprendido. Estoy muy orgulloso.",
    author: "SAMUEL F.",
  },
  {
    text: "Seguir creciendo como profesional es necesario pero si lo haces junto a tus ídolos se convierte en un placer. Gracias por esta experiencia y espero poder comentarlo en persona con sus protagonistas muy pronto.",
    author: "MARTINS L.",
  },
  {
    text: "Ha sido un curso muy gratificante,en el que he podido aprender muchas cosas gracias a los grandes ponentes que han colaborado y aportado sus conocimientos. Ahora toca ponerse manos a la obra y poner en practica todo lo aprendido. Estoy muy orgulloso.",
    author: "SAMUEL F.",
  },
];

const testimonials = arrayTestimonials.map((testemonial) => testemonial.text);
const authors = arrayTestimonials.map((testemonial) => testemonial.author);

const testimonialsByIndex = (index) =>
  testimonials[index % testimonials.length];

const authorsByIndex = (index) => authors[index % testimonials.length];

const EmblaCarouselTexts = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className={style.carousel}>
      <div className={style.carouselViewport} ref={emblaRef}>
        <div className={style.carouselImgContainer}>
          {slides.map((index) => (
            <div className={style.carouselSlide} key={index}>
              <div className={style.carouselSlideText}>
                <p>{testimonialsByIndex(index)}</p>
                <div className={style.author}>
                  <strong>{authorsByIndex(index)}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarouselTexts;
