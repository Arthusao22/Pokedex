document.querySelectorById("listPokemon")
document.querySelectorById("")

let allPokemons = [];

async function loadPokemon() {
    const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/ditto"
    )}

    