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
          <h3>DESTAQUES DEL CURSO</h3>
        </div>
        <div className={style.titleDesktop}>
          <h2>LESSON PLAN</h2>
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
        </div>
        <div className={style.coursesDesktop}>
          <div className={style.courseInfoDesktop}>
            <div>
              <span>01</span>
            </div>
            <div className={style.contentDesktop}>
              <h3>PRESENTACIÓN</h3>
              <p>
                Mireia, nuestra campeona, te da la bienvenida al curso que te
                llevará a la cima de la natación. Conocerás su técnica, su
                entrenamiento y muchas cosas más de la mano de un equipo de
                profesionales de fama internacional.
              </p>
            </div>
          </div>
          <span className={style.lineDetails}></span>
          <div>
            <div>
              <span>02</span>
            </div>
            <div>
              <h3>NATACIÓN: ASPECTOS GENERALES</h3>
              <p>
                Mireia es una luchadora. Su afán de superación y su preparación
                tanto física como mental la han llevado a lo más alto en un
                deporte que para ella es un estilo de vida. Conoce de la mano de
                nuestra deportista de élite los beneficios de esta disciplina.
              </p>
            </div>
          </div>
          <span className={style.lineDetails}></span>
          <div>
            <div>
              <span>03</span>
            </div>
            <div>
              <h3>BASES BIOMECÁNICAS DE LA NATACIÓN</h3>
              <p>
                Mireia es una luchadora. Su afán de superación y su preparación
                tanto física como mental la han llevado a lo más alto en un
                deporte que para ella es un estilo de vida. Conoce de la mano de
                nuestra deportista de élite los beneficios de esta disciplina.
              </p>
            </div>
          </div>
          <span className={style.lineDetails}></span>
          <div>
            <div>
              <span>04</span>
            </div>
            <div>
              <h3>ESTILOS DE NATACIÓN</h3>
              <p>
                Una perfecta ejecución de estos estilos, unida al control y a la
                resistencia, te permitirá convertirte en un nadador
                interdisciplinar. Mireia y su equipo te enseñarán las claves y
                los secretos para dominarlos todos desde cero.
              </p>
            </div>
          </div>
          <span className={style.lineDetails}></span>
          <div>
            <div>
              <span>05</span>
            </div>
            <div>
              <h3>VIRAJES Y SALTOS</h3>
            </div>
          </div>
        </div>
        <div className={style.buttonSeePrograms}>
          <button className={lato.className}>VER PROGRAMA COMPLETO</button>
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
