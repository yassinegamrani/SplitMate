import { members } from "./membres.js";


let depenses = []
let depense = {
        id: Date.now(),
        groupeId: 1,
        titre: "Hôtel",
        montant: 1200,
        categorie: "Hébergement",
        date: "2026-10-02",
        payeurId: 1,
        parts: [
            { membreId: 1, montant: 300 },
            { membreId: 2, montant: 300 },
            { membreId: 3, montant: 300 },
            { membreId: 4, montant: 300 }
        ]
}
const titreDepense = document.querySelector('#titreDepense').value
const montantDepense = document.querySelector('#montantDepense').value
const dateDepense = document.querySelector('#dateDepense').value
const categorieDepense = document.querySelector('#categorieDepense').value
const payeurDepense = document.querySelector('#payeurDepense').value
const depenseDltBtn = document.querySelector('#depenseDltBtn')
const depenseEditBtn = document.querySelector('#depenseEditBtn')
const depenseAddBtn = document.querySelector('#depenseAddBtn') 


depenseAddBtn.addEventListener('click', ()=>{
    console.log('hi')
})

console.log(`hi it is ${titreDepense}`)

