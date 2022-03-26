# Practica 6: Clases e interfaces genéricas. Principios SOLID
## Autor: Vlatko Jesús Marchán Sekulic.

---
El repositorio se encuentra en seguimiento por coveralls.

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101321141.github.io/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101321141.github.io?branch=main)

(En la página me sale 80% pero en el readme me sale 68% 26/03/2022 14:08)
---

### Ejercicio 1. El combate definitivo.

Para la realización del ejercicio se ha diseñado la siguiente jerarquía de clases con los atributos y métodos:

![imagen1](img/imagen1.png)

La logica seguida para esta estructura de clases es la siguiente. 

1. La clase Figther tiene que ser la más alta dentro de la jerarquía dentro de los unviersos para tomar los atributos comunes para realizar peleas entre los personajes.
    * Dentro de esta clase abstracta se definen dos métodos:
      * UniverseDamage() que se encargará de calcular el daño que se realizan los personajes de un mismo universo, siguiendo sus reglas propias.
      * generalDamage() que se encargará de calcular el daño entre universos diferentes. Para ello tomamos la siguiente lógica, los universos de OnePiece y de Dragon Ball se encuentran en escalas de poder igualados (Por ello los ataques entre los personajes de ese universo siempre serán efectivos). Y su ataque será un 10 % más fuertes. Por otro lado Avatar se encuentra en una escala de poder promedia y por ello no recibe ninguna mejora en su ataque, y por ultimo el universo pokemon será el más debil de todos y su ataque será un 10% menos efectivo.
2. Las clases de cada universo. Estas clases que heredan de la clase abstracta se encargarán de recopilar la información particular de cada universo y controlar las reglas de lucha de personajes de su mismo universo.
    * El daño dentro del universo Pokemon se seguirán las reglas definidas en las prácticas anteriores.
    * El daño dentro del universo Avatar viene dado por los tipo de elementos que utiliza cada personaje y el arma que porta.
    * En daño dentro de la clase Dragon ball viene dado por la tecnica que utiliza cada personaje para luchar.
    * El unverso One Piece por su parte el daño se lo otorgan las furtas del diablo y el arma que porta
3. La clase Combate se encargará de pautar los turnos de cada personaje e ir calculando los daños realizados en cada turno.
4. Pokedex guardará la información de su propietario y los personajes que ha registrado en el.

Las pruebas implementadas en los universos son:

