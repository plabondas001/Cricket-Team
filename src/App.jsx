import { Suspense, useState } from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import LoadData from "./Components/LoadData/LoadData";
import SelectedPlayer from "./Components/SelectedPlayer/SelectedPlayer";

// Fetch Data

const fetchData = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const promiseData = fetchData();
function App() {
  const [toggle, setToggle] = useState(true);
  const [balance, setBalance] = useState(600000000);

  const [select, setSelect] = useState([]);

  const removePlayer = (p) => {
    const filterPlayer = select.filter((play) => play.name !== p.name);
    setSelect(filterPlayer);
    setBalance(balance + p.price);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar balance={balance}></Navbar>

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
      <div className="mt-20 w-11/12 mx-auto flex items-center justify-between">
        <h1 className="font-bold flex text-2xl">{`${toggle === true ? "Available Players" : `Selected Players(${select.length}/6)`}`}</h1>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`border border-gray-300 rounded-l-md font-bold border-r-0 px-3 py-1 ${toggle === true ? "bg-[#E7FE29]" : ""} cursor-pointer`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`border border-gray-300 rounded-r-md border-l-0 px-3 py-1 cursor-pointer ${toggle === false ? "bg-[#E7FE29]" : ""}`}
          >
            Selected <span>{select.length}</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense>
          <LoadData
            setSelect={setSelect}
            select={select}
            balance={balance}
            setBalance={setBalance}
            promiseData={promiseData}
          ></LoadData>
        </Suspense>
      ) : (
        <SelectedPlayer
          removePlayer={removePlayer}
          select={select}
        ></SelectedPlayer>
      )}
    </div>
  );
}

export default App;
