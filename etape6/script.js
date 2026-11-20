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
    // ajouter une cellule à une ligne de tableau vu en slide 104

    table.appendChild(tr);
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

function doNewData() {
    const elt_nom    = document.getElementById("form_nom");
    // retrouver un element html par id vu en slide 61
    const elt_prenom = document.getElementById("form_prenom");
    // retrouver un element html par id vu en slide 61
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

function deleteRow() {

    const table = document.querySelector("table");
    const toutesLesLignes = table.querySelectorAll("tr");

    if (toutesLesLignes.length <= 1) {
        alert("Le tableau est vide !");
        return;
    }

    const cochees = table.querySelectorAll("td.col_chkbox input[type='checkbox']:checked");

    if (cochees.length === 0) {
        alert("Sélectionnez au moins une ligne !");
        return;
    }

    if (!confirm("Voulez-vous vraiment supprimer " + cochees.length + " ligne(s) ?")) {
        return;
    }

    let nbSupprimees = 0;

    toutesLesLignes.forEach(function (row) {

        if (row.querySelector("th")) {
            return;
        }

        const cb = row.querySelector(".col_chkbox input[type='checkbox']");

        if (cb && cb.checked) {

            const points = parseInt(row.cells[3].innerText);
            total_points -= points;

            lignes--;

            const nom    = row.cells[1].innerText;
            const prenom = row.cells[2].innerText;
            const index  = persons.findIndex(function (p) {
                return p.nom === nom && p.prenom === prenom && p.points === points;
            });
            if (index !== -1) {
                persons.splice(index, 1);
            }

            row.parentNode.removeChild(row);

            nbSupprimees++;
        }
    });

    update_summary();
    alert(nbSupprimees + " ligne(s) supprimée(s).");
}

function filterRows() {
    const texte = document.getElementById("search").value.toLowerCase();
    const table = document.querySelector("table");

    table.querySelectorAll("tr").forEach(function (row) {
        if (row.querySelector("th")) {
            return;
        }
        const nom = row.cells[1].innerText.toLowerCase();
        row.style.display = (nom.indexOf(texte) !== -1) ? "" : "none";
    });
}

function toggleSelectAll(source) {
    const boites = document.querySelectorAll("td.col_chkbox input[type='checkbox']");
    // retrouver tous les éléments html de type checkbox dans les cellules de tableau vu en slide 76
    boites.forEach(function (cb) {
        cb.checked = source.checked;
    });
}

function sortByPoints() {
    persons.sort(function (a, b) {
        return b.points - a.points;
    });
    renderTable();
}

function renderTable() {
    const table = document.querySelector("table");

    table.querySelectorAll("tr").forEach(function (row) {
        if (!row.querySelector("th")) {
            row.parentNode.removeChild(row);
        }
    });

    lignes = 0;
    total_points = 0;

    for (const personne of persons) {
        doInsert(personne.nom, personne.prenom, personne.points);
    }
}

init();
