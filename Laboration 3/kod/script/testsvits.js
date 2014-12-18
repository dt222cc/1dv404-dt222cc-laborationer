// Använder QUnit

// Simpel test
test( "Datatyper", function() {
  ok( typeof RegistreraGren == "function" , "Klassen RegistreraGren() implementerad." );
  ok( typeof RedigeraGren == "function" , "Klassen RedigeraGren() implementerad" );
});

/*
 * Testar klassen RegistreraGren()
 */

test( "Lägg till ny gren", function() {
  var grenar = [{name: "Bom", size: "10"}, {name: "Hopp", size: "12"}]; // Testdata
  ok(RegistreraGren(grenar, "Barr", "6"), ([{name: "Bom", size: "10"}, {name: "Hopp", size: "12"}, {name: "Barr", size: "6"}]), "Grenen registrerades.");
});

test( "Grenen finns redan", function() {
  var grenar = [{name: "Bom", size: "10"}, {name: "Hopp", size: "12"}]; // Testdata
  ok(RegistreraGren(grenar, "Bom", "10"), ([{name: "Bom", size: "10"}, {name: "Hopp", size: "12"}]), "Grenen finns redan.");
});


/*
 * Testar klassen RedigeraGren()
 */
 
test( "Redigera gren", function() {
  var grenar = [{name: "Bom", size: "10"}, {name: "Hopp", size: "12"}]; // Testdata
  ok(RedigeraGren(grenar, "Bom", "Fristående", "8"), ([{name: "Fristående", size: "8"}, {name: "Hopp", size: "12"}]), "Array ok");
});