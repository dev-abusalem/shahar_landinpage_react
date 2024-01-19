// eslint-disable-next-line no-unused-vars
import React from "react";
import Continer from "./Continer";
import logo from "../assets/images/logo.svg";
const Header = () => {
  return (
    <header className=" bg-primary">
      <Continer>
        <div>
          <div>
            <a href="/">
              <img src={logo} alt="logo" className="w-[130px] h-auto" />
            </a>
          </div>
        </div>
      </Continer>
    </header>
  );
};

export default Header;
