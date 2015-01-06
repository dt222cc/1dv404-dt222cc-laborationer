"use strict";

// Tar emot en objekt som innehåller data som ska kontrolleras (just nu: email och lösenord(pw1&pw2)).
// "Finns förmodligen bättre sätt att göra detta men jag behövde något att arbeta med :P"
function Validate(email, pw1, pw2) {
    this.isVerified = false;
    
    if (this.validateEmail(email)) {
        this.isVerified = true;
        
        if (pw1 === "" || pw2 === "") {
            this.isVerified = false;
        }
        
        else {
            
            if (pw1 === pw2) {
                this.isVerified = true;
            }
            
            else {
                this.isVerified = false;
            }
        }
    }
    
    else {
        this.isVerified = false;
    }
    
    return this.isVerified;
}

Validate.prototype.validateEmail = function(email) {
    
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return re.test(email);
};