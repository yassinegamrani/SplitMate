export let members = []

const membreName = document.querySelector("#membreName");
const membreUserName = document.querySelector("#membreUserName");
const selectGroup = document.querySelector("#selectGroup");
const submitMember = document.querySelector("#submitMember");
const formMumbers = document.querySelector("#form-input-mumbers");
const cardMembre = document.querySelector(".card-membre");
const memberSupprim = document.querySelector("#memberSupprim");
const modifyMember = document.querySelectorAll("modifyMember");
const modifierMember = document.getElementById('modifierMember')


submitMember.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    membreName.value.trim() == "" ||
    membreUserName.value.trim() == "" ||
    selectGroup.value == ""
  ) {
    alert("Tu dois terminer la saisie de tes inputs.");
    return;
  }
  creationMember();
  membreName.value = "";
  membreUserName.value = "";
  selectGroup.value = "";

  console.log(members);
});
function creationMember() {
  let member = {
    id: Date.now(),
    name: membreName.value,
    user: membreUserName.value,
    groupe: selectGroup.value,
  };
  members.push(member);

  affichagecards(members);
}
function affichagecards(members) {
  cardMembre.innerHTML = "";
  members.forEach((member) => {
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
              <button id="modifyMember" onClick="modifyMember(${member.id})">Modifier</button>
              <button id="memberSupprim" onClick="supprimerMember(${member.id})">Supprimer</button>
           </div>
          </div>
        </div>`;
  });
}

window.supprimerMember = function (id) {
  console.log(id);
  members = members.filter((member) => member.id != id);
  affichagecards(members);
};



window.modifyMember = function (id) {
  submitMember.classList.add('hidden')
  modifierMember.classList.remove('hidden')
  console.log(id);
  let modifMemb = members.find((member) => member.id == id);
  console.log(modifMemb);
  membreName.value = modifMemb.name;
  membreUserName.value = modifMemb.user;
  selectGroup.value = modifMemb.groupe;
  modifierMember.dataset.id = modifMemb.id
  
  
  //   let doneModify = members.filter((member)=> member.id)
  //   affichagecards(doneModify)
  // })

}; 
modifierMember.addEventListener('click',function(e){

    let modifMemb = members.find((member) => member.id == e.target.dataset.id);

        modifMemb.name = membreName.value
        modifMemb.user = membreUserName.value
        modifMemb.groupe = selectGroup.value
        
        affichagecards(members)
        membreName.value = ""
        membreUserName.value = ""
        selectGroup.value = ""
        submitMember.classList.remove('hidden')
        modifierMember.classList.add('hidden')

  })