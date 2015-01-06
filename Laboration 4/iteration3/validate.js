"use strict";

function Validate() {
}

Validate.prototype.validatePerson = function(gymnasts, pcn, fName, lName, email, pw1, pw2) {
    this.gymnasts = gymnasts;
    
    // Validerar personnnummer, email och lösenord.
    if (this.validatePCN(pcn)) {
        
        if (this.validateName(fName, lName)) {
            
            if (this.validateEmail(email)) {
                
                if (this.validatePW(pw1, pw2)) {
                    this.result = true;
                }
            }
        }
    }
    
    return this.result; // Returnerar true eller de olika felmeddelanden.
};

Validate.prototype.validatePCN = function(pcn) {
    
    if (pcn === "") {
        this.result = "Tom fält!";
        return false;
    }
    
    else {
        // Kontrollera om användaren är redan registrerad.
        for (var i = 0; i < this.gymnasts.length; i++) {
            if (this.gymnasts[i].pcn === pcn) {
                this.result = "Personnummer, redan registrerad!";
                return false;
            }
        }
        
        return true;
    }
};

Validate.prototype.validateName = function(first, last) {
    
    if (first === "" || last === "") {
        this.result = "Tom fält!";
        return false;
    }
    
    return true;
};

Validate.prototype.validateEmail = function(email) {
    
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (re.test(email)) {
        // Kontrollera om e-post adressen är redan registrerad.
        for (var i = 0; i < this.gymnasts.length; i++) {
            if (this.gymnasts[i].email === email) {
                this.result = "E-post adressen är upptaget!";
                return false;
            }
        }
        
    return true;
    }
    
    else {
        this.result = "E-post adress, fel format!";
        return false;
    }
};

Validate.prototype.validatePW = function(pw1, pw2) {
    
    if (pw1 === "" || pw2 === "") {
        this.result = "Tom fält!";
        return false;
    }
            
    else {
        if (pw1 === pw2) {
            return true;
        }
        
        else {
            this.result = "Andra lösenordet stämmer inte med det första!";
            return false;
        }
    }
};