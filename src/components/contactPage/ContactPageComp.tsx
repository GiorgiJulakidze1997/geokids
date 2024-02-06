import NavImg from "../navImg/NavImg";
import mapPhoto from "/assets/map.png";
import locationIcon from "/icons/location-icon.png";
import phoneIcon from "/icons/phone-icon.png";
import mailIcon from "/icons/mail-icon.png";
import { useForm } from "react-hook-form";

type DataType = {
  name: string;
  email: string;
  messageText: string;
};

const ContactPageComp = () => {
  const mapUrl =
    "https://www.google.com/maps/search/%E1%83%AD%E1%83%90%E1%83%95%E1%83%AD%E1%83%90%E1%83%95%E1%83%90%E1%83%AB%E1%83%98%E1%83%A1+49%E1%83%90/@41.711282,44.7425404,15.2z?entry=ttu";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataType>();

  const onSubmit = () => {};
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
            <div className="flex items-center gap-10 mt-5">
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-8 mt-10 relative">
                <input
                  type="text"
                  className="w-full pl-5 h-[51px] border-[1px] border-[#e1e1e1] outline-none"
                  placeholder="Your name"
                  {...register("name", {
                    required: { value: true, message: "Name cannot be empty" },
                  })}
                  style={
                    errors.name?.message ? { border: "2px solid #FF7979" } : {}
                  }
                />
                {errors.name?.message ? (
                  <p className="absolute top-[53px] left-5">
                    {errors.name?.message}
                  </p>
                ) : null}
                <input
                  type="email"
                  className="w-full pl-5 h-[51px] border-[1px] border-[#e1e1e1] outline-none"
                  placeholder="Your email"
                  {...register("email", {
                    required: { value: true, message: "Email cannot be empty" },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Looks like this is not an email",
                    },
                  })}
                  style={
                    errors.email?.message ? { border: "2px solid #FF7979" } : {}
                  }
                />
                {errors.email?.message ? (
                  <p className="absolute top-[136px] left-5">
                    {errors.email?.message}
                  </p>
                ) : null}
              </div>
              <textarea
                className="w-full h-[150px] pl-5 border-[1px] border-[#e1e1e1] outline-none mt-8 pt-3"
                placeholder="Your messages"
                {...register("messageText", {
                  required: { value: true, message: "Message cannot be empty" },
                })}
                style={
                  errors.messageText?.message
                    ? { border: "2px solid #FF7979" }
                    : {}
                }
              ></textarea>
              <button
                type="submit"
                className="text-sm text-white py-[10px] px-[33px] about-page-linear-gradient uppercase mt-10"
              >
                send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPageComp;
