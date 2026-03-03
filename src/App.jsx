import { Suspense } from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import LoadData from "./Components/LoadData/LoadData";

// Fetch Data

const fetchData = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const promiseData = fetchData();
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Heading */}
      <Header>
        <div className="flex flex-col justify-center items-center">
          <img
            className="bg-black w-70 h-50 p-2 rounded-md"
            src="/src/assets/banner-main.png"
            alt=""
          />
          <h1 className="mt-5">Assemble My Ultimate Dream 11 Cricket Team</h1>
          <p className="mt-5 font-semibold text-xl opacity-50">
            Beyond Boundaries Beyond Limits
          </p>
          <div className="border px-2 py-2 flex items-center mt-3 rounded-2xl border-[#bfd20e]">
            <button className="font-bold text-sm px-3 cursor-pointer py-2 rounded-md  bg-[#E7FE29]">
              Claim Free Credit
            </button>
          </div>
        </div>
      </Header>

      {/* LoadData */}

      <Suspense>
        <div className="w-11/12 mx-auto mt-20 flex items-center justify-between">
          <h1 className="font-bold flex text-2xl">Available Players</h1>
          <div>
            <button className="border rounded-l-xl border-r-0 px-3 py-1 bg-[#E7FE29] cursor-pointer">
              Available
            </button>
            <button className="border rounded-r-xl border-l-0 px-3 py-1 cursor-pointer">
              Selected <span>(0)</span>
            </button>
          </div>
        </div>
        <LoadData promiseData={promiseData}></LoadData>
      </Suspense>
    </div>
  );
}

export default App;
