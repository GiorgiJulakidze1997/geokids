import NavImg from "../navImg/NavImg";
import mapPhoto from "/assets/map.png";
import locationIcon from "/icons/location-icon.png";
import phoneIcon from "/icons/phone-icon.png";
import mailIcon from "/icons/mail-icon.png";

// #FF3800

const ContactPageComp = () => {
  const mapUrl =
    "https://www.google.com/maps/search/%E1%83%AD%E1%83%90%E1%83%95%E1%83%AD%E1%83%90%E1%83%95%E1%83%90%E1%83%AB%E1%83%98%E1%83%A1+49%E1%83%90/@41.711282,44.7425404,15.2z?entry=ttu";
  return (
    <>
      <section>
        <NavImg title="contact" />
      </section>
      <a href={mapUrl} target="_blank">
        <img src={mapPhoto} alt="map photo" className="mx-auto" />
      </a>
      <section className="px-5 max-w-[500px] mx-auto min-[600px]:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
        <div className="flex flex-col gap-10 mt-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-black font-semibold uppercase text-2xl">
              contact us
            </h2>
            <div className="flex items-center gap-10 mt-3">
              <img src={locationIcon} alt="" width={40} />
              <div>
                <p className="text-[#bdbdbd] text-lg">Our Location</p>
                <p className="text-lg">49a Ilia Chavchavadze Avenue, Tbilisi</p>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <img src={phoneIcon} alt="" width={40} />
              <div>
                <p className="text-[#bdbdbd] text-lg">Phone</p>
                <p className="text-lg">+995 568 864 004</p>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <img src={mailIcon} alt="" width={40} />
              <div>
                <p className="text-[#bdbdbd] text-lg">Mail</p>
                <p className="text-lg">basiashvilic@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-black font-semibold uppercase text-2xl">
              leave a comment
            </h2>
            <form action="">
              <div className="flex flex-col">
                <input
                  type="text"
                  className="w-full h-[51px] border-[1px] border-[#e1e1e1]"
                />
                <input
                  type="email"
                  className="w-full h-[51px] border-[1px] border-[#e1e1e1]"
                />
              </div>
              <textarea></textarea>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPageComp;
