"use strict";

/*
 * Klassen RegistreraGren
 * Tar emot två parametrar, namn och storlek
 */
function RegistreraGren(name, size) {
    var grenObject = {name: name, size: size};
    
    this.finnsRedan(grenObject);
}

RegistreraGren.prototype.finnsRedan = function(object) {
    
    var check = document.getElementById(object.name);
    
    if (check === null) {
        console.log("Grenen " + object.name + " finns inte. Skapar grenen."); // Om grenen inte finns så skapas grenen
        this.skapaGren(object);
    }
    else {
        console.log("Grenen " + object.name + " finns redan!"); // Grenen finns redan
    }
};

// Renderar grenen till documentet
RegistreraGren.prototype.skapaGren = function(grenen) {
    
    var grenar = document.getElementById("grenar");
    var li = document.createElement("li");
    var dt = document.createElement("dt");
    var dd = document.createElement("dd");
    var img = document.createElement("img");
    var img2 = document.createElement("img");
    var a = document.createElement("a");
    var a2 = document.createElement("a");
    
    li.id = grenen.name;
    dt.id = grenen.name + "P";
    dd.id = grenen.name + "Antal";
    dt.innerHTML = grenen.name;
    dd.innerHTML = "Antal deltagare: " + grenen.size;
    
    img.src = "pics/delete.png";
    img2.src = "pics/clock.png"; // använder om bilden (ska vara en redigera bild)
    a.setAttribute("href", "#");
    a2.setAttribute("href", "#");
    
    a.onclick = function() {
        grenar.removeChild(li);
    };
    
    a2.onclick = function() {
        // new RedigeraGren();
    };
    
    a.appendChild(img), a2.appendChild(img2);
    dt.appendChild(a), dt.appendChild(a2);
    li.appendChild(dt), li.appendChild(dd);
    grenar.appendChild(li);
};