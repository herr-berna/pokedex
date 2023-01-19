const poke_container = document.querySelector('#poke-container')
const pokemon_count = 15

const colors = {}

async function fetchPokemons() {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

async function getPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    
    return data;
}

fetchPokemons()