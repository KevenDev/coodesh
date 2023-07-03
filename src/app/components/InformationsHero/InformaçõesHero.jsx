"use client";
import style from "./Informacoes.module.css";
import Image from "next/image";

import iconBook from "../../../../public/assets/iconBook.svg";
import iconFilm from "../../../../public/assets/iconFilm.svg";
import iconEbook from "../../../../public/assets/iconEbooks.svg";
import icon360 from "../../../../public/assets/icon360.svg";
import iconCheck from "../../../../public/assets/iconCheck.svg";
import iconPencil from "../../../../public/assets/iconPencil.svg";
import { Lato } from "next/font/google";
import Carousel from "./Carousel";
import CarouselDesktop from "./CarouselDesktop";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const InformationsHero = () => {
  return (
    <>
      <div className={style.containerInformation}>
        <div className={style.containerDesktop}>
          <div className={style.buttonInformation}>
            <button className={lato.className}>SOLICITAR INFORMACIÓN</button>
          </div>
          <div className={style.buttonInformationDesktop}>
            <button className={lato.className}>MAS INFORMACIÓN</button>
          </div>
          <div className={style.icons}>
            <div className={style.informationsIcon}>
              <Image alt="book" src={iconBook} />
              <span>12 MÓDULOS</span>
            </div>
            <div className={style.icon2}>
              <div className={style.informationsIcon}>
                <Image alt="video" src={iconFilm} />
                <span>+3,5 HORAS</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.textInformation}>
          <p>APRENDE NATACIÓN CON UNA CAMPEONA OLÍMPICA </p>
        </div>
        <div className={style.buttonQuestions}>
          <button className={lato.className}>PREGUNTAS FRECUENTES</button>
        </div>
        <div className={style.textAppeal}>
          <p>ENTRENAR PARA EL ÉXITO</p>
          <div>
            <span>
              Fusce sapien lectus, tincidunt scelerisque leo vitae, maximus
              venenatis felis. Suspendisse potenti. Aenean tincidunt mauris et
              euismod tincidunt. Aliquam erat volutpat. Cras eu feugiat diam.
              Suspendisse potenti. Nunc faucibus vulputate neque, sit amet
              pulvinar mi. Ut lacus neque, imperdiet vitae viverra id,
              vestibulum.
            </span>
          </div>
        </div>
        <CarouselDesktop />
        <Carousel />
        <div className={style.titleDesktop}>
          <h2>CONTENIDO EXCLUSIVO</h2>
        </div>
        <div className={style.iconsSucess}>
          <div className={style.iconSettings}>
            <Image alt="book" src={iconEbook} />
            <span>E-books</span>
          </div>
          <div className={style.iconSettings}>
            <Image alt="cam" src={icon360} />
            <span>360° Videos</span>
          </div>
          <div className={style.iconSettings}>
            <Image alt="checkbox" src={iconCheck} />
            <span>Tests</span>
          </div>
          <div className={style.iconSettings}>
            <Image alt="pencil" src={iconPencil} />
            <span>Tareas</span>
          </div>
        </div>
        <div className={style.buttonInformationDesktop2}>
          <button className={lato.className}>MAS INFORMACIÓN</button>
        </div>
      </div>
    </>
  );
};

export default InformationsHero;
