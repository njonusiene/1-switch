// 1. Switch užduotis:

// 1. Ar atsimenat paskutinį IF-ELSE pratimą? Būtent jį efektyviau apsirašyti su Switch, pasibandykime:
// Sukurkite variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Aprašykite Switch, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.
// VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
// BMW group priklauso: BMW, Mini, Rolls-Royce.

var car = prompt("Įveskite automobilio ženklą: ");
car = car.toLowerCase();

switch (car) {
    case "vw":
    case "audi":
    case "bentley":
    case "bugatti":
    case "lamborghini":
    case "porsche":
        alert('Priklauso VW Group');
        console.log(car + ' priklauso VW Group');
        break;
    case "bmw":
    case "mini":
    case "rolls-royce":
        alert('Priklauso BMW Group');
        console.log(car + ' priklauso BMW Group');
        break;
    default:
        alert('Nepriklauso niekam');
        console.log(car + ' nepriklauso niekam');
}

// 2. Sukurkite variable 'userInput' ir pradžioje prilyginkite 'Obuolys'. Su Switch statement apsirašyk, kad 'userInput' reikmšmė yra - vaisius ar daržovė. Pridėkite bent 5 kiekvienos kategorijos (trūksta idėjų? Wiki į pagalbą: vaisiai, daržovės).

var userInput = "Obuolys"

switch(userInput) {
    case "Bananas":
    case "Kriaušė":
    case "Aplesinas":
    case "Mangas":
    case "Obuolys":
        console.log(userInput + " reikšmė yra vaisius.");
        break;
    case "Agurkas":
    case "Bulvė":
    case "Burokas":
    case "Morka":
    case "Kopūstas":
        console.log(userInput + " reikšmė yra daržovė.");
        break;
    default:
        console.log(userInput + "Nepriklauso sąrašui");
    }

// 3. Kokia šiandien diena? Sukurkite variable 'weekDay', kuris būtų lygus skaičiui - savaitės dienai, skaičiuojant nuo 0 (t.y. pirmadienis - 0; antradienis - 1; trečiadienis - 2 ir t.t.). Parašykite Switch statement, kuris paimtų skaičių ir jį pakeistų (ne sukurtų naują kintamąjį, o pakeistų 'weekDay' reikšmę) į savaitės dieną žodžiu. Vėliau, atspausdink kintamąjį.

var weekDay = 3

switch (weekDay) {
    case 0:
        weekDay = "Pirmadienis";
        break;
    case 1:
        weekDay = "Antradienis";
        break;
    case 2:
        weekDay = "Trečiadienis";
        break;
    case 3:
        weekDay = "Ketvirtadienis";
        break;
    case 4:
        weekDay = "Penktadienis";
        break;
    case 5:
        weekDay = "Šeštadienis";
        break;
    case 6:
        weekDay = "Sekmadienis";
        break;
    default:
        weekDay = "Savaitėje tik 7 dienos";
}
console.log(weekDay);