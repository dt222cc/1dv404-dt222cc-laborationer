"use strict";

// Klassen RegistreraGren
function RegistreraGren(array, name, size) {
    var grenObject = {name: name, size: size};
    return finnsRedan(grenObject, array);
}

// RegistreraGren.prototype.finnsRedan = function(object, array) { // Utan QUnit
function finnsRedan(object, array) { // För QUnit
    var count = 0;
    
    for (var i in array) {
        if (object.name === array[i].name) {
            console.log("Grenen " + object.name + " finns redan!");
            break;
        }
        else if (object.name === undefined) {
            console.log("Grenen har inga värden. Gren registreras inte.");
            break;
        }
        else {
            count++;
        }
    }
    
    // Grenen finns inte, registrera gren till array
    if (count === array.length) {
        array.push(object);
    }
    
    renderaGrenar(array); // this.renderaGrenar(array);
    return array;
}

// RegistreraGren.prototype.renderaGrenar = function(array) {
function renderaGrenar(array) {
    // Tänkt att alla objekt i arrayen ska renderas på html dokumentet. (kanske som seperat klass)
}
