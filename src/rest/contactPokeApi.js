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

  //console.log(types);

  return types;
};

export const getPokemonOfType = type => {
  console.log("Lets get em all");
};
