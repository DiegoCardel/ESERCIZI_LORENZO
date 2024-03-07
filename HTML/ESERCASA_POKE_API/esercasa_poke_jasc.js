let bottone = document.getElementById("bottone")
let contenutobottone = ''
let contenutoh1 = document.getElementById("contenuto")
let contenutoImmagine = document.getElementById("immagine")
async function trovapoke() {
    let res = await fetch('https://pokeapi.co/api/v2/pokemon/rattata')
    let pokejson = await res.json()
    console.log(pokejson)
    contenutoh1.innerHTML = pokejson.abilities[0].ability.name
    JSON.stringify(pokejson.abilities[0].name)
    //Object.keys(pokejson)
}

