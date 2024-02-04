import React from "react";
import NavImg from "../navImg/NavImg";
import mapPhoto from "/assets/map.png";

const ContactPageComp = () => {
  const mapUrl =
    "https://www.google.com/maps/search/%E1%83%AD%E1%83%90%E1%83%95%E1%83%AD%E1%83%90%E1%83%95%E1%83%90%E1%83%AB%E1%83%98%E1%83%A1+49%E1%83%90/@41.711282,44.7425404,15.2z?entry=ttu";
  return (
    <>
      <section>
        <NavImg title="contact" />
      </section>
      <section className="px-5 max-w-[500px] mx-auto min-[600px]:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
        <a href={mapUrl} target="_blank">
          <img src={mapPhoto} alt="map photo" />
        </a>
      </section>
    </>
  );
};

export default ContactPageComp;
