document.querySelector("listPokemon")
document.querySelector("searchInput")
const button = document.getElementById("button-search")

button.addEventListener("click", async (e) =>{
    console.log("Funciona")
    await buscarPokemon()
})


let allPokemons = [];

async function buscarPokemon()  
    {
        try{
            const response  = await fetch(
        "https://pokeapi.co/api/v2/pokemon/ditto" 
        )

        const data = await response.json();

        console.log(data)


        }

        catch(error){
            console.log(error.message)
        }

    
   }


    