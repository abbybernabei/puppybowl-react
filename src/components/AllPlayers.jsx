import React, { useState } from "react";
import PlayerCardItem from "./PlayerCardItem";
import NewPlayerForm from "./NewPlayerForm";

const AllPlayers = ({ players, setPlayers }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //   if (!Array.isArray(players)) {
  //     console.error("Invalid 'players' prop:", players);
  //     return null;

  return (
    <div>
      <h1>All Players</h1>
      <input
        type="text"
        placeholder="Search Players..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <NewPlayerForm setPlayers={setPlayers} />
      {filteredPlayers.map((player) => (
        <PlayerCardItem
          key={player.id}
          player={player}
          setPlayers={setPlayers}
        />
      ))}
    </div>
  );
};
export default AllPlayers;
