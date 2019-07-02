import axios from "axios";

export const getTypes = async () => {
  console.log("Lets get types!");

  let types = [];

  await axios
    .get("https://pokeapi.co/api/v2/type/")
    .then(async response => {
      let results = await response.data["results"];

      results.forEach(async (item, index) => {
        const type = await item["name"];

        await types.push({ text: type, value: index + 1 });
      });
    })
    .catch(err => {
      console.log(err);
    });

  const completeTypes = await types;

  return completeTypes;
};

export const getPokemonOfType = async type => {
  console.log("Lets get em all of type " + type);

  let pokemonNames = [];
  let pokemonObjects = null;

  await axios
    .get("https://pokeapi.co/api/v2/type/" + type)
    .then(async response => {
      console.log(response);
      pokemonObjects = await response.data["pokemon"];
    });

  pokemonObjects.forEach(async pokemonObj => {
    const pokemonData = pokemonObj["pokemon"];
    const pokemonName = await pokemonData["name"];
    pokemonNames.push(pokemonName);
  });

  console.log(pokemonNames);

  return pokemonNames;
};
