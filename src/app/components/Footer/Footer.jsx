import style from "./Footer.module.css";
import { Lato } from "next/font/google";
import Image from "next/image";
import iconFacebook from "../../../../public/assets/iconFacebook.svg";
import iconInstagram from "../../../../public/assets/iconInstagram.svg";
import iconTwitter from "../../../../public/assets/iconTwitter.svg";
import iconYoutube from "../../../../public/assets/iconYoutube.svg";
import iconWhatsapp from "../../../../public/assets/iconWhatsapp.svg";
import logoUnycos from "../../../../public/assets/logoUnycos.svg";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const Footer = () => {
  return (
    <div className={style.containerFooter}>
      <div className={style.sectionCommunity}>
        <div className={style.titleFooter}>
          <h3>ÚNETE A LA COMUNIDAD</h3>
        </div>
        <div className={style.iconsFooter}>
          <Image src={iconFacebook} alt="icon facebook" />
          <Image src={iconInstagram} alt="icon instagram" />
          <Image src={iconTwitter} alt="icon twitter" />
          <Image src={iconYoutube} alt="icon youtube" />
        </div>
      </div>
      <div className={style.sectionQuestions}>
        <div className={style.questions}>
          <h4>¿DUDAS? CONTÁCTANOS POR WHATSAPP</h4>
        </div>
        <div className={style.contactWhatsapp}>
          <Image src={iconWhatsapp} alt="icon whatsapp" />
          <button className={lato.className}>+34 653 46 73 60</button>
        </div>
      </div>
      <div className={style.bodyFooter}>
        <div>
          <Image src={logoUnycos} alt="logo Unycos" />
        </div>
        <div className={style.typeMoney}>
          <p>USD ($)</p>
          <span>/</span>
          <span>EUR (€)</span>
        </div>
      </div>
      <div className={style.finishFooter}>
        <span>TERMINOS Y CONDICIONES</span>
        <span>POLÍTICA DE PRIVACIDAD</span>
        <span>AVISO LEGAL</span>
      </div>
    </div>
  );
};

export default Footer;
