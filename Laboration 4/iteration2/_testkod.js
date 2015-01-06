module("Klassen: League");
test( "Lägg till nytt lag, tillgänglig lag namn", function( assert ) {
    
    var test = new League();
    
    var person = { firstName: "Simon", lastName: "Trinh", email: "st222cc@student.lnu.se" };
    
    assert.equal( test.addTeam("YaY IF", person), "Laget registrerades utan problem.", "Passed! Expected: Laget registrerades utan problem." );
});

test( "Lägg till nytt lag, upptaget lag namn", function( assert ) {
    
    var test = new League();
    
    var person = { firstName: "Simon", lastName: "Trinh", email: "st222cc@student.lnu.se" };
    
    assert.equal( test.addTeam("YaW IF", person), "Laget finns redan!", "Passed! Expected: Laget finns redan!" );
});

test( "Lägg till nytt lag, tom namn", function( assert ) {
    
    var test = new League();
    
    var person = { firstName: "Simon", lastName: "Trinh", email: "st222cc@student.lnu.se" };
    
    assert.equal( test.addTeam("", person), "Laget måste ha ett namn!", "Passed! Expected: Laget måste ha ett namn!" );
});

test( "Ta bort lag", function( assert ) {
    
    var test = new League();
    
    assert.equal( test.removeTeam("YaW IF"), "Laget togs bort utan problem.", "Passed! Expected: Laget togs bort utan problem." );
});

