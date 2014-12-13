"use strict";

window.onload = function() {
    new Grenar();
};

function Grenar() {
    this.grenObject = {};
    this.init();
}

Grenar.prototype.init = function() {
    console.log("Initierar programmet");

    this.skapaGren();
};

Grenar.prototype.skapaGren = function() {
    var number = document.getElementById("number");
    var name = document.getElementById("name");
    var size = document.getElementById("size");
    var button = document.getElementById("register");

    var that = this;
    
    button.onclick = function() {
      that.addGren(number.value, name.value, size.value);
    };
};

Grenar.prototype.addGren = function(number, name, size) {
    var content = document.getElementById("grenID");
    var li = document.createElement("li");
    var dt = document.createElement("dt");
    var dd = document.createElement("dd");
    
    li.id = "gren" + number;
    dt.innerHTML = number + ". " + name;
    dd.innerHTML = "Antal deltagare: " + size;
    
    li.appendChild(dt);
    li.appendChild(dd);
    content.appendChild(li);
    
    alert("Grenen " + name + " är nu skapad.");
};

// funktionalitet som saknas:
//      1. verifiering av de värden som skickas:
//          istället för att ange nummer så görs det automatiskt genom att alla grenObjekt sparas i en array.
//          att namn är en sträng (och det första bokstaven är versal)
//          att antaldeltagare är en nummer
//      2. avregistrering av grenar (lik labb 2 labbymezzage från idv403 med en knapp)
//      3. tömma fälterna efter varje registrering
//      4. samla grenObjekter i en array, rendera alla objekt från array till dokumentet