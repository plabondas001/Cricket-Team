import { use } from "react";
import Players from "../Players/Players";

const LoadData = ({promiseData}) => {
    const data = use(promiseData)
    
    
    
    return (
        <div className="w-11/12 mx-auto mt-20">
            {/* <h1 className="font-bold text-2xl">Available Players</h1> */}
            <div className="mb-5 gap-5 grid grid-cols-1 lg:grid-cols-3">
                {
                    data.map((player) => <Players player = {player}></Players>)
                }
            </div>
        </div>
    );
};

export default LoadData;