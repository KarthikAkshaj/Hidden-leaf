import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "@/componets/footer/SocialIcons";
import { Icons } from '@/componets/footer/Menus';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white justify-center align-middle">
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons/>
      </div>
    </footer>
  );
};

export default Footer;
