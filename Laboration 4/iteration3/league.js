"use strict";

// Tänkt att klassen innehåller information som alla gymnaster, lag, domare, och tävlingar.
function League() {
    
    // Alla registrerade lag. 1 lag just nu. Lag innehåller lagnamn, lagledare och medlemmar.
    this.teams = [{
        teamName: "YaW IF",
        teamLeader: {
            pcn: "199302271078",
            firstName: "Sing",
            lastName: "Trinh",
            email: "dt222cc@student.lnu.se"
        },
        members: [{
            pcn: "199302271078",
            firstName: "Sing",
            lastName: "Trinh",
            email: "dt222cc@student.lnu.se",
        }]
    }];
    
    // Alla registrerade gymnaster.
    this.gymnasts = [{
            pcn: "199302271078",
            firstName: "Sing",
            lastName: "Trinh",
            email: "dt222cc@student.lnu.se",
            password: "1234",
        },
        {
            pcn: "111122334444",
            firstName: "Simon",
            lastName: "Trinh",
            email: "st222cc@student.lnu.se",
            password: "2345",
    }];
}

// Registrera ny användare/gymnast.
League.prototype.addGymnast = function(pcn, fName, lName, email, pw1, pw2) {
    
    // Skickar data för validering.
    var val = new Validate();
    var re = val.validatePerson(this.gymnasts, pcn, fName, lName, email, pw1, pw2);

    if (re === true) {
        // Registrera ny gymnast.
        var newObj = new CreateObj();
        var newPerson = newObj.addGymnast(pcn, fName, lName, email, pw1);
        this.gymnasts.push(newPerson);
        
        return "Personen registrerades utan problem.";
    }
    
    else {
        return re;  // True eller de olika felmeddelanden som returnerades från Validate().
    }
};

// Registrera nytt lag, innehåller bara lagnamn och lagledare till att börja med.
League.prototype.addTeam = function(teamName, teamLeader) {
    
    // Validera uppgifter före registrering.
    if (teamName === ""  || teamName === undefined) {
        return "Laget måste ha ett namn!";
    }
    
    else {
        for (var i = 0; i < this.teams.length; i++) {
            if (this.teams[i].teamName === teamName) {
                return "Laget finns redan!";
            }
        }
        
        // Registrera nytt lag.
        var newObj = new CreateObj();
        var newTeam = newObj.addTeam(teamName, teamLeader);
        this.teams.push(newTeam);
        
        return "Laget registrerades utan problem.";
    }
};

League.prototype.addMember = function(pcn, team) {

    // Går först igenom alla lag efter lagnamnet.
    for (var i = 0; i < this.teams.length; i++) {
        if (this.teams[i].teamName === team) {
            // Efter den har hittat laget, går den igenom medlemmarna om personen är redan medlem.
            for (var j = 0; j < this.teams[i].members.length; j++) {
                // Alt 1: Personen är redan en medlem.
                if (this.teams[i].members[j].pcn === pcn) {
                    return "Personen är redan en medlem.";
                }
            }
            
            // Alt 2: Personen är inte medlem, registrera personen till laget.
            for (var k = 0; i < this.gymnasts.length; k++) {
                if (this.gymnasts[k].pcn === pcn) {
                    var newObj = new CreateObj();
                    var re = newObj.addMember(this.gymnasts[k]);
                    
                    this.teams[i].members.push(re);
                    return "Ny medlem registrerad.";
                }
            }
        }
    }
};

// Ta bort användare genom pcn(personal code number).
League.prototype.removeGymnast = function(pcn) {

    for (var i = 0; i < this.gymnasts.length; i++) {
        if (this.gymnasts[i].pcn === pcn) {
            this.gymnasts.splice(i,1);
            return "Personen togs bort utan problem.";
        }
    }
    
    return "Personen hittades inte!";
};

// Ta bort lag genom lagnamn.
League.prototype.removeTeam = function(teamName) {

    for (var i = 0; i < this.teams.length; i++) {
        if (this.teams[i].teamName === teamName) {
            this.teams.splice(i,1);
            return "Laget togs bort utan problem.";
        }
    }
    
    return "Laget hittades inte!";
};

// Ta bort användare genom pcn(personal code number).
League.prototype.removeMember = function(pcn, team) {

    // Går först igenom alla lag efter lagnamnet.
    for (var i = 0; i < this.teams.length; i++) {
        if (this.teams[i].teamName === team) {
            // Efter den har hittat laget, går den igenom medlemmarna efter personen.
            for (var j = 0; j < this.teams[i].members.length; j++) {
                if (this.teams[i].members[j].pcn === pcn) {
                    // Ta bort personen från arrayen.
                    this.teams[i].members.splice(j,1);
                    console.log(this.teams);
                    return "Medlem, avregistrerad.";
                }
            }
        }
    }
    return "Error!";
};

/*
 * Funderingar, separera saker som hämtar lagnamn kanske? (mindre for-loopar)
 */