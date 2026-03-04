const Navbar = ({ balance }) => {
  return (
    <div className="w-11/12 mx-auto mt-5 flex items-center justify-between">
      <div>
        <img className="w-20 h-18" src="/src/assets/logo.png" alt="" />
      </div>
      <div>
        <ul className="flex items-center gap-15">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Fixture</a>
          </li>
          <li>
            <a href="#">Teams</a>
          </li>
          <li>
            <a href="#">Schedules</a>
          </li>
          <button className="font-bold border px-3 py-1 rounded-lg border-gray-200">
            {balance} Coin
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
