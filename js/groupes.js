let groupes = [];
let editID = null;
let groupeId = 0;
import {
  grpName,
  grpDescription,
  grpDevise,
  grpDate,
  grpSubBtn,
  groupeSection,
  grpEditBtn,
  grpDltBtn,
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
    id: editID !== null ? editID : groupeId++,
    name: grpName.value.trim(),
    description: grpDescription.value.trim(),
    devise: grpDevise.value,
    date: grpDate.value,
    cloture: false,
  };
  if (editID !== null){
     groupes = groupes.map(g =>
            g.id === editID
                ? { ...g, ...groupe }
                : g
        );

        editID = null;

        grpSubBtn.textContent = "Ajouter le groupe";
  }
  else{
    groupes.push(groupe);
  console.log(groupe);
  console.log(groupes);

  
  }
  grpName.value = "";
  grpDescription.value = "";
  grpDevise.value = "";
  grpDate.value = "";
  groupeSection.innerHTML = "";
  showgroupe();
};

const showgroupe = () => {
  groupeSection.innerHTML = "";
  groupes.forEach((groupe) => {
    groupeSection.innerHTML += ` <article class="groupCard cardItem" data-id="${groupe.id}">
                    <div class="cardHead">
                        <i class="fa-solid fa-house"></i>
                        <span inputmode="">${groupe.cloture}</span>
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
                            <div class="cardData3">
                                <i class="fa-solid fa-calendar-days"></i>
                                <p id="groupDate">Total : ${groupe.date}</p>
                            </div>
                        </div>
                    </div>
                    <div class="cardBtns">
                        <button type="button" class="grpEditBtn">Modifier le groupe</button>
                        <button type="button" class="grpDltBtn">Supprimer le groupe</button>
                    </div>
                </article>`;
    groupeSection.classList.add("groupeSection");
  });
};
const editgroupe = (groupe) => {
  editID = groupe.id;
  grpName.value = groupe.name;
  grpDescription.value = groupe.description;
  grpDevise.value = groupe.devise;
  grpDate.value = groupe.date;
  grpSubBtn.textContent = "Modifier le groupe";

  // console.log(groupe);
};

const actionBtn = (e) => {
  const card = e.target.closest(".groupCard");

  if (!card) return;

  const id = Number(card.dataset.id);

  // Edit
  if (e.target.closest(".grpEditBtn")) {
    const groupe = groupes.find((groupe) => groupe.id === id);

    if (groupe) {
      editgroupe(groupe);
    }
  }
  // Delete
  if (e.target.closest(".grpDltBtn")) {
    const confirmation = confirm("Voulez-vous supprimer ce groupe ?");

    if (confirmation) {
      groupes = groupes.filter((groupe) => groupe.id !== id);
      console.log(groupes);
      showgroupe();
    }
  }
};

//------ EVent listenners ------//

grpSubBtn.addEventListener("click", creategroupe);
groupeSection.addEventListener("click", actionBtn);
