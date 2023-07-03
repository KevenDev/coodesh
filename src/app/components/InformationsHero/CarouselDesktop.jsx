"use client";
import style from "./CarouselDesktop.module.css";
import Image from "next/image";
import { spotlights } from "@/app/mockDataImages";
import { useEffect, useState } from "react";
export const imagesCarousel = spotlights.map((spotlight) => spotlight.image);

const CarouselDesktop = () => {
  const [images, setImages] = useState(imagesCarousel[0]);

  const handleClick = (e) => {
    setImages(e.target.src);
  };
  return (
    <>
      <div className={style.carouselDesktop}>
        <div className={style.carouselHeroImage}>
          <img src={images} alt="training images" />
        </div>
        <div className={style.carouselInformations}>
          <div className={style.wrapperCarousel}>
            <div className={style.titleCarousel}>
              <h2> ENTRENAR PARA EL ÉXITO</h2>
            </div>
            <div className={style.contentCarousel}>
              <p>
                Fusce sapien lectus, tincidunt scelerisque leo vitae, maximus
                venenatis felis. Suspendisse potenti. Aenean tincidunt mauris et
                euismod tincidunt. Aliquam erat volutpat. Cras eu feugiat diam.
                Suspendisse potenti. Nunc faucibus vulputate neque.
              </p>
            </div>
            <div className={style.carouselImages}>
              <div className={style.imageAdjusts}>
                <img onClick={handleClick} src={imagesCarousel[1]} alt="" />
                <span>ESTILOS DE NATACIÓN</span>
              </div>
              <div className={style.imageAdjusts}>
                <img onClick={handleClick} src={imagesCarousel[3]} alt="" />
                <span>PREPARACIÓN FÍSICA</span>
              </div>
              <div className={style.imageAdjusts}>
                <img onClick={handleClick} src={imagesCarousel[2]} alt="" />
                <span>ESTILOS DE NATACIÓN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselDesktop;
