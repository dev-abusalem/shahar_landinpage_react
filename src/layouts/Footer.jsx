/* eslint-disable no-unused-vars */
import React from "react";
import Continer from "./Continer";
import { FiMapPin } from "react-icons/fi";
import map from "../assets/images/map.svg";
import map2 from "../assets/images/map2.svg";
import { FaWhatsapp } from "react-icons/fa";
import chat from "../assets/images/chat.svg";
import call from "../assets/images/call.svg";

const Footer = () => {
  return (
    <footer className="md:py-16 py-10">
      <Continer>
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div>
              <h1 className="font-bold text-3xl mb-4">פרטי התקשרות</h1>
              <div className="flex justify-start items-center gap-2 mb-2">
                <FiMapPin className="w-6 h-6" />
                <p>
                  כתובת: רחוב מצדה 7,מגדל ב.ס.ר. 4 (קומה 23),<br></br>בני-ברק
                </p>
              </div>
              <div className="flex justify-start items-center gap-2 mb-2">
                <FaWhatsapp className="w-6 h-6" />
                <p>123 456 789 86</p>
              </div>
              <div className="flex justify-start items-center gap-2 mb-2">
                <img src={chat} alt="chat" className="w-6 h-6" />
                <p>123 456 789 86</p>
              </div>
              <div className="flex justify-start items-center gap-2 mb-2">
                <img src={call} alt="chat" className="w-6 h-6" />
                <p>123 456 789 86</p>
              </div>
            </div>
            <div>
              <img src={map} alt="map" className="hidden md:block" />
              <img
                src={map2}
                alt="map2"
                className="block md:hidden w-full mx-auto mt-3"
              />
            </div>
          </div>
        </div>
      </Continer>
    </footer>
  );
};

export default Footer;
