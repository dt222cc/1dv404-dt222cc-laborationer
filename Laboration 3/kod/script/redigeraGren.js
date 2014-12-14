"use strict";
/*
 * Klassen RedigeraGren
 */
function RedigeraGren(oldName, oldSize, newName, newSize) {
    
    var grenar = document.getElementById("grenar");
    var dt = document.getElementById(oldName + "P");
    var dd = document.getElementById(oldName + "Antal");
    var li = document.getElementById(oldName);
    
    var img = document.createElement("img");
    var img2 = document.createElement("img");
    var a = document.createElement("a");
    var a2 = document.createElement("a");
    
    li.id = newName;
    dt.id = newName + "P";
    dd.id = newName + "Antal";
    dt.innerHTML = newName;
    dd.innerHTML = "Antal deltagare: " + newSize;
    
    img.src = "pics/delete.png";
    img2.src = "pics/clock.png";
    a.setAttribute("href", "#");
    a2.setAttribute("href", "#");
    
    a.onclick = function() {
        grenar.removeChild(li);
    };
    
    a2.onclick = function() {
        new RedigeraGren(); // Anropar klassen redigeraGren
    };
    
    a.appendChild(img), a2.appendChild(img2);
    dt.appendChild(a), dt.appendChild(a2);
}
