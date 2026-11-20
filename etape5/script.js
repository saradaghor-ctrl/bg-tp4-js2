"use strict";

const persons = [
    { nom: "nom1", prenom: "prenom1", points: 10 },
    { nom: "nom2", prenom: "prenom2", points: 15 },
    { nom: "nom3", prenom: "prenom3", points: 5  }
];
// tableau de personnes vu en slide 40

let lignes = 0;
let total_points = 0;

function doInsertRowTable(num, nom, prenom, points) {

    const table = document.querySelector("table");
    // retrouver un element html par selecteur css vu en slide 77

    const tr = document.createElement("tr");
    // créer une ligne de tableau vu en slide 104

    const tdNum = document.createElement("td");
    tdNum.setAttribute("class", "col_number");
    // ajouter une classe à une cellule de tableau vu en slide 107
    tdNum.innerText = num;
    // manupiler le texte d'une cellule de tableau vu en slide 91

    const tdNom = document.createElement("td");
    tdNom.setAttribute("class", "col_text");
    tdNom.innerText = nom;

    const tdPrenom = document.createElement("td");
    tdPrenom.setAttribute("class", "col_text");
    tdPrenom.innerText = prenom;

    const tdPoints = document.createElement("td");
    tdPoints.setAttribute("class", "col_text");
    tdPoints.innerText = points;

    const tdChk = document.createElement("td");
    tdChk.setAttribute("class", "col_chkbox");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    tdChk.appendChild(checkbox);

    tr.appendChild(tdNum);
    tr.appendChild(tdNom);
    tr.appendChild(tdPrenom);
    tr.appendChild(tdPoints);
    tr.appendChild(tdChk);

    table.appendChild(tr);
    // ajouter une ligne de tableau à une table de données vu en slide 104
}

function doInsert(nom, prenom, points) {
    lignes++;
    doInsertRowTable(lignes, nom, prenom, points);
    total_points += points;
    update_summary();
}

function update_summary() {
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");
    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Total point(s)= " + total_points;
}
// fonction de mise à jour de la somme des points vu en slide 45

function doNewData() {

    const elt_nom    = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    const nom    = elt_nom.value;
    const prenom = elt_prenom.value;
    const points = parseInt(elt_points.value);

    if (nom === "" || prenom === "" || Number.isNaN(points)) {
        alert("Formulaire incomplet !");
        return;
    }

    doInsert(nom, prenom, points);

    persons.push({ nom: nom, prenom: prenom, points: points });

    elt_nom.value    = "";
    elt_prenom.value = "";
    elt_points.value = "";
}

function init() {
    for (const personne of persons) {
        doInsert(personne.nom, personne.prenom, personne.points);
    }
}

function consoleTableau() {
    console.log(persons);
}

init();
