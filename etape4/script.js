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

    const tdNom = document.createElement("td");
    tdNom.setAttribute("class", "col_text");
    tdNom.innerText = nom;
    // manupiler le texte d'une cellule de tableau vu en slide 91

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
    // ajouter une cellule à une ligne de tableau vu en slide 104

    table.appendChild(tr);
}

function doInsert(nom, prenom, points) {
    lignes++;
    doInsertRowTable(lignes, nom, prenom, points);
    total_points += points;
    update_summary();
}
//fonction d'insertion d'une ligne de tableau vu en slide 45



function update_summary() {
    const element_lignes = document.getElementById("p1");
    // retrouver un element html par id vu en slide 78
    const element_points = document.getElementById("p3");

    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Total point(s)= " + total_points;
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
