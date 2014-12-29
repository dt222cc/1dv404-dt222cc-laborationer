"use strict";

// Klassen tar emot en objekt med personens information och registrera den.
function Person() {
    this.personData = { firstName: null, lastName: null, email: null, password: null};
}

Person.prototype.addUser = function dasd(data) {
    this.personData["firstName"] = data.firstName;
    this.personData["lastName"] = data.lastName;
    this.personData["email"] = data.email;
    this.personData["password"] = data.password;
    
    return this.personData;
};

// Plats för tillägg om man vill ha med redigering eller hämtning av kontaktinformation. Med get och set konstruktorer.