"use strict";

// Tar emot en objekt som innehåller data som ska kontrolleras (just nu: email och lösenord(pw1&pw2)). "Finns mycket bättre sätt att göra detta men jag behövde något att arbeta med :P"
function Validate() {
    
}

Validate.prototype.validateData = function(data) {
    
    this.isVerified = false;
    
    if (this.validateEmail(data["email"])) {
        this.isVerified = true;
    }
    
    else {
        return this.isVerified;
    }
    
    this.isVerified = this.validatePW(data["pw1"], data["pw2"]);
    
    return this.isVerified;
};

Validate.prototype.validateEmail = function(email) {
    
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return re.test(email);
};

Validate.prototype.validatePW = function(pw1, pw2) {
    
    if (pw1 === "" || pw2 === "") {
        console.log("tom");
        return false;
    }
    
    else {
        
        if (pw1 === pw2) {
            console.log("samma");
            return true;
        }
        
        else {
            console.log("stämmer ej");
            return false;
        }
    }
};
