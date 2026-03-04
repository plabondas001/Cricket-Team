import { Trash } from "lucide-react";

const SelectedCard = ({player,removePlayer}) => {
  return (
    <div>
      <div className="border rounded-xl mt-5 flex items-center justify-between p-2 border-red-500">
        <div className="flex items-center gap-5">
          <img
            className="w-15"
            src={player.image}
            alt=""
          />
         <div>
             <h1 className="font-bold">{player.name}</h1>
          <h1>{player.role}</h1>
         </div>
        </div>
        <div onClick={() => removePlayer(player)}>
          <Trash className="cursor-pointer text-red-500" size={20} />
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
