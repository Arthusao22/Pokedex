document.querySelector("#listPokemon");
const searchInput = document.getElementById("searchInput");
const button = document.getElementById("button-search");

button.addEventListener("click", async (e) => {
  let search = searchInput.value;
  await buscarPokemon(search);
  await buscarPokemonLista(50, 0);
});

let allPokemons = [];

async function buscarPokemon(nome) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

async function buscarPokemonLista (limit,offset) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}


