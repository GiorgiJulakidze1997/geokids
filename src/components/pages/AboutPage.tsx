import logo from "/logo/main-logo.png";
import NavImg from "../navImg/NavImg";

export default function AboutPage() {
  return (
    <main className="pb-9">
      <section>
        <NavImg title="about" />
      </section>
      <section className="px-5 max-w-[500px] mx-auto min-[600px]:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
        <div className="flex flex-col lg:flex-row lg:items-center xl:gap-16">
          <img
            src={logo}
            alt=""
            className="min-[600px]:w-[460px] min-[600px]:h-[460px] min-[600px]:mx-auto xl:ml-[100px]"
          />
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold uppercase text-[#111111] md:text-4xl lg:text-5xl">
              story about us
            </h3>
            <p className="text-[#6b6b6b] mt-[20px] lg:text-lg">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
              pretium sollicitudin, nascetur auci elit consequat ipsutissem
              niuis sed odio sit amet nibh vulputate cursus a amet. Etiam
              rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida
              quam semper libero sit amet.
            </p>
            <h4 className="text-xl text-[#111111] font-semibold mt-2 lg:text-3xl lg:mt-5">
              Tsotne Basiashvili
            </h4>
            <p className="text-xs text-[#f15d44] lg:text-base font-bold">
              Namdvili Mamakaci
            </p>
          </div>
        </div>
        <div className="p-8 about-page-linear-gradient flex flex-col justify-center items-center text-center uppercase text-white mt-10 lg:flex-row lg:justify-between lg:px-32 lg:mt-20">
          <div>
            <h2 className="text-[72px]">98</h2>
            <p>programs</p>
          </div>
          <div>
            <h2 className="text-[72px]">14</h2>
            <p>locations</p>
          </div>
          <div>
            <h2 className="text-[72px]">50k+</h2>
            <p>members</p>
          </div>
          <div>
            <h2 className="text-[72px]">34</h2>
            <p>coaches</p>
          </div>
        </div>
      </section>
    </main>
  );
}
