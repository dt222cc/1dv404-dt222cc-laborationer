# Uppgift 2 - Iteration 1

------
## Bakgrund:
Implementering av registrering av ny användare/gymnast.

------
## Planering:
#### Krav
* Analysera användningsfall: 30 min
* Specificera krav: 30 min

#### Design/Implementation
* Identifiera klasser: 45 min
* Specificera klasser: 1 min
* Implementation: 2 h

#### Test
* Test design: 45 min
* Test specification: 1 h
* Test implementation: 1 h
* Test exekvering: 30 min

#### Reflektion
* Reflektera: 1 h

#### Totalt: 10 h

------
## Flöden:
Initiering: Användaren klickar på registrera ny användare/gymnast

#### Primärt flöde:
1. Sidan för registrering av ny användare presenteras
2. Aktören fyller i fält och trycker sedan på "Registrera" knappen
3. Verifierar data
4. Registrera data och lämplig meddelande presenteras för aktören som indikerar att registreringen är klart

#### Alternativ flöde:
	Om i steg 3 i primära flödet misslyckar verifieringen...
1. Presenteras ett meddelande som indikerar att registreringen misslyckades
2. Vidare till steg 2 i primära flödet.

------

## Krav:
* Kontrollera att de inmatade värden är korrekta med regex
    * E-post
    * Kontrollera om användarens e-post är redan registrerad
    * Ålder
* Lösenord (två fält, om båda fälten är samma)

------
## Design
| Klass: Person                                      | Klass: Validate                                                             |
|----------------------------------------------------|-----------------------------------------------------------------------------|
| personData: { <br>   firstName: String, <br>   lastName: String, <br>   email: String, <br>   password: String <br>} | data: { <br>   email: String, <br>   pw1: String, <br>   pw2: String <br>}<br><br> isVerified:,bool |
| addUser(personData)                                | validateData(data)<br>validateEmail(email)<br>validatePW(pw1,,pw2)                |

------
## Test: Klassen Person och Validate

------
| Test | Metod                              | Testfall                                                                                  | Förväntad resultat |
|------|------------------------------------|-------------------------------------------------------------------------------------------|--------------------|
| #1   | Lägg till ny person                | Förnamn: Sing <br>Efternamn: Trinh <br>E-post: dt222cc@student.lnu.se <br>Lösenord: 1234  |        true        |
| #2   | Validering av data, korrekt format | E-post: dt222cc@student.lnu.se <br>Lösenord 1: 1234 <br>Lösenord 2: 1234                  |        true        |
| #3   | Validering av data, fel email      | dt222ccstudent.lnu.se <br>@gmail.com <br>dt222cc@ <br>""                                  |        false       |
| #4   | Validering av data, fel lösenord   | 1234, 2345 <br>1234, "" <br>"", 1234 <br>"", ""                                           |        false       |

------
## Testdata:
| Test | Testansvarig |                Metod               | Förväntad resultat | Verklig resultat | Godkänt/ Underkänt |
|:----:|:------------:|:----------------------------------:|:------------------:|:----------------:|:------------------:|
|  #1  |    dt222cc   |Lägg till ny person                 |        true        |       true       |       Godkänt      |
|  #2  |    dt222cc   |Validering av data, korrekt format  |        true        |       true       |       Godkänt      |
|  #3  |    dt222cc   |Validering av data, fel e-post      |        false       |       false      |       Godkänt      |
|  #4  |    dt222cc   |Validering av data, fel lösenord    |        false       |       false      |       Godkänt      |

------
##Källkod:
Källkod finns i mappen "testkod" i iterationsmappen "1".