let groupes = [];

import {
  grpName,
  grpDescription,
  grpDevise,
  grpDate,
  grpSubBtn,
  groupeSection,
} from "./ui.js";

const creategroupe = () => {
  if (
    grpName.value.trim() === "" ||
    grpDescription.value.trim() === "" ||
    grpDevise.value === "" ||
    grpDate.value === ""
  ) {
    alert("Veuiller remplir tous les champs");
    return;
  }
  let groupe = {
    name: grpName.value.trim(),
    description: grpDescription.value.trim(),
    devise: grpDevise.value,
    date: grpDate.value,
  };
  groupes.push(groupe);
  console.log(groupe);
  console.log(groupes);
  grpName.value = "";
  grpDescription.value = "";
  grpDevise.value = "";
  grpDate.value = "";
  groupeSection.innerHTML="";
  showgroupe();
};
grpSubBtn.addEventListener("click", creategroupe);
const showgroupe = () => {
  groupes.forEach((groupe) => {
    groupeSection.innerHTML += ` <article class="groupCard cardItem">
                    <div class="cardHead">
                        <i class="fa-solid fa-users-gear"></i>
                        <span inputmode="">status</span>
                    </div>
                    <div class="cardDescription">
                        <div class="cardDesContent">
                            <h2 id="groupeName">${groupe.name}</h2>
                            <p id="groupeDescription">${groupe.description}</p>
                        </div>
                        <div class="cardData">
                            <div class="cardData1">
                                <i class="fa-solid fa-coins"></i>
                                <p>Currency :<span id="groupeDevise"> ${groupe.devise}</span></p>
                            </div>
                            <div class="cardData2">
                                <i class="fa-solid fa-calendar-days"></i>
                                <p id="groupDate">Date of creation : ${groupe.date}</p>
                            </div>
                        </div>
                    </div>
                    <div class="cardBtns">
                        <button type="button" onclick="">Modifier le groupe</button>
                        <button type="button" onclick="">Supprimer le groupe</button>
                    </div>
                </article>`;
    groupeSection.classList.add('groupeSection')
  });
};
