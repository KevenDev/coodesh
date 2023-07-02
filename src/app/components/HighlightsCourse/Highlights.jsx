"use client";

import Image from "next/image";
import style from "./Highlights.module.css";
import iconArrow from "@/../public/assets/iconArrow.svg";
import iconStar from "@/../public/assets/iconStar.svg";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const Highlights = () => {
  return (
    <>
      <div className={style.containerHighlights}>
        <div className={style.title}>
          <p>DESTAQUES DEL CURSO</p>
        </div>
        <div className={style.courses}>
          <div className={style.courseInfo}>
            <span>03</span>
            <p>Bases biomecánicas de la natación</p>
            <Image src={iconArrow} alt="arrow" />
          </div>
          <span className={style.lineDetails}></span>
          <div className={style.courseInfo}>
            <span>06</span>
            <p>Preparación física</p>
            <Image src={iconArrow} alt="arrow" />
          </div>
          <span className={style.lineDetails}></span>
          <div className={style.courseInfo}>
            <span>08</span>
            <p>Nutrición y suplementos</p>
            <Image src={iconArrow} alt="arrow" />
          </div>
          <span className={style.lineDetails}></span>
          <div className={style.courseInfo}>
            <span>11</span>
            <p>Análisis de competición</p>
            <Image src={iconArrow} alt="arrow" />
          </div>
          <span className={style.lineDetails}></span>
          <div className={style.buttonSeePrograms}>
            <button className={lato.className}>VER PROGRAMA COMPLETO</button>
          </div>
        </div>
        <div className={style.containerStar}>
          <div className={style.classification}>
            <Image src={iconStar} alt="star" />
            <p>
              LOS ESTUDIANTES LE DAN A UNYCOS UNA CALIFICACIÓN PROMEDIO DE 4.7
              DE 5 ESTRELLAS.
            </p>
          </div>
          <div className={style.warranty}>
            <span>
              100% de garantía de satisfacción. 30 días de garantía de
              devolución de dinero.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlights;
