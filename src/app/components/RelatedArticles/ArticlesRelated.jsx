import style from "./ArticlesRelated.module.css";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const ArticlesRelated = () => {
  return (
    <div className={style.containerArticles}>
      <div className={style.titleArticle}>
        <h3>ARTÍCULOS RELACIONADOS</h3>
      </div>
      <div className={style.sectionArticles}>
        <div className={style.article}>
          <h3>CONSEJOS PARA NADADORES PRINCIPIANTES</h3>
          <p>22.06.2019</p>
          <span></span>
        </div>
        <div className={style.article}>
          <h3>
            RECOMENDACIONES PARA LOGRAR QUE UN NIÑO VENZA EL MIEDO AL AGUA
          </h3>
          <p>22.06.2019</p>
          <span></span>
        </div>
        <div className={style.article}>
          <h3>¿NADAR ES UN BUEN MÉTODO PARA ADELGAZAR?</h3>
          <p>22.06.2019</p>
          <span></span>
        </div>
        <div className={style.article}>
          <h3>CONSEJOS PARA MEJORAR LA TÉCNICA DEL ESTILO CROL</h3>
          <p>22.06.2019</p>
        </div>
        <div className={style.buttonReadMore}>
          <button className={lato.className}>LEER MÁS EN NUESTRO BLOG</button>
        </div>
      </div>
    </div>
  );
};

export default ArticlesRelated;
