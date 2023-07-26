import React, { useState } from "react";
import Logo from "../../../public/logo.png";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyled = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: !menuOpened && "-100%",
      };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src={Logo} alt="" width={100} />
          <div className="flexCenter h-menu" style={getMenuStyled(menuOpened)}>
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="button">Contact</button>
          </div>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={35} />
        </div>
      </div>
    </section>
  );
};

export default Header;
