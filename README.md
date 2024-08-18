<div>
  <p align="center">
    <img src="https://github.com/mmeest/testcafe-cucumber-reports-master/blob/main/logos/tc.jpg" width="420px">
  </p>
</div>


# testcafe-cucumber suitsutestid smit.ee/et/karjaar jaoks

Testcafe ja Cucumberjs raamistikuga loodud kasutajaliidese testid.


# Contents
* [Kuidas jooksutada - käsurealt käivita järgmised käsud](#kuidas-jooksutada---käsurealt-käivita-järgmised-käsud)
* [Ülesanded](#ülesanded)
* [Tööriistad](#tööriistad)
* [Testilood](#testilood)
* [Automaattestid](#automaattestid)
* [Package.json](#packagejson)
* [Readme.md](#readmemd)


### Kuidas jooksutada - käsurealt käivita järgmised käsud
Sul peab arvutis olema node https://nodejs.org/en/download/ ja Git https://git-scm.com/downloads
1. Typescripti laadimiseks  `npm i -g typescript`
1. Klooni repo
2. Lae alla sõltuvused `npm i`
3. Käivita Chromes testimiseks: `npm run prio1` või `npm run prio2` 
4. Käivita IE's testimiseks: `npm run test:ie`


### Ülesanded

Nüüd kui sa oled näinud kuidas testid jooksevad, koosta testlood meie karjäärilehe jaoks https://www.smit.ee/et/karjaar \
Seejärel automatiseeri testlood muutes olemasolevates testides väärtusi: testsammud on /steps kaustas ja leheobjektid ehk HTML elemendid on /pages kaustas ja testlood ise saad kirjutada features/ kaustas olevasse faili \
Eriti tubli oled kui oskad öelda mille jaoks on package.json ja readme.md failid \
\
\
Veelkord, küsi julgelt nõu ja abi

<hr>

### Tööriistad

<div>
  <p>
    <img src="https://github.com/mmeest/testcafe-cucumber-reports-master/blob/main/logos/TS.png" width="100px">
  </p>
</div>

**TypeScript** - Microsofti poolt arendatav programmeerimiskeel, mis sarnaneb JavaScriptile
https://www.typescriptlang.org/

<div>
  <p>
    <img src="https://github.com/mmeest/testcafe-cucumber-reports-master/blob/main/logos/cucumber.png" width="100px">
  </p>
</div>

**Cucumber** - on tööriist mis toetab BDD(behaviour-driven-development), optimaalselt kirjeldades koodi käitumist
https://cucumber.io/
**Gherkin** - kindla inimloetava/loogilise süntaksiga kirjelduskeel, millega kirjeldatakse rakenduse nõudeid.
https://cucumber.io/docs/gherkin/

<div>
  <p>
    <img src="https://github.com/mmeest/testcafe-cucumber-reports-master/blob/main/logos/testcafe.png" width="100px">
  </p>
</div>

**TestCafe** - vabavaraline open-source tarkvara testide käitaja, mis toetab kõiki enamlevinud veebibrausereid
https://testcafe.io/


### Testilood

NB! Antud testilood on mõeldud automaattestide tarvis.

| Test ID | Kirjeldus | Testisammud | Testandmed | Oodatud tulemus | Tegelik | Staatus |
| - | - | - | - | - | - | - |
| S0001 | Lehe päise logol klikkides liigutakse SMIT'i pealehele | 1. Ava brauseris lehekülg smit.ee/et/karjaar 2. Kliki lehe päises vasakul asuvale 'SMIT' logole | - | Leht vahtub ja lehe päise tekst on "Siseministeeriumi infotehnoloogia- ja arenduskeskus" | Leht vahtub ja lehe päise tekst on "Siseministeeriumi infotehnoloogia- ja arenduskeskus" | PASSED |
| S0002 | Päise menüü elemendid on õige tekstiga | 1. Ava brauseris lehekülg smit.ee/et/karjaar | - | Lehe päise menüüs on 8 elementi tekstidega: Meist; Valdkonnad; Leia kiirelt; Uudised; EL Projektid; Hanked; Kontaktid; Tule smitikaks | Lehe päise menüüs on 8 elementi tekstidega: Meist; Valdkonnad; Leia kiirelt; Uudised; EL Projektid; Hanked; Kontaktid; Tule smitikaks | PASSED |
| S0003 | Kontrollitakse karjääri DOM-elementi lehel | 1. Ava brauseris lehekülg smit.ee/et/karjaar | - | Karjääri element eksisteerib, kuid see pole koheselt nähtav | Karjääri element eksisteerib, kuid see pole koheselt nähtav | PASSED |


### Automaattestid 

Automaattestide käivitamise käsuread on nelja erineva brauseri tarvis:

Chrome `npm run test:smit:chrome`

Edge  `npm run test:smit:edge`

Firefox `npm run test:smit:firefox`

Opera  `npm run test:smit:opera`


Automaattestide failid 'browseSmitPage.feature' ning 'navigate-to-smit.ts' asuvad eraldi kaustas nimega 'tests'

Feature fail sisaldab kolme testistsenaariumi:

```
Feature: Open SMIT Career Page

    Scenario: Redirecting to main page
        Given I have opened the SMIT career page
        When I click on the logo
        Then The page should redirect and have the correct title

    Scenario: Validating Menu items
        Given I have opened the SMIT career page
        Then Valid elements displayed

    Scenario: Validating 'Praktika' element exists
        Given I have opened the SMIT career page
        Then Praktika element exists
```

Lehe elementide selektorid on talletatud '/pages/smitPagesElements.ts' faili



### Package.json

Tegemist on JSON-formaadis(_JavaScript Object Notation_) konfiguratsioonifailiga mida kasutatakse 
JavaScripti ja ennekõike just Node.js projektides, et talletada kõik sõltuvused(_dependencies_). 
Lisaks sellele on 'package.json' failis nii projekti nimi, versioon, kirjeldus, skriptid, litsents jne.

Selleks, et luua projekti juurkataloogi 'package.json' faili võib kasutada järgmist NPM(_Node Package Manager_) käsku:

```
npm init
```

### Readme.md

'readme.md' puhul on tegemist tekstifailiga milles dokumenteeritakse antud tarkvaraprojekti.
Käesoleval juhul ongi tegemist selle sama failiga. 
'readme.md' kasutab markdown vormingut milles saab lihtsaid teksti/dokumendi-kujundusi luua.
Selles failis on tavaliselt projekti nimi, kirjeldus, vajadusel projekti käitamise juhised,
versiooniinfo ning litsents.
