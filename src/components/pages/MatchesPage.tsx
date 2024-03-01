import NavImg from "../navImg/NavImg";
import Arrow from "../../../public/logo/title-center-bg.png";
import ClubLogo from "../../../public/logo/dinamo-tbilisi-en_1.png"


export default function MatchesPage() {
  function YourComponent() {
    return (
      <main className="w-full">
        <section>
          <NavImg title="matches" />
        </section>
        <div className="m-12">
          <h1 className="text-xl w-4/5 m-auto  text-gray-700 font-bold">Results</h1>
          <hr className="bg-red-400 h-0.5 mt-2 m-auto w-4/5" />
          <div className="mt-12 w-4/5 flex flex-col justify-center m-auto">
            <div className="flex items-center justify-center bg-neutral-300 h-11 rounded border-b-2 border-red-500">
              <h3 className="text-red-700 text-lg -ml-8">Round 13</h3>
              <img className="bg-fixed -ml-8 absolute" src={Arrow} alt="arrow" />
            </div>
            <hr className="bg-slate-400 h-0.5 -mt-0.1" />
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="mt-0.5">
                <div className="bg-white rounded h-12 flex justify-between">
                  <div className="flex">
                      <img className="h-8 mt-3 ml-1" src={ClubLogo} alt="Club Logo"/> 
                      <h2 className="ml-3 mt-4">Dinamo FC</h2>
                  </div>
                     <div className="flex-col ">
                       <div className="bg-black rounded-lg h-7 flex flex-row justify-around mt-1">
                          <div className="text-white text-base ">3</div> 
                          <div className="text-white text-base ">:</div> 
                          <div className="text-white text-base ">4</div> 
                        </div>
                        <h4 className="text-gray-400 text-xs mt-0.5">2 Dec, 2023</h4>
                     </div>
                     <div className="flex">
                     <h2 className="mr-1.5 mt-4">Dinamo FC</h2>
                     <img className="h-8 mt-3 ml-1" src={ClubLogo} alt="Club Logo"/> 
                  </div>
                </div>
                <hr className="bg-slate-400 h-0.5 mt-2" />
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  return <YourComponent />;
}