```typescript
describe("Pruebas de la clase Pokemon", () => {
    const pikachu = new Pokemon("Pokemon", "Pikachu", "Pika Pika CHUU", 45, 80, 50, "Electric", [430, 75, 60, 120]);
    const vaporeon = new Pokemon("Pokemon", "Vaporeon", "vapo vapo vaporeon", 130, 65, 60, "Water", [525, 110, 95, 65]);
    const dragonite = new Pokemon("Pokemon", "Dragonite", "Dragoonite", 91, 134, 95, "Fire", [600, 100, 100, 80]);
    const bellossom = new Pokemon("Pokemon", "Bellossom", "Bello Bello Bellossom", 75, 80, 95, "Grass", [490, 90, 100, 50]);
    it("Pruebas de la definición de la clase Pokemon", () => {
      expect(pikachu).not.to.be.null;
    });
    it("Getters del universo pokemon ", () => {
      expect(vaporeon.getNameUniverse()).to.eq("Pokemon");
      expect(pikachu.getNameCharacter()).to.eq("Pikachu");
      expect(dragonite.getCatchingPhrase()).to.eq("Dragoonite");
      expect(bellossom.getHP()).to.eq(75);
      expect(bellossom.getDM()).to.eq(80);
      expect(bellossom.getDefense()).to.eq(95);
      expect(bellossom.getType()).to.eq("Grass");
      expect(bellossom.getInfo()).to.eql([490, 90, 100, 50]);
    });
    it("Setter del universo Pokemon ", () => {
      bellossom.setHP(10);
      expect(bellossom.getHP()).to.eq(10);
      bellossom.setHP(75);
      bellossom.setHP(-10);
      expect(bellossom.getHP()).to.eq(0);
      bellossom.setHP(75);
      bellossom.setDefense(10);
      expect(bellossom.getDefense()).to.eq(10);
      bellossom.setDefense(80);
      bellossom.setDefense(-10);
      expect(bellossom.getDefense()).to.eq(0);
      bellossom.setDefense(80);
    });
  });

  describe("Pruebas de la clase Avatar", () => {
    const aang = new Avatar("Avatar", "Aang", "La venganza es como un arma de doble filo: mientras " +
      " ves caer a tu enemigo, te envenenas por dentro", 250, 150, 100, "Avatar", "Planeador", [12, "Nomadas del aire"]);
    const zuko = new Avatar("Avatar", "Zuko", "Yo solía pensar que esta cicatriz me marcaba. La marca " +
      "del príncipe desterrado, condenado a perseguir al Avatar para siempre.", 150, 100, 80, "Fire", "Espadas duales Dao", [18,
      "Nación del fuego"]);
    const katara = new Avatar("Avatar", "Katara", "No! Yo nunca ¡Jamás! le daré la espalda a alguien que me necesite.",
        100, 80, 40, "Water", "hielo", [14, "Tibu Agua del norte"]);
    const Toph = new Avatar("Avatar", "Toph Beifong", "No me importa cómo me veo. No busco la aprobación de nadie." +
      " Sé muy bien quien soy.", 150, 95, 100, "Land", "Cables Metal", [12, "Reino Tierra"]);


    it("Pruebas de la definición de la clase Avatar", () => {
      expect(aang).not.to.be.null;
    });
    it("Getters del universo Avatar ", () => {
      expect(zuko.getNameUniverse()).to.eq("Avatar");
      expect(katara.getNameCharacter()).to.eq("Katara");
      expect(Toph.getCatchingPhrase()).to.eq("No me importa cómo me veo. No busco la aprobación de nadie." +
      " Sé muy bien quien soy.");
      expect(Toph.getHP()).to.eq(150);
      expect(Toph.getDM()).to.eq(95);
      expect(Toph.getDefense()).to.eq(100);
      expect(Toph.getElement()).to.eq("Land");
      expect(Toph.getWeapon()).to.eq("Cables Metal");
      expect(Toph.getInfo()).to.eql([12, "Reino Tierra"]);
    });
    it("Setter del universo Avatar ", () => {
      Toph.setHP(10);
      expect(Toph.getHP()).to.eq(10);
      Toph.setHP(150);
      Toph.setDefense(10);
      expect(Toph.getDefense()).to.eq(10);
      Toph.setDefense(100);
      Toph.setWeapon("Espada");
      expect(Toph.getWeapon()).to.eq("Espada");
      Toph.setWeapon("Cables Metal");
    });
  });

  describe("Pruebas de la clase One Piece", () => {
    const luffy = new OnePiece("OnePiece", "Luffy", "En un duelo entre piratas… No existe tal cosa de jugar sucio",
        350, 400, 150, "Paramecia", "Gear 2", [19, "East Blue", "1.500.000.000 Belly"]);
    const akainu = new OnePiece("OnePiece", "Akainu", "¡¡El «mal» que representan los piratas debe ser erradicado!!",
        650, 1000, 300, "Logia", "", [55, "North Blue", "Almirante de flota"]);
    const Queen = new OnePiece("OnePiece", "Queen la Plaga", "¡Gracias por esperar! ¡Pedazos de basura!",
        400, 500, 250, "Zoan", "", [56, "Grand Line", "1.320.000.000 Belly"]);

    it("Pruebas de la definición de la clase OnePiece", () => {
      expect(luffy).not.to.be.null;
    });
    it("Getters del universo One Piece ", () => {
      expect(akainu.getNameUniverse()).to.eq("OnePiece");
      expect(Queen.getNameCharacter()).to.eq("Queen la Plaga");
      expect(Queen.getCatchingPhrase()).to.eq("¡Gracias por esperar! ¡Pedazos de basura!");
      expect(akainu.getHP()).to.eq(650);
      expect(akainu.getDM()).to.eq(1000);
      expect(akainu.getDefense()).to.eq(300);
      expect(akainu.getTypeDevilFruit()).to.eq("Logia");
      expect(akainu.getWeapon()).to.eq("");
      expect(luffy.getInfo()).to.eql([19, "East Blue", "1.500.000.000 Belly"]);
    });
    it("Setter del universo One Piece ", () => {
      luffy.setHP(10);
      expect(luffy.getHP()).to.eq(10);
      luffy.setHP(350);
      luffy.setDefense(10);
      expect(luffy.getDefense()).to.eq(10);
      luffy.setDefense(150);
      luffy.setWeapon("Espada");
      expect(luffy.getWeapon()).to.eq("Espada");
      luffy.setWeapon("Gear 2");
    });
  });

  describe("Pruebas de la clase DragonBall", () => {
    const goku = new DragonBall("DragonBall", "Goku", "kame kame ahhhhh!!!",
        400, 400, 450, "Vegeta", "Super Saiyan 2", [42, "Maestro Roshi"]);
    const vegeta = new DragonBall("DragonBall", "Vegeta", "maldito seas kakaroto",
        300, 350, 350, "Vegeta", "Super Saiyan 1", [42, "Exsoldado de Freezer"]);
    const krilin = new DragonBall("DragonBall", "Krilin", "Taiooookeeenn",
        200, 150, 150, "Tierra", "Kaioken", [43, "Maestro Roshi"]);

    it("Pruebas de la definición de la clase Dragon Ball", () => {
      expect(goku).not.to.be.null;
    });
    it("Getters del universo One Piece ", () => {
      expect(goku.getNameUniverse()).to.eq("DragonBall");
      expect(vegeta.getNameCharacter()).to.eq("Vegeta");
      expect(vegeta.getCatchingPhrase()).to.eq("maldito seas kakaroto");
      expect(vegeta.getHP()).to.eq(300);
      expect(vegeta.getDM()).to.eq(350);
      expect(vegeta.getDefense()).to.eq(350);
      expect(krilin.getPlanet()).to.eq("Tierra");
      expect(vegeta.getTechnics()).to.eq("Super Saiyan 1");
      expect(goku.getInfo()).to.eql([42, "Maestro Roshi"]);
    });
    it("Setter del universo Dragon Ball ", () => {
      goku.setHP(10);
      expect(goku.getHP()).to.eq(10);
      goku.setHP(400);
      goku.setDefense(10);
      expect(goku.getDefense()).to.eq(10);
      goku.setDefense(450);
      goku.setTechnics("Super Sayan Dios");
      expect(goku.getTechnics()).to.eq("Super Sayan Dios");
    });
  });
```

Con todas estas pruebas nos aseguramos el correcto funcionamiento de todos los universos. Por otro lado encontramos las diferentes implementaciones. (Todas ellas siguiendo las explicaciones anterior mente dichas).

* Figther

```typescript
export abstract class Fighter {

  constructor(private nameUniverse:string, private nameCharacter:string, private catchingPhrase:string,
    private HP:number, private DM:number, private defense:number) {
  }

  getNameUniverse() {
    return this.nameUniverse;
  }

  getNameCharacter() {
    return this.nameCharacter;
  }

  getCatchingPhrase() {
    return this.catchingPhrase;
  }

  getHP() {
    return this.HP;
  }

  getDM() {
    return this.DM;
  }

  getDefense() {
    return this.defense;
  }

  setHP(newHP:number) {
    if (newHP > 0) {
      this.HP = newHP;
    } else {
      this.HP = 0;
    }
  }

  setDefense(newDefense:number) {
    if (newDefense > 0) {
      this.defense = newDefense;
    } else {
      this.defense = 0;
    }
  }

  abstract universeDamage(fighter1:Fighter, fighter2:Fighter):number;

  generalDamage(fighter1: Fighter, fighter2: Fighter) {
    if (fighter1.getNameUniverse() == fighter2.getNameUniverse()) {
      return fighter1.universeDamage(fighter1, fighter2);
    } else {
      let dm:number = 0;
      if (fighter1.getNameUniverse() == "OnePiece" || fighter1.getNameUniverse() == "DragonBall") {
        dm = fighter1.DM * 1.10;
        if (dm > fighter2.defense) {
          return dm;
        } else {
          console.log(`El luchador ${fighter2.getNameCharacter()} ha esquibado el ataque.`);
          fighter2.setDefense(fighter2.getDefense() * 0.2);
          console.log(`Por ello se ha cansado y su defensa se ha reducido a ${fighter2.getDefense()}`);
          return 0;
        }
      } else if (fighter1.getNameUniverse() == "Avatar") {
        dm = fighter1.DM * 1;
        if (dm > fighter2.getDefense()) {
          return dm;
        } else {
          console.log(`El luchador ${fighter2.getNameCharacter()} ha esquibado el ataque.`);
          fighter2.setDefense(fighter2.getDefense() * 0.2);
          console.log(`Por ello se ha cansado y su defensa se ha reducido a ${fighter2.getDefense()}`);
          return 0;
        }
      } else {
        dm = fighter1.DM * 0.9;
        if (dm > fighter2.getDefense()) {
          return dm;
        } else {
          console.log(`El ${fighter2.getDefense()} ha esquibado el ataque.`);
          fighter2.setDefense(fighter2.getDefense() * 0.2);
          console.log(`Por ello se ha cansado y su defensa se ha reducido a ${fighter2.getDefense()}`);
          return 0;
        }
      }
    }
  }
}
```

