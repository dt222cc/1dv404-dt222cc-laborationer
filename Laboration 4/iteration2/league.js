"use strict";

// Tänkt att klassen innehåller information som alla lag, domare, och tävlingar. Jag implemeterar bara lag delen.
function League() {
    this.teams = [
        {
            teamName: "YaW IF",
            teamLeader: { firstName: "Sing", lastName: "Trinh", email: "dt222cc@student.lnu.se" },
        },
    ];
}

League.prototype.addTeam = function(teamName, teamLeader) {
    
    if (teamName === ""  || teamName === undefined) {
        return "Laget måste ha ett namn!";
    }
    
    else {
        for (var i = 0; i < this.teams.length; i++) {
            if (this.teams[i].teamName === teamName) {
                return "Laget finns redan!";
            }
        }
        
        var newTeam = new Team(teamName, teamLeader);
        
        this.teams.push(newTeam);
        
        return "Laget registrerades utan problem.";
    }
};

League.prototype.removeTeam = function(teamName) {

    for (var i = 0; i < this.teams.length; i++) {
        if (this.teams[i].teamName === teamName) {
            this.teams.splice(i,1);
            return "Laget togs bort utan problem.";
        }
    }
    
    return "Laget hittades inte!";
};
// /*
//  * Plats för metoder för domare och tävlingar.
//  * Lag, domare och tävlingar är förmodligen de tre top funktioner som ska implementeras i systemet, men jag bortser från det.
//  */