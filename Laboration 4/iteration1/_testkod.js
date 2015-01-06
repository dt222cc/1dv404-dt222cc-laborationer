module("Klassen: Person");
test( "Lägga till ny person", function( assert ) {
    
    var newPerson = new Person("Sing", "Trinh", "dt222cc@student.lnu.se", "1234");
    
    assert.equal( newPerson.firstName, "Sing", "First name: Sing, Expected: Sing");
    assert.equal( newPerson.lastName, "Trinh", "Last name: Trinh, Expected: Trinh");
    assert.equal( newPerson.email, "dt222cc@student.lnu.se", "Email: dt222cc@student.lnu.se, Expected: dt222cc@student.lnu.se");
    assert.equal( newPerson.password, "1234", "Password: 1234, Expected: 1234");
});

// Använder true/false för dessa tester
module("Klassen: Validate");
test( "Validering av data, korrekt format", function( assert ) {
    
    var test = new Validate("dt222cc@student.lnu.se", "1234", "1234");
    
    assert.equal( test.isVerified, true, "dt222cc@student.lnu.se, pw1: 1234, pw2: 1234, Expected true");
});

test( "Validering av data, fel format: email", function( assert ) {

    var test1 = new Validate("dt222ccstudent.lnu.se", "1234", "1234");
    var test2 = new Validate("@gmail.com", "1234", "1234");
    var test3 = new Validate("dt222cc@", "1234", "1234");
    var test4 = new Validate("", "1234", "1234");
    
    assert.equal( test1.isVerified, false, "dt222ccstudent.lnu.se, Expected: false");
    assert.equal( test2.isVerified, false, "@gmail.com, Expected: false");
    assert.equal( test3.isVerified, false, "dt222cc@, Expected: false");
    assert.equal( test4.isVerified, false, "\"\", Expected: false");
});

test( "Validering av data, fel format: lösenord", function( assert ) {

    var test1 = new Validate("asd@asd.me",  "1234", "2345");
    var test2 = new Validate("asd@asd.me", "1234", "");
    var test3 = new Validate("asd@asd.me", "", "1234");
    var test4 = new Validate("asd@asd.me", "", "");
    
    assert.equal( test1.isVerified, false, "1234, 2345, Expected: false");
    assert.equal( test2.isVerified, false, "1234, \"\", Expected: false");
    assert.equal( test3.isVerified, false, "\"\", 1234, Expected: false");
    assert.equal( test4.isVerified, false, "\"\", \"\", Expected: false");
});