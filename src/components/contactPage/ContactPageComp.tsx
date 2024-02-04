import React from "react";
import NavImg from "../navImg/NavImg";
import mapPhoto from "/assets/map.png";

const ContactPageComp = () => {
  const mapUrl =
    "https://www.google.com/maps/place/34+%E1%83%9A%E1%83%90%E1%83%98%E1%83%97%E1%83%A3%E1%83%A0%E1%83%98%E1%83%A1+%E1%83%A5%E1%83%A3%E1%83%A9%E1%83%90,+%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98/@41.7362332,44.8188738,19z/data=!4m6!3m5!1s0x404472ab965e3a3f:0x7349dc1a52718de5!8m2!3d41.7363258!4d44.8191572!16s%2Fg%2F11b6ylgpx5?entry=ttu";
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
      ;
    </>
  );
};

export default ContactPageComp;
