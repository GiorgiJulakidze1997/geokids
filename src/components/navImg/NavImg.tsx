import React from "react";
import homeIcon from "/icons/home-icon.png";
import arrowIcon from "/icons/arrow.png";
import { Link } from "react-router-dom";

type Props = {
  title: string;
};

const NavImg = ({ title }: Props) => {
  return (
    <div className="max-w-[1920px] h-[400px] bg-[url(/assets/nav-img-bg.webp)] bg-no-repeat bg-cover bg-center flex items-center justify-center mx-auto">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-[60px] text-white font-semibold uppercase">
          {title}
        </h2>
        <p className="flex items-center text-white gap-1">
          <Link to={"/"} className="flex items-center gap-1">
            <img src={homeIcon} alt="home icon img" />
            Home
            <img
              src={arrowIcon}
              alt="arrow icon"
              width={10}
              className="mt-[2px]"
            />
          </Link>
          <span className="text-[#bdbdbd] capitalize">{title}</span>
        </p>
      </div>
    </div>
  );
};

export default NavImg;
