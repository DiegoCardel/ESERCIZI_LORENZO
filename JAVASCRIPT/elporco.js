//const nomecostante è una costante non modificabile ma solo leggibile
let persona_diego={
    "Nome": "Diego",
    "Cognome": "Cardellini",
    "eta": 27,
    "conto": 25000,
    "religione": "menopossibile",
    "hobby": [
        ["coding","python","htmls","javascript","json"],
        ["have_fun","go_training","read_english","MOCCOLARE_IL_DIO_CANE",],
        "get_better",
        10
    ],
    "nemici": [
        "i_dannati_fanesi",
        "gli_ascolani",
        "i_maledetti_scozzesi",
        "i_terroni_del_sotto_tronto",
        "il_dannato_alessano_ano_puzzoso",
        "i_maledetti_scozzesi_con_altri_dannati_scozzesi_che_hanno_rovinato_la_scozia"
    ],
    "amici": [
        "Alessio",
        "Jan",
        "Alessandro",
        "Damiano",
        "il_regno_di_ankara",
    ],
    "proprietà": {
        "cellulare": {
            "modello": "samsung s8",
            "numero_cellulare": 3485642151
        },
        "luogo_nascita": {
            "nazione": "Italia",
            "regione": "marche",
            "ospedale": "salesi",
            "anno di nascita": 1996,
            "celibe": true,
            "figli": null,
            "residenza":"Polverigi, Via Rustico 26",
            "codice_fiscale":"CRDDGI96H29A271E"
        },
        "caratteristiche_fisiche":[
            {"tipo":"pelle","colore":"white","tipologia":"ricci"},
            {"tipo":"capelli","colore":"nero"},
            {"tipo":"altezza","metri":1.70}
            ],
        "macchina": [{"marca" :"bmw","modello":"a1"},
            {"cilindrata": 2000,"alimentazione":"diesel","anno": 2010}]
        }
    }

console.log(persona_diego.Nome)
console.log(persona_diego.Cognome)
console.log(persona_diego.amici)
console.log(persona_diego.nemici)
console.log(persona_diego.religione)



console.log(persona_diego.proprietà.macchina[1].cilindrata)

//let_nomevariabile = è una variabile modificabile
//console.log(_nomevariabile_)  per stampare la variabile sul terminale