La clase tiene sus getters y setters y por otro lado se ve la implementyación del daño entre los universos.

* Pokemon

```typescript
export class Pokemon extends Fighter {

  constructor(nameUniverse:string, nameCharacter:string, catchingPhrase:string,
      HP:number, DM:number, defense:number, private type:string,
      private info:[number, number, number, number]) {
    super(nameUniverse, nameCharacter, catchingPhrase, HP, DM, defense);
  }

  getInfo() {
    return this.info;
  }

  getType() {
    return this.type;
  }

  universeDamage(fighter1:Pokemon, fighter2:Pokemon): number {
    let maxDmg = 0;
    const fire: string = "Fire";
    const water: string = "Water";
    const grass: string = "Grass";
    const electric: string = "Electric";
    if (((fighter1.getType() == fire) && (fighter2.getType() == grass)) ||
      ((fighter1.getType() == water) && (fighter2.getType() == fire)) ||
      ((fighter1.getType() == electric) && (fighter2.getType() == water)) ||
      ((fighter1.getType() == grass) && (fighter2.getType() == water))) {
      maxDmg = fighter1.getDM() * 2;
    } else if ((fighter1.getType() == fire) && (fighter2.getType() == electric) ||
      (fighter1.getType() == grass) && (fighter2.getType() == electric)) {
      maxDmg = fighter1.getDM();
    } else if ((fighter1.getType() == grass) && (fighter2.getType() == fire) ||
      ((fighter1.getType() == fire) && (fighter2.getType() == water)) ||
      ((fighter1.getType() == water) && (fighter2.getType() == electric)) ||
      ((fighter1.getType() == water) && (fighter2.getType() == grass)) ||
      ((fighter1.getType() == fighter2.getType()))) {
      maxDmg = fighter1.getDM() * 0.5;
    }
    if (maxDmg > fighter2.getDefense()) {
      return maxDmg;
    } else {
      console.log(`El ${fighter2.getNameCharacter()} ha esquibado el ataque.`);
      fighter2.setDefense(fighter2.getDefense() * 0.2);
      console.log(`Por ello se ha cansado y su defensa se ha reducido a ${fighter2.getDefense()}`);
      return 0;
    }
  }
}
```

La clase pokemon sigue las misma implementacion de la anterior practica en cuanto al daño

* Dragon Ball

```typescript
export class DragonBall extends Fighter {

  constructor(nameUniverse: string, nameCharacter: string, catchingPhrase: string,
      HP: number, DM: number, defense: number, private planet: string,
      private Technics: string, private info: (string | number)[]) {
    super(nameUniverse, nameCharacter, catchingPhrase, HP, DM, defense);
  }

  getPlanet() {
    return this.planet;
  }

  getTechnics() {
    return this.Technics;
  }

  getInfo() {
    return this.info;
  }

  setTechnics(newTechnic:string) {
    this.Technics = newTechnic;
  }

  universeDamage(fighter1:DragonBall, fighter2:DragonBall): number {
    let maxDmg = 0;
    const superSayan1:string = "Super Saiyan 1";
    const superSayan2: string = "Super Saiyan 2";
    const superSayanDios:string = "Super Saiyan Dios";
    const kaioken:string = "kaioken";
    if (fighter1.getTechnics() == superSayanDios) {
      return fighter1.getDM() * 8;
    } else if (fighter1.getTechnics() == superSayan1 || fighter1.getTechnics() == superSayan2) {
      maxDmg = fighter1.getDM() * 1.4;
    } else if (fighter1.getTechnics() == kaioken) {
      maxDmg = fighter1.getDM() * 1.15;
    }
    if (maxDmg > fighter2.getDefense() ) {
      return maxDmg;
    } else {
      console.log(`El ${fighter2.getNameCharacter()} ha esquibado el ataque.`);
      fighter2.setDefense(fighter2.getDefense() * 0.2);
      console.log(`Por ello se ha cansado y su defensa se ha reducido a ${fighter2.getDefense()}`);
      return 0;
    }
  }
}
```
Las tecnicas implementadas dentro de la pelea son las básicas. utilizando una lógica similar a la de pokemon

* Avatar

```typescript
export class Avatar extends Fighter {

  constructor(nameUniverse: string, nameCharacter: string, catchingPhrase: string,
      HP: number, DM: number, defense: number, private element:string,
      private weapon:string, private info:(string|number)[]) {
    super(nameUniverse, nameCharacter, catchingPhrase, HP, DM, defense);
  }

  getElement() {
    return this.element;
  }

  getWeapon() {
    return this.weapon;
  }

  getInfo() {
    return this.info;
  }

  setWeapon(newWeapon:string) {
    this.weapon = newWeapon;
  }

  universeDamage(fighter1:Avatar, fighter2:Avatar):number {
    let maxDmg = 0;
    const fire: string = "Fire";
    const water: string = "Water";
    const air: string = "Air";
    const land: string = "Land";
    const avatar:string = "Avatar";

    if (fighter1.getElement() == avatar) {
      maxDmg = fighter1.getDM() * 2.5;
    } else if (((fighter1.getElement() == fire) && (fighter2.getElement() == air)) ||
      (((fighter1.getElement() == land) && (fighter2.getElement() == fire)) ||
      ((fighter1.getElement() == water) && (fighter2.getElement() == fire)))) {
      maxDmg = fighter1.getDM() * 2;
      if (fighter1.getWeapon().length != 0) maxDmg = fighter1.getDM() * 2 + (25 * fighter1.getDM() * 0.10);
    } else if ((fighter1.getElement() == air) && (fighter2.getElement() == land) ||
      (fighter1.getElement() == water) && (fighter2.getElement() == land)) {
      maxDmg = fighter1.getDM();
      if (fighter1.getWeapon().length != 0) maxDmg = fighter1.getDM() + (25 * fighter1.getDM() * 0.10);
    } else if (((fighter1.getElement() == air) && (fighter2.getElement() == fire)) ||
      (((fighter1.getElement() == fire) && (fighter2.getElement() == land)) ||
      ((fighter1.getElement() == fire) && (fighter2.getElement() == water))) ||
      ((fighter1.getElement() == fighter2.getElement()))) {
      maxDmg = fighter1.getDM() * 0.85;
      if (fighter1.getWeapon().length != 0) maxDmg = fighter1.getDM() * 0.85 + (25 * fighter1.getDM() * 0.10);
    } else {
      maxDmg = fighter1.getDM() * 0.5;
      if (fighter1.getWeapon().length != 0) maxDmg = fighter1.getDM() * 0.5 + (25 * fighter1.getDM() * 0.10);
    }
    if (maxDmg > fighter2.getDefense()) {
      return maxDmg;
    } else {
      console.log(`El ${fighter2.getNameCharacter()} ha esquibado el ataque.`);
      fighter2.setDefense(fighter2.getDefense() * 0.2);
      console.log(`Por ello se ha cansado y su defensa se ha reducido a ${fighter2.getDefense()}`);
      return 0;
    }
  }
}

```

