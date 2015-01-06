# Uppgift 3 - Iteration 2

------
## Bakgrund:
Implementering av registrering av nytt lag

------
## Planering:
#### Krav
* Analysera användningsfall: 30 min
* Specificera krav: 30 min

#### Design/Implementation
* Identifiera klasser: 45 min
* Specificera klasser: 45 min
* Implementation: 2 h

#### Test
* Test design: 45 min
* Test specification: 45 min
* Test implementation: 1 h
* Test exekvering: 30 min

#### Reflektion
* Reflektera: 1 h 30 min

#### Extra
* Revidera: 1 h

#### Totalt: 10 h

------
## Flöden:
Initiering: Användaren klickar på registrera lag
Pre-villkor: Användaren är inloggad

#### Primärt flöde:
1. Sidan för registrering av nytt lag presenteras
2. Aktören fyller i fält och trycker sedan på "Registrera" knappen
3. Verifierar data
4. Laget registreras och lämplig meddelande presenteras för aktören som indikerar att registreringen är klart

#### Alternativ flöde:
    Om i steg 3 i primära flödet misslyckar verifieringen...
1. Presenteras ett meddelande som indikerar att registreringen misslyckades.
2. Vidare till steg 2 i primära flödet

Post-villkor: Laget registrerad
------

## Krav:
* Kontrollera att de inmatade värden är korrekta med t.ex regex
** Namn (tillgänglig)

------
## Design
| Klass: League             | Klass: Team                            |
|---------------------------|----------------------------------------|
| teams: [\*]<br>teams: [*] | teamName: String<br>teamLeader: Person |
| addTeam()<br>removeTeam() |                                        |

------
## Test: Klassen Team och League
| Test | Metod                                      | Testfall                                                              | Förväntad resultat |
|:----:|--------------------------------------------|-----------------------------------------------------------------------|:------------------:|
|  #1  | Lägg till nytt lag, tillgänglig lag namn   | Lag namn: YaY IF (String)<br>Lag ledare: Sing Trinh (person)          | Laget registrerad  |
|  #2  | Lägg till nytt lag, upptaget lag namn      | Lag namn: YaW IF (String)<br>Lag ledare: Sing Trinh (person)          | Fel meddelande     |
|  #3  | Lägg till nytt lag, tom namn               | Lag namn: "" (String/Undefined)<br>Lag ledare: Sing Trinh (person)    | Fel meddelande     |
|  #4  | Ta bort lag                                | Lag namn: YaY IF (String)                                             | Laget borttaget    |

------
## Testdata:
| Test | Testansvarig | Metod                               | Förväntad resultat | Verklig resultat   | Godkänt/ Underkänt |
|:----:|:------------:|-------------------------------------|:------------------:|:------------------:|:------------------:|
|  #1  |    dt222cc   | Lägg till ny person                 | Laget registrerad  | Laget registrerad  |       Godkänt      |
|  #2  |    dt222cc   | Validering av data, korrekt format  | Fel meddelande     | Fel meddelande     |       Godkänt      |
|  #3  |    dt222cc   | Validering av data, fel e-post      | Fel meddelande     | Fel meddelande     |       Godkänt      |
|  #4  |    dt222cc   | Validering av data, fel lösenord    | Laget borttaget    | Laget borttaget    |       Godkänt      |

------
## Källkod:
Källkod finns i mappen "testkod" i iterationsmappen "1".
https://github.com/dt222cc/1dv404-dt222cc-laborationer/tree/master/Laboration%204/iteration1

## Kort motivering/reflektion:
Efter att ha arbetat med klassen team/league så fick jag göra ett par ändringar.Liksom det blir inte alltid så som man hade tänkt sig. När man arbetar så lägger man märke på saker och ting som inte behövs eller annat som man behöver ha med. Detta innebar att jag fick ta bort en del funktionalitet som inte behövdes. Klasserna blev mindre och jag la märke på att jag kunde göra om det jag skulle göra i iteration 3 lite. Med iteration 3 så skulle jag lägga till funtionalitetet att lägga till gymnaster till ett lag. Jag la märke på att jag kunde jobba "vidare" med det i klassen team. 

En annan grej är att eftersom omfattningen är inte så stor så blir iterationerna kortare än förväntat, transitionen mellan iterationerna är nu mer om jag blir klar så går jag vidare nästa iteration.
