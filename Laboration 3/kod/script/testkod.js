"use strict";

/*
 * Testkod/Testfall
 */
window.onload = function(){
    
    /*
     * Testfall 1: skapa en ny gren.
     * Dessa ska rendera nya grenar i dokumentet.
     */
    new RegistreraGren("Balansbom", "10");
    new RegistreraGren("Barr", "12");
    new RegistreraGren("Test", "6");
    
    /*
     * Testfall 2: Gren finns redan
     * När grenen redan finns så meddelas detta och grenen skapas inte.
     */
    new RegistreraGren("Test", "8"); // Skapas inte
    
    /*
     * Testfall 3: Redigera gren
     * Väljer användaren att redigera gren så byts det gamla mot det nya.
     */
    var edit = document.getElementById("edit");
    edit.onclick = function() {
        new RedigeraGren("Balansbom", "10", "Hopp", "14");
        new RedigeraGren("Barr", "12", "Fristående", "8");
        
        /*
         * Resultat: De nya grenarna blir
         *  Hopp, 14
         *  Fristående, 8
         *  Test, 6
         */
    };
    
    /*
     * Testfall
     */
};
