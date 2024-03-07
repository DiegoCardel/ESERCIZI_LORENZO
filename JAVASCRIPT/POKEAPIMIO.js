async function main(){
let URL ="https://pokeapi.co/api/v2/pokemon/lugia"

// await fetch(URL)      //ESISTONO FUNZIONI SINCRONE IN CUI IL PROGRAMMA ASPETTA LA FINE DELLA FUNZIONE
                           // ESISTONO FUNZIONI ASINCRONE IN CUI IL PROGRAMMA PUò NON ASPETTARE LA FINE DELLA FUNZI
let response = await fetch(URL)
let body = await response.json()

console.log(body)}
main()