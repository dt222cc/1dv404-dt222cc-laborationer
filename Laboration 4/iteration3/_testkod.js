module("addMember()");
test( "Ny medlem", function( assert ) {
    
    var test = new League();
    assert.equal( test.addMember("111122334444", "YaW IF"), "Ny medlem registrerad.", "(11112233444, YaW IF) Expected: Ny medlem registrerad." );
});
test( "Redan medlem", function( assert ) {
    
    var test = new League();

    assert.equal( test.addMember("199302271078", "YaW IF"), "Personen är redan en medlem.", "(199302271078, YaW IF) Expected: Personen är redan en medlem." );
});

module("removeMember()");
test( "Avregistrera medlem", function( assert ) {
    
    var test = new League();
    assert.equal( test.removeMember("199302271078", "YaW IF"), "Medlem, avregistrerad.", "(199302271078, YaW IF) Expected: Medlem, avregistrerad." );
});
/* 
 * Tycker inte att det finns mer tester att göra.
 * Därför har jag med tester från iteration 1-2 eftersom jag hade gjort om strukturen en bit.
 * Dessutom för att testa att klasserna funkar ihop (integrationstestningen) och tester som man hade missat.
 */

module("addGymnast() & Validate()");
test( "Registrera ny person & redan registrerad", function( assert ) {
    
    var test = new League();
    
    assert.equal( test.addGymnast("199312241078", "Da-Sing", "Trinh", "dasing.trinh1@gmail.com", "1111", "1111"), "Personen registrerades utan problem.", "(Ny person) Expected: Personen registrerades utan problem.");
    assert.equal( test.addGymnast("199302271078", "Da-Sing", "Trinh", "dasing.trinh1@gmail.com", "1111", "1111"), "Personnummer, redan registrerad!", "(Registrerad personnummer) Expected: Personnummer, redan registrerad!");
});

test( "Tomma fälter", function( assert ) {
    
    var test = new League();
    
    assert.equal( test.addGymnast("", "Da-Sing", "Trinh", "dasing.trinh1@gmail.com", "1111", "1111"), "Tom fält!", "Personnummer, Expected: Tom fält!");
    assert.equal( test.addGymnast("000000000001", "", "B", "a@gmail.com", "11", "11"), "Tom fält!", "Förnamn, Expected: Tom fält!");
    assert.equal( test.addGymnast("000000000002", "A", "", "b@gmail.com", "11", "11"), "Tom fält!", "Efternamn, Expected: Tom fält!");
    assert.equal( test.addGymnast("000000000003", "A", "B", "", "11", "11"), "E-post adress, fel format!", "E-post adress, Expected: Tom fält!/E-post adress, fel format!");
    assert.equal( test.addGymnast("000000000004", "A", "B", "c@gmail.com", "", "11"), "Tom fält!", "Lösenord 1, Expected: Tom fält!");
    assert.equal( test.addGymnast("000000000004", "A", "B", "d@gmail.com", "11", ""), "Tom fält!", "Lösenord 2, Expected: Tom fält!");
    assert.equal( test.addGymnast("000000000004", "A", "B", "e@gmail.com", "", ""), "Tom fält!", "Lösenord 1 & 2, Expected: Tom fält!");
});