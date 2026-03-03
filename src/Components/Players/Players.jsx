
const Players = ({player}) => {
    return (
        <div>
           <div className="border shadow-lg shadow-blue-200  transform transition duration-700  hover:scale-105 hover:z-10 hover:shadow-2xl mx-2 border-gray-300 p-3 rounded-xl">
             <img className="bg-blue-500 w-full h-90" src={player.image} alt=""/>
            <h1 className="font-bold pt-5 text-xl">Name: {player.name}</h1>
            <div className="flex items-center justify-between">
                <h1>{player.country}</h1>
                <button className="border border-gray-200 px-4 py-1 font-semibold rounded-lg bg-gray-200">{player.role}</button>
            </div>
            <div className="border-b border-gray-200 mt-3"></div>
                <h1 className="font-semibold mt-5">Rating: {player.rating}</h1>
                <h1 className="font-bold mt-3">Role: {player.battingStyle}</h1>
                <div className="flex items-center justify-between">
                    <h1 className="font-bold">Price: {player.price}</h1>
                    <button className="border border-gray-200 px-3 py-1 rounded-lg font-semibold cursor-pointer hover:bg-blue-600 hover:text-white duration-400">Choose Player</button>
                </div>
           </div>
        </div>
    );
};

export default Players;