En avatar se sigue la misma linea de los anteriores pero le aumenta el daño la utilización de armas.

* One Piece

```typescript
export class OnePiece extends Fighter {

  constructor(nameUniverse: string, nameCharacter: string, catchingPhrase: string,
      HP: number, DM: number, defense: number, private TypeDevilFruit: string,
      private weapon: string, private info: (string | number)[]) {
    super(nameUniverse, nameCharacter, catchingPhrase, HP, DM, defense);
  }

  getTypeDevilFruit() {
    return this.TypeDevilFruit;
  }

  getWeapon() {
    return this.weapon;
  }

  getInfo() {
    return this.info;
  }

  setWeapon(newWeapon:string) {
    this.weapon = newWeapon;
  }

  universeDamage(fighter1:OnePiece, fighter2:OnePiece): number {
    let maxDmg = 0;
    const paramecia: string = "Paramecia";
    const logia: string = "Logia";
    const zoan: string = "Zoan";
    if (fighter1.getTypeDevilFruit() == logia) {
      maxDmg = fighter1.getDM() * 1.20;
      if (fighter1.getWeapon().length != 0) maxDmg = fighter1.getDM() + (25 * fighter1.getDM() * 0.10);
    } else if (fighter1.getTypeDevilFruit() == paramecia) {
      maxDmg = fighter1.getDM() * 1;
      if (fighter1.getWeapon().length != 0) maxDmg = fighter1.getDM() + (25 * fighter1.getDM() * 0.10);
    } else if (fighter1.getTypeDevilFruit() == zoan) {
      maxDmg = fighter1.getDM() * 0.9;
      if (fighter1.getWeapon().length != 0) maxDmg = fighter1.getDM() + (25 * fighter1.getDM() * 0.10);
    } else {
      maxDmg = fighter1.getDM();
      if (fighter1.getWeapon().length != 0) maxDmg = fighter1.getDM() + (25 * fighter1.getDM() * 0.10);
    }
    if (maxDmg > fighter2.getDefense()) {
      return maxDmg;
    } else {
      console.log(`El ${fighter2.getNameCharacter()} ha esquibado el ataque.`);
      fighter2.setDefense(fighter2.getDefense() * 0.2);
      console.log(`Por ello se ha cansado y su defensa se ha reducido a ${fighter2.getDefense()}`);
      return 0;
    }
  }
}
```
Al igual que en en la clase avatar dentro de las armas y tecnicas dentro de este universo dan un aumento de daño.


Ahora La clase Combat sigue la misma lógica que la implementada en la práctica anterior pero utilizando el método de _generalDamage()_ para obtener los daños y estadísticas. Por otro lado otra modificación es el uso de la frase mítica.

```typescript
export class Combat {

  constructor(private Fighter1:Fighter, private Fighter2:Fighter ) {
  }

  getFighter1() {
    return this.Fighter1;
  }

  getFighter2() {
    return this.Fighter2;
  }

  setFighter1(newFighter:Fighter) {
    this.Fighter1 = newFighter;
  }

  setFighter2(newFighter:Fighter) {
    this.Fighter2 = newFighter;
  }

  start() {
    console.log(`Comienza el gran combate entre ${this.Fighter1.getNameCharacter()}` +
      ` y ${this.Fighter2.getNameCharacter()}`);
    let turno: number = 1;
    let dmg: number = 0;
    while (this.Fighter1.getHP() > 0 && this.Fighter2.getHP() > 0) {
      if (turno % 2 != 0) {
        console.log(`Turno: ${turno}`);
        console.log(`El luchador ${this.Fighter1.getNameCharacter()} realiza su ataque`);
        console.log(`${this.Fighter1.getCatchingPhrase()}`);
        dmg = this.Fighter1.generalDamage(this.Fighter1, this.Fighter2);
        this.Fighter2.setHP(this.Fighter2.getHP() - dmg);
        console.log(`El luchador ${this.Fighter2.getNameCharacter()} recibe ${dmg} de daño`);
        console.log(`Estado tras el turno el luchador ${this.Fighter1.getNameCharacter()} tiene ` +
          `${this.Fighter1.getHP()} de vida y el luchador  ${this.Fighter2.getNameCharacter()} tiene ` +
          `${this.Fighter2.getHP() } de vida`);
      } else {
        console.log(`Turno: ${turno}`);
        console.log(`El luchador ${this.Fighter2.getNameCharacter()} realiza su ataque`);
        console.log(`${this.Fighter2.getCatchingPhrase()}`);
        dmg = this.Fighter2.generalDamage(this.Fighter2, this.Fighter1);
        this.Fighter1.setHP(this.Fighter1.getHP() - dmg);
        console.log(`El luchador ${this.Fighter1.getNameCharacter()} recibe ${dmg} de daño`);
        console.log(`Estado tras el turno el luchador ${this.Fighter2.getNameCharacter()} tiene ` +
          `${this.Fighter2.getHP()} de vida y el luchador ${this.Fighter1.getNameCharacter()} tiene ` +
          `${this.Fighter1.getHP()} de vida`);
      }
      turno += 1;
    }
    if (this.Fighter1.getHP() != 0) {
      return `El ganador del combate es ${this.Fighter1.getNameCharacter()}`;
    } else {
      return `El ganador del combate es ${this.Fighter2.getNameCharacter()}`;
    }
  }
}
```

