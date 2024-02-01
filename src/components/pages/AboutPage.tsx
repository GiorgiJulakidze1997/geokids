import logo from "/logo/main-logo.avif";

import NavImg from "../navImg/NavImg";

export default function AboutPage() {
  return (
    <main className="pb-9">
      <section>
        <NavImg title="about" />
      </section>
      <section className="flex flex-col px-5 gap-5 max-w-[500px] mx-auto">
        <img src={logo} alt="" />
        <div className="flex flex-col">
          <h3 className="text-3xl font-bold uppercase text-[#111111]">
            story about us
          </h3>
          <p className="text-[#6b6b6b] mt-[20px]">
            Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
            pretium sollicitudin, nascetur auci elit consequat ipsutissem niuis
            sed odio sit amet nibh vulputate cursus a amet. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, gravida quam
            semper libero sit amet.
          </p>
          <h4 className="text-xl text-[#111111] font-semibold mt-2">
            Tsotne Basiashvili
          </h4>
          <p className="text-xs text-[#f15d44]">Namdvili Mamakaci</p>
        </div>
        <div className="p-8 about-page-linear-gradient flex flex-col justify-center items-center text-center uppercase text-white">
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
