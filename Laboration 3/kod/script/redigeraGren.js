"use strict";

// Klassen RedigeraGren
function RedigeraGren(array, name, newName, newSize) {
    
    for (var i in array) {
        if (array[i].name == name) {
            array[i].name = newName;
            array[i].size = newSize;
            break;
        }
    }
    uppdateraGrenar(name, newName, newSize);
    return array;
}

// RedigeraGren.prototype.uppdateraGrenar = function(id, name, size) { // Utan QUnit
function uppdateraGrenar(id, name, size) { // För QUnit

    var grenar = document.getElementById("grenar"), li = document.getElementById(id),
    dt = document.getElementById(id + "P"), dd = document.getElementById(id + "Antal"),
    img = document.createElement("img"), img2 = document.createElement("img"),
    a = document.createElement("a"), a2 = document.createElement("a"); // Behövde komprimera detta för dokumentet
    
    li.id = name;
    dt.id = name + "P";
    dd.id = name + "Antal";
    dt.innerHTML = name;
    dd.innerHTML = "Antal deltagare: " + size;
    img.src = "pics/delete.png";
    img2.src = "pics/clock.png";
    a.setAttribute("href", "#");
    a2.setAttribute("href", "#");
    
    a.onclick = function() {
        grenar.removeChild(li);
        // Saknar en metod som ska ta bort objektet från arrayen.
        // Ska anropa en klass/function som renderar om grenarna.
    };
    
    a2.onclick = function() {
        // Steget före redigera gren. En popup där man skriver in de nya värden
    };
    
    a.appendChild(img), a2.appendChild(img2);
    dt.appendChild(a), dt.appendChild(a2);
}