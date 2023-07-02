import style from "./Hero.module.css";
import hero from "../../../../public/assets/hero.svg";
import heroDesktop from "../../../../public/assets/heroDesktop.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className={style.containerHero}>
        <Image className={style.heroMobile} alt="nadadora" src={hero} />
        <Image className={style.heroDesktop} alt="nadadora" src={heroDesktop} />

        <div className={style.textHero}>
          <h1>MIREIA BELMONTE</h1>
          <h3>
            <span>ENSENÃ</span>
            <span>NATACIÓN</span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Hero;
