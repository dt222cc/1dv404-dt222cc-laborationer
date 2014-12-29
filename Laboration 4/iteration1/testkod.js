module("Klassen: Person");
test( "Lägga till ny person", function( assert ) {
    
    var indata = { firstName: "Sing", lastName: "Trinh", email: "dt222cc@student.lnu.se", password: "1234" };
    var test = new Person();
    var result = test.addUser(indata);
    
    assert.equal( result["firstName"], "Sing", "First name: Sing, Expected: Sing");
    assert.equal( result["lastName"], "Trinh", "Last name: Trinh, Expected: Trinh");
    assert.equal( result["email"], "dt222cc@student.lnu.se", "Email: dt222cc@student.lnu.se, Expected: dt222cc@student.lnu.se");
    assert.equal( result["password"], "1234", "Password: 1234, Expected: 1234");
});

// Använder true/false för dessa tester, bättre med undantag istället?
module("Klassen: Validate");
test( "Validering av data, korrekt format", function( assert ) {
    
    var indata = { email: "dt222cc@student.lnu.se", pw1: "1234", pw2: "1234" };
    var test = new Validate();
    var result = test.validateData(indata);
    
    assert.equal( result, true, "dt222cc@student.lnu.se, pw1: 1234, pw2: 1234, Expected true");
});

test( "Validering av data, fel format: email", function( assert ) {

    var indata1 = { email: "dt222ccstudent.lnu.se", pw1: "1234", pw2: "1234" };
    var indata2 = { email: "@gmail.com", pw1: "1234", pw2: "1234" };
    var indata3 = { email: "dt222cc@", pw1: "1234", pw2: "1234" };
    var indata4 = { email: "", pw1: "1234", pw2: "1234" };
    
    var test1 = new Validate();
    var test2 = new Validate();
    var test3 = new Validate();
    var test4 = new Validate();
    
    var result1 = test1.validateData(indata1);
    var result2 = test2.validateData(indata2);
    var result3 = test3.validateData(indata3);
    var result4 = test4.validateData(indata4);
    
    assert.equal( result1, false, "dt222ccstudent.lnu.se, Expected: false");
    assert.equal( result2, false, "@gmail.com, Expected: false");
    assert.equal( result3, false, "dt222cc@, Expected: false");
    assert.equal( result4, false, "\"\", Expected: false");
});

test( "Validering av data, fel format: lösenord", function( assert ) {

    var indata1 = { email: "asd@asd.me", pw1: "1234", pw2: "2345" };
    var indata2 = { email: "asd@asd.me", pw1: "1234", pw2: "" };
    var indata3 = { email: "asd@asd.me", pw1: "", pw2: "1234" };
    var indata4 = { email: "asd@asd.me", pw1: "", pw2: "" };
    
    var test1 = new Validate();
    var test2 = new Validate();
    var test3 = new Validate();
    var test4 = new Validate();
    
    var result1 = test1.validateData(indata1);
    var result2 = test2.validateData(indata2);
    var result3 = test3.validateData(indata3);
    var result4 = test4.validateData(indata4);
    
    assert.equal( result1, false, "1234, 2345, Expected: false");
    assert.equal( result2, false, "1234, \"\", Expected: false");
    assert.equal( result3, false, "\"\", 1234, Expected: false");
    assert.equal( result4, false, "\"\", \"\", Expected: false");
});