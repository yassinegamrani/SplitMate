import { members } from "./membres";


let depenses = []
let depense = {
    id : crypto.randomUUID(),
    titre : "" ,
    montant :0 ,
    categorie : "",
    date : "" ,
    payeur : "",
    membresConcernes : []
}
const titreDepense = document.querySelector('#titreDepense').value
const montantDepense = document.querySelector('#montantDepense').value
const dateDepense = document.querySelector('#dateDepense').value
const categorieDepense = document.querySelector('#categorieDepense').value
const payeurDepense = document.querySelector('#payeurDepense').value
const depenseDltBtn = document.querySelector('#depenseDltBtn')
const depenseEditBtn = document.querySelector('#depenseEditBtn')

console.log(`hi it is ${titreDepense}`)
// let createdepense = ()=>{
//     console.log(titreDepense.value)
//     depense.titre = titreDepense
//     depense.montant = montantDepense
//     depense.categorie = categorieDepense
//     depense.date = dateDepense
//     depense.payeur = payeurDepense
//     depense.membresConcernes = 
// }
