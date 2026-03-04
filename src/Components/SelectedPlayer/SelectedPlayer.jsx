import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayer = ({ select, removePlayer }) => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="space-y-5">
        {select.map((player) => (
          <SelectedCard
            removePlayer={removePlayer}
            player={player}
          ></SelectedCard>
        ))}
      </div>
    </div>
  );
};

export default SelectedPlayer;
