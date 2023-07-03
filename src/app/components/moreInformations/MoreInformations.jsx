"use client";

import Image from "next/image";
import style from "./MoreInformation.module.css";
import arrowInput from "../../../../public/assets/arrowInput.svg";
import { Lato } from "next/font/google";
import CarouselTestimonials from "./CarouselInformations";
import marcusCooper from "../../../../public/assets/marcusCooper.svg";
import lewisAmarante from "../../../../public/assets/lewisAmarante.svg";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const MoreInformations = () => {
  return (
    <>
      <div className={style.containerInformation}>
        <div className={style.titleInformation}>
          <h3> OBTÉN MÁS INFORMACIÓN</h3>
        </div>
        <div className={style.form}>
          <form className={lato.className}>
            <input type="text" placeholder="NOMBRE COMPLETO" />
            <input type="text" placeholder="CORREO ELECTRÓNICO" />
            <div className={style.selectInput}>
              <input type="text" placeholder="PAÍS / CÓDIGO PAÍS" />
              <Image src={arrowInput} alt="seta" />
            </div>
            <input type="text" placeholder="TELÉFONO" />
            <div className={style.checkbox}>
              <input type="checkbox" />
              <p>
                Acepto las <span> condiciones de uso </span>
                <span> protección de datos.</span>
              </p>
            </div>
            <div className={style.checkbox}>
              <input type="checkbox" />
              <p>
                Me gustaría recibir información sobre nuevos cursos, ofertas y
                promociones
              </p>
            </div>
            <div className={style.buttonInformation}>
              <button type="submit" className={lato.className}>
                ENVIAR
              </button>
            </div>
          </form>
        </div>
        <div className={style.titleComments}>
          <h3>COMENTÁRIOS DE USUÁRIOS</h3>
        </div>
        <CarouselTestimonials />
        <div className={style.containerMoreCourses}>
          <div className={style.titleMoreCourses}>
            <h3> MÁS CURSOS</h3>
          </div>
          <div className={style.containerImages}>
            <div className={style.images1Adjusts}>
              <Image src={marcusCooper} alt="Marcus Cooper" />
              <div className={style.names}>
                <h3>MARCUS COOPER</h3>
                <h4>
                  ENSEÑA <span> PIRAGÜISMO </span>
                </h4>
              </div>
            </div>
            <div className={style.images2Adjusts}>
              <Image src={lewisAmarante} alt="Lewis Amarante" />
              <div className={style.names}>
                <h3>LEWIS AMARANTE</h3>
                <h4>
                  ENSEÑA <span> MAQUILLAJE </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreInformations;
