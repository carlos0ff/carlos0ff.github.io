async function fetchPokemonData(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await response.json();

  console.log(data);

  return data;
}

