import React, { useState } from "react";
import { createNewPlayer } from "../api";

const NewPlayerForm = ({ setPlayers }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [breed, setBreed] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !imageUrl || !breed) {
      alert("please fill out form");
    }
    const newPlayer = await createNewPlayer(name, imageUrl, breed);
    console.log("new player", newPlayer);
    setPlayers((prevPlayers) => [newPlayer, ...prevPlayers]);
    setName("");
    setImageUrl("");
    setBreed("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new player</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label htmlFor="imageUrl">Image URl:</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
        required
      />
      <label htmlFor="breed">Breed:</label>
      <input
        type="text"
        value={breed}
        onChange={(event) => setBreed(event.target.value)}
        required
      />
      <button type="submit">Add Player</button>
    </form>
  );
};

export default NewPlayerForm;
