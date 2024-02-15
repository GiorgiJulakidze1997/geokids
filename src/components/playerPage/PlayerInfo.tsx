const PlayerInfo = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="min-h-[100vh] w-[80%] max-w-full bg-red-500 mx-auto">
        <div className="border-b flex">
          <div className="border-r w-fit px-10 py-3 border-green-400">
            <img
              className="w-40 h-40 object-cover max-w-full object-center rounded-full"
              src="https://gazettengr.com/wp-content/uploads/Ronaldo.png"
              alt="ronaldu"
            />
          </div>
          <div className="w-[90%]">
            <div className="flex items-center gap-3 font-bold text-4xl justify-center pb-2">
              <h1>ჯოტია</h1>
              <h1>ცაავა</h1>
            </div>
            <div className="flex flex-col pl-5 gap-4 font-semibold text-lg">
              <div className="flex items-center gap-3">
                <h1>დღე: 18</h1>
                <h1>თვე: ივნისი</h1>
                <h1>წელი: 2002</h1>
              </div>
              <div className="flex items-center gap-3">
                <h1>სიმაღლე: 1.76</h1>
                <h1>წონა: 74კგ</h1>
                <h1>ფეხი: 49სმ</h1>
              </div>
              <div className="flex items-center gap-3">
                <h1>პოზიცია: სკამი</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