Por otro lado también tenemos la pokedex explicada anteriormente.

```typescript
export class Pokedex {

  constructor(private readonly nameOwner:string, private age:number, private FavUniverse:string,
    private Characters:Fighter[]) {
  }

  getNameOwner() {
    return this.nameOwner;
  }

  getAge() {
    return this.age;
  }

  getFavUniverse() {
    return this.FavUniverse;
  }

  getCharacters() {
    return this.Characters;
  }

  setNewCharacters(newCharacter:Fighter) {
    this.Characters.push(newCharacter);
  }
}
```

---

### Ejercicio 2. DSIflix

En el ejercicio 2 se nos propone crear una estructura de clases para crear un servicio de streaming en linea en el cual tendremos colecciones de Series, Peliculas y Documentales. Y para ello se nos da una serie de especificaciones. Para cumplimentarlas se desarrollo la siguiente estructura de interfaces y clases.

![imagen2](/img/imagen2.png)

De esta manera tenemos:

1. Interfaces donde:

   * StreamableSearch es la interfaz genérica para pautar los diferentes métodos para que una clase pueda ser buscada por diferentes parámetros.
   * StramableList es una interfaz genéricas para pautar los difrentes métodos y atributos para que una clase pueda implementar las listas de preferencias (Favoritos, Ver más tarde).

2. Clases StreamableCollection estas clases definen las diferentes colecciones que podemos llegar a tener dentro de nuestra página de streaming. Para implementarla acorde a los requerimientos se hizo:

  * BasicStreamableCollection: esta clase abstracta genérica implementa las dos interfaces creadas. En dicha clase genérica se implementa la interfaz de StreamableList ya que esta guardará los elementos genéricos. Mientras que las búsquedas se dejarán abstractas para que cada clase hija las implemente según sus características.

  * Las clases hijas son:

    * StremableCollectionSeries: La clase implementa los métodos de busqueda para la colección de series.

    * StremableCollectionMovies:La clase implementa los métodos de busqueda para la colección de películas.

    * StremableCollectionDocumentary:La clase implementa los métodos de busqueda para la colección de Documentales.

Antes de poder implementar toda esta estructura de colecciones se implementó la estructura de datos del contenido, ya que no puede existir una colección de series sin tener antes las series. Para ello, se creó la siguiente jerarquía:

![imagen3](/img/imagen3.png)

de esta manera la clase abstracta contenido pauta las características comunes que deben tener el contenido para que funcionen correctamente las búsquedas. Mientras que sus clases hijas añaden características propias de cada contenido.

Se decidió esta estructura para poder añadir en el futuro mayor tipo de contenido, y que escale apropiadamente el diseño.

Para conocer el funcionamiento de lo explicado anteriormente se realizaron las siguientes pruebas:

