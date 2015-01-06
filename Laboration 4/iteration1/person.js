"use strict";

// Klassen tar emot personens information och registrera den.
function Person(first, last, email, password) {
    this.firstName = first;
    this.lastName = last;
    this.email = email;
    this.password = password;
}

// Plats för tillägg om man vill ha med redigering eller hämtning av kontaktinformation.