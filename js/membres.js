let members = []

const membreName = document.querySelector("#membreName");
const membreUserName = document.querySelector("#membreUserName");
const selectGroup = document.querySelector("#selectGroup");
const submitMember = document.getElementById("submitMember");
const formMumbers = document.querySelector("#form-input-mumbers");
const cardMembre = document.querySelector('.card-membre')
const memberSupprim = document.querySelector("#memberSupprim")



cardMembre.innerHTML=''
submitMember.addEventListener("click", function (e) {
    e.preventDefault()
  if (
    membreName.value.trim() == "" ||
    membreUserName.value.trim() == "" ||
    selectGroup.value == ""
  ) {
    alert("Tu dois terminer la saisie de tes inputs.")
    return
  }
  creationMember()
  membreName.value=''
  membreUserName.value=''
  selectGroup.value=''

  console.log(members)
})
function creationMember(){
    let member = {
        id : Date.now(), 
        name  : membreName.value,
        user : membreUserName.value,
        groupe : selectGroup.value,
    }
    members.push(member)
    
    affichagecards(members)
    
    
    
}
function affichagecards(members){
  cardMembre.innerHTML = "" ;
  members.forEach(member => {
    
    cardMembre.innerHTML += `
        <div class="style-card" data-id="${member.id}">
            <div class="card-header">
            <div class="avatar"> VOTRE ID : ${member.id}</div>
          </div>
          <h3>NAME : ${member.name}</h3>
          <p class="email">USERNAME : ${member.user}</p>
          <div class="groups">
            <span><i class="fa-regular fa-user"></i></span>
          </div>
           <h3>GROUPE NAME : ${member.groupe}</h3>
           <div style="margin-left:90px">
              <button>Modifier</button>
              <button id="memberSupprim" onClick="supprimerMember(${member.id})">Supprimer</button>
           </div>
          </div>
        </div>`
        
  });
}


window.supprimerMember =  function(id){
  console.log(id)
  members = members.filter(member => member.id != id)
  affichagecards(members)
}


  



