"use strict";

function doInsertRowTable(num, nom, prenom, points) {

    const table = document.querySelector("table");
    // retrouver un element html par selecteur css vu en slide 77

    const tr = document.createElement("tr");
    // créer une ligne de tableau vu en slide 104
    const tdNum = document.createElement("td");
    // créer une cellule de tableau vu en slide 104
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
    // ajouter une cellule à une ligne de tableau vu en slide 104
    tr.appendChild(tdNom);
    tr.appendChild(tdPrenom);
    tr.appendChild(tdPoints);
    tr.appendChild(tdChk);

    table.appendChild(tr);
}
