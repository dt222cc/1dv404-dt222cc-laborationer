"use strict";

// Konstruktor för att skapa ny användare/gymnast
function CreateObj() {
}

CreateObj.prototype.addGymnast = function(pcn, first, last, email, pw) {
    this.person = {};
    
    this.person.pcn = pcn;
    this.person.firstName = first;
    this.person.lastName = last;
    this.person.email = email;
    this.person.password = pw;

    return this.person;
};

CreateObj.prototype.addTeam = function(teamName, teamLeader) {
    this.team = {};
    
    this.team.teamName = teamName;
    this.team.teamLeader = teamLeader;
    
    return this.team;
};

CreateObj.prototype.addMember = function(person) {
    this.member = {};
    
    this.member.pcn = person.pcn;
    this.member.firstName = person.firstName;
    this.member.lastName = person.lastName;
    this.member.email = person.email;
    
    return this.member;
};