```typescript
describe("Pruebas del ejercicio 2.", () => {
  describe("Pruebas de la clase Series", () => {
    const blackList = new Series("BlackList", [25, 9, 2013], "Jon Bokenkamp", 43, 6.4, "Jovenes", ["Drama", "Crimen"], 9, "Raymond Reddington");
    it("Pruebas exitencia clase Series", () => {
      expect(blackList).not.be.null;
    });
    it("Pruebas Getters.", () => {
      expect(blackList.getName()).to.eq("BlackList");
      expect(blackList.getDatePublished()).to.eql([25, 9, 2013]);
      expect(blackList.getAutor()).to.eq("Jon Bokenkamp");
      expect(blackList.getDuration()).to.eq(43);
      expect(blackList.getRate()).to.eq(6.4);
      expect(blackList.getType()).to.eq("Jovenes");
      expect(blackList.getGenre()).to.eql(["Drama", "Crimen"]);
      expect(blackList.getSeasons()).to.eq(9);
      expect(blackList.getMainCharacter()).to.eq("Raymond Reddington");
    });
  });
  describe("Pruebas de la clase Coleccion de Series.", () => {
    const blackList = new Series("BlackList", [25, 9, 2013], "Jon Bokenkamp", 43, 6.4, "Jovenes", ["Drama", "Crimen"], 9, "Raymond Reddington");
    const bull = new Series("Bull", [13, 5, 2016], "Phil McGraw y Paul Attanasio", 43, 6.9, "Jovenes", ["Drama Judicial", "Abogados"], 6, "Jason Bull");
    const collectionSeries = new StreamableCollectionSeries(blackList);
    it("Pruebas de existencia", () => {
      expect(collectionSeries).not.be.null;
    });
    it("Pruebas de los add y getters", () => {
      collectionSeries.addCollection(bull);
      expect(collectionSeries.getCollection()).to.eql([blackList, bull]);
      collectionSeries.addFav(bull);
      expect(collectionSeries.getFavList()).to.eql([bull]);
      collectionSeries.addViewLater(blackList);
      expect(collectionSeries.getViewLater()).to.eql([blackList]);
    });
    it("Pruebas de los remove y getters", () => {
      collectionSeries.removeCollection(bull);
      expect(collectionSeries.getCollection()).to.eql([blackList]);
      collectionSeries.removeFav(bull);
      expect(collectionSeries.getFavList()).to.eql([]);
      collectionSeries.removeViewLater(blackList);
      expect(collectionSeries.getViewLater()).to.eql([]);
    });
    it("Pruebas Busquedas", () => {
      collectionSeries.addCollection(bull);
      expect(collectionSeries.searchByYear(2022)).to.eql([]);
      expect(collectionSeries.searchByYear(2013)).to.eql([blackList]);
      expect(collectionSeries.searchByDate([2, 12, 1996])).to.eql([]);
      expect(collectionSeries.searchByDate([13, 5, 2016])).to.eql([bull]);
      expect(collectionSeries.searchByType("Adultos")).to.eql([]);
      expect(collectionSeries.searchByType("Jovenes")).to.eql([blackList, bull]);
      expect(collectionSeries.searchByRate(10)).to.eql([]);
      expect(collectionSeries.searchByRate(6.9)).to.eql([bull]);
      expect(collectionSeries.searchByAutor("hola")).to.eql([]);
      expect(collectionSeries.searchByAutor("Jon Bokenkamp")).to.eql([blackList]);
      expect(collectionSeries.searchByGenre("lucha")).to.eql([]);
      expect(collectionSeries.searchByGenre("Crimen")).to.eql([blackList]);
    });
  });
  describe("Pruebas de la clase Peliculas", () => {
    const avatar = new Movies("Avatar", [18, 11, 2009], "James Cameron", 161, 7.2, "No recomendado a menores de 7 años",
        ["Ciencia ficción", "Acción", "Aventura"], "Jake Sully", "Estados Unidos");
    it("Pruebas exitencia clase Series", () => {
      expect(avatar).not.be.null;
    });
    it("Pruebas Getters.", () => {
      expect(avatar.getName()).to.eq("Avatar");
      expect(avatar.getDatePublished()).to.eql([18, 11, 2009]);
      expect(avatar.getAutor()).to.eq("James Cameron");
      expect(avatar.getDuration()).to.eq(161);
      expect(avatar.getRate()).to.eq(7.2);
      expect(avatar.getType()).to.eq("No recomendado a menores de 7 años");
      expect(avatar.getGenre()).to.eql(["Ciencia ficción", "Acción", "Aventura"]);
      expect(avatar.getMainCharacter()).to.eq("Jake Sully");
      expect(avatar.getCountry()).to.eq("Estados Unidos");
    });
  });
  describe("Pruebas de la clase Coleccion de Peliculas.", () => {
    const avatar = new Movies("Avatar", [18, 11, 2009], "James Cameron", 161, 7.2, "No recomendado menores 7 años",
        ["Ciencia ficción", "Acción", "Aventura"], "Jake Sully", "Estados Unidos");
    const interStellar = new Movies("Interstellar", [7, 11, 2014], "Christopher Nolan", 169, 7.9, "No recomendado menores 7 años",
        ["Ciencia ficción", "Drama", "Aventura", "Aventura Espacial"], "Joseph Cooper", "Estados Unidos");
    const collectionMovies = new StreamableCollectionMovies(avatar);
    it("Pruebas de existencia", () => {
      expect(collectionMovies).not.be.null;
    });
    it("Pruebas de los add y getters", () => {
      collectionMovies.addCollection(interStellar);
      expect(collectionMovies.getCollection()).to.eql([avatar, interStellar]);
      collectionMovies.addFav(interStellar);
      expect(collectionMovies.getFavList()).to.eql([interStellar]);
      collectionMovies.addViewLater(avatar);
      expect(collectionMovies.getViewLater()).to.eql([avatar]);
    });
    it("Pruebas de los remove y getters", () => {
      collectionMovies.removeCollection(avatar);
      expect(collectionMovies.getCollection()).to.eql([interStellar]);
      collectionMovies.removeFav(interStellar);
      expect(collectionMovies.getFavList()).to.eql([]);
      collectionMovies.removeViewLater(avatar);
      expect(collectionMovies.getViewLater()).to.eql([]);
    });
    it("Pruebas Busquedas", () => {
      collectionMovies.addCollection(avatar);
      expect(collectionMovies.searchByYear(2022)).to.eql([]);
      expect(collectionMovies.searchByYear(2014)).to.eql([interStellar]);
      expect(collectionMovies.searchByDate([2, 12, 1996])).to.eql([]);
      expect(collectionMovies.searchByDate([18, 11, 2009])).to.eql([avatar]);
      expect(collectionMovies.searchByType("Adultos")).to.eql([]);
      expect(collectionMovies.searchByType("No recomendado menores 7 años")).to.eql([interStellar, avatar]);
      expect(collectionMovies.searchByRate(10)).to.eql([]);
      expect(collectionMovies.searchByRate(7.9)).to.eql([interStellar]);
      expect(collectionMovies.searchByAutor("hola")).to.eql([]);
      expect(collectionMovies.searchByAutor("Christopher Nolan")).to.eql([interStellar]);
      expect(collectionMovies.searchByGenre("lucha")).to.eql([]);
      expect(collectionMovies.searchByGenre("Aventura Espacial")).to.eql([interStellar]);
    });
  });
  describe("Pruebas de la clase Documental", () => {
    const cosmos = new Documentary("Cosmos: Un viaje Personal", [28, 9, 1980], "Carl Sagan", 60, 8.8, "Todos los publicos",
        ["Divulgación científica", "Naturaleza"], "Estados Unidos", "Public Broadcasting Service");
    it("Pruebas exitencia clase Series", () => {
      expect(cosmos).not.be.null;
    });
    it("Pruebas Getters.", () => {
      expect(cosmos.getName()).to.eq("Cosmos: Un viaje Personal");
      expect(cosmos.getDatePublished()).to.eql([28, 9, 1980]);
      expect(cosmos.getAutor()).to.eq("Carl Sagan");
      expect(cosmos.getDuration()).to.eq(60);
      expect(cosmos.getRate()).to.eq(8.8);
      expect(cosmos.getType()).to.eq("Todos los publicos");
      expect(cosmos.getGenre()).to.eql(["Divulgación científica", "Naturaleza"]);
      expect(cosmos.getCountry()).to.eq("Estados Unidos");
      expect(cosmos.getChanel()).to.eq("Public Broadcasting Service");
    });
  });
  describe("Pruebas de la clase Coleccion de Documental.", () => {
    const cosmos = new Documentary("Cosmos: Un viaje Personal", [28, 9, 1980], "Carl Sagan", 60, 8.8, "Todos los publicos",
        ["Divulgación científica", "Naturaleza"], "Estados Unidos", "Public Broadcasting Service");
    const ingenieriaRomana = new Documentary("Ingeniería Romana", [24, 10, 2015], "Jose Antonio Muñiz", 55, 8.7, "Todos los publicos",
        ["Historia", "Antigua Roma", "Arquitectura"], "España", "RTVE");
    const collectionDocumentary = new StreamableCollectionDocumentary(cosmos);
    it("Pruebas de existencia", () => {
      expect(collectionDocumentary).not.be.null;
    });
    it("Pruebas de los add y getters", () => {
      collectionDocumentary.addCollection(ingenieriaRomana);
      expect(collectionDocumentary.getCollection()).to.eql([cosmos, ingenieriaRomana]);
      collectionDocumentary.addFav(cosmos);
      expect(collectionDocumentary.getFavList()).to.eql([cosmos]);
      collectionDocumentary.addViewLater(ingenieriaRomana);
      expect(collectionDocumentary.getViewLater()).to.eql([ingenieriaRomana]);
    });
    it("Pruebas de los remove y getters", () => {
      collectionDocumentary.removeCollection(cosmos);
      expect(collectionDocumentary.getCollection()).to.eql([ingenieriaRomana]);
      collectionDocumentary.removeFav(ingenieriaRomana);
      expect(collectionDocumentary.getFavList()).to.eql([cosmos]);
      collectionDocumentary.removeViewLater(cosmos);
      expect(collectionDocumentary.getViewLater()).to.eql([ingenieriaRomana]);
    });
    it("Pruebas Busquedas", () => {
      collectionDocumentary.addCollection(cosmos);
      expect(collectionDocumentary.searchByYear(2022)).to.eql([]);
      expect(collectionDocumentary.searchByYear(1980)).to.eql([cosmos]);
      expect(collectionDocumentary.searchByDate([2, 12, 1996])).to.eql([]);
      expect(collectionDocumentary.searchByDate([24, 10, 2015])).to.eql([ingenieriaRomana]);
      expect(collectionDocumentary.searchByType("Adultos")).to.eql([]);
      expect(collectionDocumentary.searchByType("Todos los publicos")).to.eql([ingenieriaRomana, cosmos]);
      expect(collectionDocumentary.searchByRate(10)).to.eql([]);
      expect(collectionDocumentary.searchByRate(8.8)).to.eql([cosmos]);
      expect(collectionDocumentary.searchByAutor("hola")).to.eql([]);
      expect(collectionDocumentary.searchByAutor("Jose Antonio Muñiz")).to.eql([ingenieriaRomana]);
      expect(collectionDocumentary.searchByGenre("lucha")).to.eql([]);
      expect(collectionDocumentary.searchByGenre("Arquitectura")).to.eql([ingenieriaRomana]);
    });
  });
});
```
En dichas pruebas se comprobó al 100% todos los métodos tanto de las interfaces como de las diferentes clases.

