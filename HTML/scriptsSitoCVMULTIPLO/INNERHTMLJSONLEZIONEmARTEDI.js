let cv = {
    "Nome": "Diego",
    "Cognome": "Cardellini",
    "Indirizzo": "26, via Rustico, Polverigi, 60020, An , Italy",
    "Tel": "3345642151",
    "Mobile": "3345642151",
    "Email": "cardellinidiego@gmail.com",
    "Sesso": "M",
    "Ddn": "29/06/1996",
    "Cittadinanza": "Italiana"
}


let contenitoreCV = document.getElementById('cv')
let contenuto = ''
for (let e of Object.entries(cv)) {
    contenuto += '<div><b>' + e[0] + ':</b> <span>' + e[1] + '</span></div>'
}
contenitoreCV.innerHTML = contenuto