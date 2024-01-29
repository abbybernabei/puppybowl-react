const COHORT = "2309-FTB-MT-WEB-PT";
const BASE_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/players`);
    if (!response.ok) {
      throw new Error("Network response /GET players not ok");
    }
    const result = await response.json();
    return result.data.players;
  } catch (error) {
    console.error("There was an error /GET players", error);
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${playerId}`);
    if (!response.ok) {
      throw new Error("Network response /GET single player not ok");
    }
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.error("There was an error /GET single player", error);
  }
};

export const createNewPlayer = async (name, imageUrl, breed) => {
  try {
    const response = await fetch(`${BASE_URL}/players/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        imageUrl,
        breed,
      }),
    });
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.error("There was an error /POST create player", error);
  }
};

export const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error("Network /DELETE error");
    }
  } catch (error) {
    console.error("There was an error /DELETE remove player", error);
  }
};
