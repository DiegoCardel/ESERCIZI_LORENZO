// trasformazione da Stringa a Json e viceversa
// PARS  ci permette di trasformare un testo in un oggetto
// STRINGIFY       viceversa
JSON
let myjson = {   
    "Nome" : "Diego",
        "Cognome" : "Cardellini",
            "eta" : 27,
                "hobby" : [
                    ["coding", "python", "htmls", "javascript", "json"],
                    "havefun",
                    "get_better",
                    10
                ]
}


let stringabyjson = JSON.stringify(myjson)
console.log(myjson)

let fromStrToJson = JSON.parse(stringabyjson)
console.log(fromStrToJson)