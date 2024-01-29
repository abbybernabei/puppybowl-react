import React from "react";
import { useNavigate } from "react-router-dom";
import { removePlayer } from "../api";

const PlayerCardItem = ({ player, isSinglePlayer, setPlayers }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    await removePlayer(player.id);
    setPlayers((prevState) => {
      console.log("prevState", prevState);
      return prevState.filter((play) => play.id !== player.id);
    });
  };
  const handleSeeDetails = () => {
    if (!isSinglePlayer) {
      navigate(`/players/${player.id}`);
    } else {
      navigate("/players");
    }
  };
  return (
    <div className="card-container">
      <img src={player.imageUrl} alt={player.name} />
      <div className="card-content">
        <h3 className="card-title">{player.name}</h3>
        <p>{player.description}</p>
        <div className="card-buttons">
          {!isSinglePlayer && (
            <button onClick={handleDelete} className="delete-button">
              Delete
            </button>
          )}

          <button onClick={handleSeeDetails} className="details-button">
            {!isSinglePlayer ? "See Details" : "Go Back"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCardItem;
