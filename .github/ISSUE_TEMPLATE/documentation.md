---
name: Documentation
about: User story
title: "[DOCUMENTATION]"
labels: ''
assignees: ''

---

## Title
Als een [rol] wil ik [doel] zodat [reden]

Bijvoorbeeld:
Als gebruiker wil ik kunnen inloggen zodat ik toegang krijg tot afgeschermde delen van het systeem zoals de user-profile-page.

## Acceptatiecriteria
Genummerd.

Bijvoorbeeld:
- c1: alleen geregisteerde gebruikers kunnen inloggen
- c2: een client hoeft een gebruiker niet meer in te loggen voor N X (N is een getal en X kan zijn minuten, uren, dagen, jaren) maar maakt gebruik van een token om zich te identificeren.
- c3: alleen email en een password worden geaccepteerd als input
- c4: wanneer het registeren-deel van de website nog niet klaar is, dan mag gebruik worden gemaakt van tijdelijk data structuur voor user
- c6: wanneer de gebruiker niet kan inloggen moet de client hiervan op de hoogte worden gesteld
- c7: wanneer het systeem de gebruiker niet kan inloggen voor de 4de keer moet de client hiervan op de hoogte worden gesteld

## Eisen
Genummerd.

Bijvoorbeeld:
- f1: vanuit de client worden het password en email van de gebruiker opgestuurd
- f2: wanneer een fout optreedt moet de client geinformeerd worden via de correct http-status
- f3: een password bestaat uit minimaal 9 characters, heeft minimaal 1 cijfer en 1 van de volgende characters: !@#$%
- f4: er mag alleen een correct geformuleerd emailadres worden verstuurd
- f5: de logincounter per client wordt op 0 gezet na 30 minuten na de laatste poging om in te loggen

## Happy Path
Voorwaarden om te beginnen aan dit path.

Bijvoorbeeld:
- v1: De gebruiker heeft een geregisteerd account.  
- v2: De client heeft toegang tot internet.  

## Unhappy Path

Bijvoorbeeld:
&emsp;&emsp;1.b.2 Het systeem checkt de counter en is 4 of hoger.   
&emsp;&emsp;1.b.3 Het systeem heeft de client terug dat er te vaak al geprobeerd is om in te loggen.   
&emsp;&emsp;1.b.4. de client gaat terug naar stap 1 en kan dit pas na 30 minuten weer inloggen, f5.   

## Test
Hier komen de tests te staan die moeten worden uitgevoerd. Doel: vertel wat je waarom test hierin; Type tests: "unit-, integration-, e2e test"; input bij de test (request), afhankelijk van type; verwacht resultaat/output (response).

| Test nummer | Doel | Type test | Test input | Resultaat test |
| ------ | ------ | ------ | ------ |  ------ |
| 1 | ... | ... | ... | ... |
| 2 | ... | ... | ... | ... |

## Constraints
Constraints zijn de zaken die vast staan en/of worden vastgesteld door de opdrachtgever of PO. Benoem deze in de wiki. Denk aan de taal, frameworks, middlewere, etc.

Bijvoorbeeld:
c1: er wordt over HTTP gecommuniceerd tussen client en server
c2: De inloggegevens wordt gecontroleerd in de middleware

## Concerns
Concerns zijn de zaken waar het (development)team bedenkingen bij heeft of risico's in ziet.

## Bronnen
Benoem hier alle bronnen die je hebt gebruikt voor dit issue. Denk aan uitleg van functionaliteit, artikelen die oplossing bied voor problemen, bronvermelding van afbeeldingen, etc.