Con lo que respecta las clases se explicará la implementación de las Series, ya que el resto de clases siguien la misma lógica, pero con sus atributos propios y poner todo sería redundante.

Para ello primero se explicará la clase abgracta y después la hija:

```typescript
export abstract class Content {
  private year:number;
  constructor(private name:string, private datePublished:[number, number, number], private autor:string,
      private duration:number, private rate:number, private type:string, private genre:string[]) {
    this.year = datePublished[2];
  }
  getName() {
    return this.name;
  }
  getDatePublished() {
    return this.datePublished;
  }
  getAutor() {
    return this.autor;
  }
  getDuration() {
    return this.duration;
  }
  getRate() {
    return this.rate;
  }
  getType() {
    return this.type;
  }
  getGenre() {
    return this.genre;
  }
  getYear() {
    return this.year;
  }
}
```

Siendo la clase abstracta content quien define getters de los elementos comunes.

```typescript
export class Series extends Content {
  constructor(name: string, datePublished: [number, number, number], autor: string,
      duration: number, rate: number, type: string, genre:string[], private seasons:number,
      private mainCharacter:string) {
    super(name, datePublished, autor, duration, rate, type, genre);
  }
  getMainCharacter() {
    return this.mainCharacter;
  }
  getSeasons() {
    return this.seasons;
  }
}
```

Mientras que la propia clase series añade unicamente sus atributos propios.

Por otro lado nos encontramos la clase basicStreamableCollection, que implementa lo siguiente:

```typescript
export abstract class BasicStreamableCollection<T> implements StreamableList<T>, StreamableSearch<T> {
  private collection:T[];
  favList: T[];
  viewLater: T[];
  constructor(content:T) {
    this.collection = [];
    this.collection.push(content);
    this.favList = [];
    this.viewLater = [];
  }
  getCollection() {
    return this.collection;
  }
  getFavList(): T[] {
    return this.favList;
  }
  getViewLater(): T[] {
    return this.viewLater;
  }

  abstract searchByYear(year: number): T[];
  abstract searchByDate(date: [number, number, number]): T[];
  abstract searchByType(type: string): T[];
  abstract searchByRate(rate: number): T[];
  abstract searchByAutor(autor: string): T[];
  abstract searchByGenre(Genre: string): T[];

  addFav(newElement: T): string {
    this.favList.push(newElement);
    return "Añadido a la lista de favoritos";
  }

  addViewLater(newElement: T): string {
    this.viewLater.push(newElement);
    return "Añadido a la lista de ver más tarde";
  }

  removeFav(element: T): string {
    let aux: T[] = [];
    this.favList.forEach((content) => {
      if (element != content) aux.push(content);
    });
    this.favList = aux;
    return "Elemento eliminado de favoritos";
  }

  removeViewLater(element: T): string {
    let aux: T[] = [];
    this.viewLater.forEach((content) => {
      if (element != content) aux.push(content);
    });
    this.viewLater = aux;
    return "Elemento eliminado de favoritos";
  }

  addCollection(element:T):string {
    this.collection.push(element);
    return "Elemento añadido a la colección";
  }

  removeCollection(element:T):string {
    let aux:T[] = [];
    this.collection.forEach((content) => {
      if (element != content) aux.push(content);
    });
    this.collection = aux;
    return "ELemento eliminado de la colección";
  }
}
```

Para añadir elementos realizamos un push a los vectores genéricos, mientras que para eliminar buscamos el elemento del vector y en caso de encontrarlo lo eliminamos.

```typescript
export class StreamableCollectionSeries extends BasicStreamableCollection<Series> {
  constructor(newSerie:Series) {
    super(newSerie);
  }
  searchByYear(year: number): Series[] {
    let aux:Series[] = [];
    aux = this.getCollection().filter(function(element) {
      return element.getYear() == year;
    });
    return aux;
  }
  searchByDate(date: [number, number, number]): Series[] {
    let aux: Series[] = [];
    aux = this.getCollection().filter(function(element) {
      let i = 0;
      while (i < 3 && date[i] == element.getDatePublished()[i]) {
        i = i + 1;
      }
      if (i == 3) return element;
    });
    return aux;
  }
  searchByType(type: string): Series[] {
    let aux: Series[] = [];
    aux = this.getCollection().filter(function(element) {
      return element.getType() == type;
    });
    return aux;
  }
  searchByRate(rate: number): Series[] {
    let aux: Series[] = [];
    aux = this.getCollection().filter(function(element) {
      return element.getRate() == rate;
    });
    return aux;
  }
  searchByAutor(autor: string): Series[] {
    let aux: Series[] = [];
    aux = this.getCollection().filter(function(element) {
      return element.getAutor() == autor;
    });
    return aux;
  }
  searchByGenre(genre: string): Series[] {
    let aux: Series[] = [];
    aux = this.getCollection().filter(function(element) {
      let counter = 0;
      element.getGenre().forEach((aux1) => {
        if (aux1 == genre) return counter += 1;;
      });
      if (counter > 0) return element;
    });
    return aux;
  }
```
Donde para buscar recorremos en el vector de colección y buscamos por el atributo dado, de esta manera simulamos al usario buscando en una barra de búsqueda. Ya que dicha persona nunca te va a poner la propia pelicula para buscarla (porque para que buscarla si ya la tienes).

