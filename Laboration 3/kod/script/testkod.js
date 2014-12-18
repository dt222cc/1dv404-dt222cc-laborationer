"use strict";

// Testkod
window.onload = function(){
    
    // testdata
    var indata = [{name: "Bom", size: "10"}, {name: "Hopp", size: "12"}];
    var result1 = [{name: "Bom", size: "10"}, {name: "Hopp", size: "12"}, {name: "Barr", size: "6"}];
    
    // Testfall 1: Lägg till ny gren.
    var test1 = new RegistreraGren(indata, "Barr", "6");
    if (test1 === result1) {
        console.log("test 1, ok");
    } else {
        console.log("test 1, fail");
        console.log(test1);
        console.log(result1);
    }

    // Testfall 2: Gren finns redan
    var test2 = new RegistreraGren(indata, "Bom", "10");
    if (test2 === indata) { // <-
        console.log("test 2, ok");
    } else {
        console.log("test 2, fail");
    }
    
    // Testfall 3: Redigera grenar
    var test3 = new RedigeraGren(indata, "Bom", "Fristående", "8");
    var test3b = new RedigeraGren(indata, "Hopp", "Ringar", "8");
    console.log(test3);
    console.log(test3b);
};
