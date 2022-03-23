
export abstract class Fighter {
  /**
   * Contructor de la clase abstracta Fighter
   * @param nameUniverse Nombre del universo al que petenece el personaje
   * @param nameCharacter Nombre del personaje
   * @param catchingPhrase Frase representativa
   * @param HP Vida que tiene el personaje
   * @param DM Daño que infringe el personaje
   * @param defense Defensa que tiene el personaje
   */
  constructor(private nameUniverse:string, private nameCharacter:string, private catchingPhrase:string,
    private HP:number, private DM:number, private defense:number) {
  }

  /**
   * getter
   * @returns Nombre universo
   */
  getNameUniverse() {
    return this.nameUniverse;
  }

  /**
   * getter
   * @returns Nombre personaje
   */
  getNameCharacter() {
    return this.nameCharacter;
  }

  /**
   * getter
   * @returns frase característica
   */
  getCatchingPhrase() {
    return this.catchingPhrase;
  }

  /**
   * getter
   * @returns vida del personaje
   */
  getHP() {
    return this.HP;
  }

  /**
   * getter
   * @returns daño personaje
   */
  getDM() {
    return this.DM;
  }

  /**
   * getter
   * @returns defensa personaje
   */
  getDefense() {
    return this.defense;
  }

  /**
   * setter
   * @param newHP nueva vida
   */
  setHP(newHP:number) {
    if (newHP > 0) {
      this.HP = newHP;
    } else {
      this.HP = 0;
    }
  }

  /**
   * setter
   * @param newDefense nueva defensa
   */
  setDefense(newDefense:number) {
    if (newDefense > 0) {
      this.defense = newDefense;
    } else {
      this.defense = 0;
    }
  }

  /**
   * Se encarga de calcular el daño que se realizan
   * oponenetes de un mismo universo.
   * @param fighter1 Luchador 1.
   * @param fighter2 Lchador 2.
   * @return daño recibido
   */
  abstract universeDamage(fighter1:Fighter, fighter2:Fighter):number;

  /**
   * Se encarga de Calclar el daño que se realizan oponentes
   * de universos distintos
   * @param fighter1 Luchador 1.
   * @param fighter2 Luchador 2.
   * @returns Daño realizado.
   */
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
