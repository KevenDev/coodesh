import style from "./Navbar.module.css";
import logoUnycos from "../../../../public/assets/logoUnycos.svg";
import person from "../../../../public/assets/person.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <Image src={logoUnycos} alt="logo" />
      </div>
      <div className={style.person}>
        <Image src={person} alt="person" />
      </div>
      <div className={style.list}>
        <ul>
          <li>
            <a href="#"> CURSOS </a>
          </li>
          <li>
            <a href="#"> REGISTER </a>
          </li>
          <li>
            <a href="#"> LOGIN </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