Como se expico anteriormente, la logica seguida en el resto es similar.

---

### Ejercicio 3. El cifrado indescifrable.

Se nos pide implementar una clase cifrado que realice el cifrado cesar con multiples desplazamiento teniendo en cuenta la posicion de caracter de la clave en el alfabeto para realizar el desplazamiento.

Esta implementación debería ser con alfabetos, textos y claves de tamaño variable. Para ello realizamos las siguientes pruebas:

```typescript
describe("Pruebas de clase Cifrado.", () => {
  describe("Pruebas de la clase Cifrado", () => {
    const cifrado1 = new Cifrado("abcdef", "cef", "abba");
    it("Pruebas de la definición de la clase Pokemon", () => {
      expect(cifrado1).not.to.be.null;
    });
    it("Getters de la clase cifrado ", () => {
      expect(cifrado1.getAlphabet()).to.eq("abcdef");
      expect(cifrado1.getKey()).to.eq("cef");
      expect(cifrado1.getText()).to.eq("abba");
    });
    it("setters de la clase cifrado", () => {
      cifrado1.setAlphabet("aa");
      expect(cifrado1.getAlphabet()).to.eq("aa");
      cifrado1.setKey("bb");
      expect(cifrado1.getKey()).to.eq("bb");
      cifrado1.setText("tt");
      expect(cifrado1.getText()).to.eq("tt");
    });
    it("Pruebas de la codificación con difrentes alfabetos, claves y textos", () => {
      cifrado1.setAlphabet("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
      cifrado1.setKey("CLA");
      cifrado1.setText("HOLA");
      expect(cifrado1.coding()).to.eq("KAMD");
      cifrado1.setAlphabet("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
      cifrado1.setKey("CLA");
      cifrado1.setText("HOLA1");
      expect(cifrado1.coding()).to.eq("KAMD1");
      cifrado1.setAlphabet("ABCDEFGUVWXYZ");
      cifrado1.setKey("CWA");
      cifrado1.setText("AYZAG");
      expect(cifrado1.coding()).to.eq("DVADD");
    });
    it("Pruebas de la Decodificación con difrentes alfabetos, claves y textos", () => {
      cifrado1.setAlphabet("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
      cifrado1.setKey("CLA");
      cifrado1.setText("KAMD");
      expect(cifrado1.decoding()).to.eq("HOLA");
      cifrado1.setAlphabet("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
      cifrado1.setKey("CLA");
      cifrado1.setText("KAMD1");
      expect(cifrado1.decoding()).to.eq("HOLA1");
      cifrado1.setAlphabet("ABCDEFGUVWXYZ");
      cifrado1.setKey("CWA");
      cifrado1.setText("DVADD");
      expect(cifrado1.decoding()).to.eq("AYZAG");
    });
  });
});
```

Y la implementación de la clase fue:

```typescript
export class Cifrado {
  private alphabet:string[];
  private key:string[];
  private text:string[];

  constructor(alphabet:string, key:string, text:string) {
    this.alphabet = this.stringToVector(alphabet);
    this.key = this.stringToVector(key);
    this.text = this.stringToVector(text);
  }

  getAlphabet() {
    return this.alphabet.toString().replace(/,/g, "");
  }

  getKey() {
    return this.key.toString().replace(/,/g, "");
  }

  getText() {
    return this.text.toString().replace(/,/g, "");
  }

  setAlphabet(newAlphabet:string) {
    this.alphabet = this.stringToVector(newAlphabet);
  }

  setKey(newKey: string) {
    this.key = this.stringToVector(newKey);
  }

  setText(newText: string) {
    this.text = this.stringToVector(newText);
  }

  coding() {
    let codingMSG:string = "";
    for (let i = 0; i < this.text.length; i++) {
      const letterOrig = this.text[i];
      const positionLetterO = this.alphabet.indexOf(letterOrig);
      const letterKey = this.key[i % this.key.length];
      const postionKey = this.alphabet.indexOf(letterKey);
      if (positionLetterO == -1 || postionKey == -1) {
        codingMSG += letterOrig;
      } else {
        codingMSG += this.alphabet[(positionLetterO + (postionKey + 1)) % this.alphabet.length];
      }
    }
    return codingMSG;
  }

  decoding() {
    let DecodingMSG: string = "";
    for (let i = 0; i < this.text.length; i++) {
      const letterCoding = this.text[i];
      const positionLetterO = this.alphabet.indexOf(letterCoding);
      const letterKey = this.key[i % this.key.length];
      const postionKey = this.alphabet.indexOf(letterKey);
      if (positionLetterO == -1 || postionKey == -1) {
        DecodingMSG += letterCoding;
      } else {
        let postionBefore:number = (positionLetterO - (postionKey + 1)) % this.alphabet.length;
        if (postionBefore < 0) postionBefore = postionBefore + this.alphabet.length;
        DecodingMSG += this.alphabet[postionBefore];
      }
    }
    return DecodingMSG;
  }

  private stringToVector(myString:string) {
    let aux:string[] = [];
    for (let i = 0; i < myString.length; i++) {
      const letter = myString.charAt(i);
      aux.push(letter);
    }
    return aux;
  }
}
```

Se decidió implementar operando con vectores en vez de strings ya que es una estructura de datos más flexible y versatil. Y lo unico remarcable mencionar es que utilizamos el modulo del tamaño del alfabeto para evitar el desbordamiento y en el caso del descifrado restamos la posicion de la clave que se nos da al valor de la posicion actual del caracter del texto cifrado para obtener la correcta posición el caracter. y en caso que sea negativo el valor le sumamos el tamaño del alfabeto para conseguir la posición correcta. 
