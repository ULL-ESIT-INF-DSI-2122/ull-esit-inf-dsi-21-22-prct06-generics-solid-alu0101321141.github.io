import {Fighter} from "../ejercicio1/fighter";

/**
 * Clase pokemon
 */
export class Avatar extends Fighter {
  /**
   * Constructor de la clase avatar.
   * @param nameUniverse nombre del universo que pertenece el personaje.
   * @param nameCharacter nombre personaje.
   * @param catchingPhrase frase mítica del personaje.
   * @param HP vida del personaje.
   * @param DM daño que realiza el personaje.
   * @param defense defensa del personaje.
   * @param element Elemento del que es maestro.
   * @param weapon Arma que tiene el personaje.
   */
  constructor(nameUniverse: string, nameCharacter: string, catchingPhrase: string,
      HP: number, DM: number, defense: number, private element:string,
      private weapon:string, private info:(string|number)[]) {
    super(nameUniverse, nameCharacter, catchingPhrase, HP, DM, defense);
  }

  /**
   * getter
   * @returns elemento del que es maestro
   */
  getElement() {
    return this.element;
  }

  /**
   * getter
   * @returns arma que utiliza
   */
  getWeapon() {
    return this.weapon;
  }

  /**
   * getter
   * @returns Información adicional
   */
  getInfo() {
    return this.info;
  }

  /**
   * Setter
   * @param newWeapon Nueva arma
   */
  setWeapon(newWeapon:string) {
    this.weapon = newWeapon;
  }

  universeDamage(fighter1:Avatar, fighter2:Avatar):number {
    let maxDmg = 0;
    const fire: string = "Fire";
    const water: string = "Water";
    const air: string = "Air";
    const land: string = "Grass";
    const avatar:string = "Avatar";

    if (fighter1.getElement() == avatar) {
      maxDmg = fighter1.getDM() * 2.5;
    } else if (((fighter1.getElement() == fire) && (fighter2.getElement() == air)) ||
      (((fighter1.getElement() == land) && (fighter2.getElement() == fire)) ||
      ((fighter1.getElement() == water) && (fighter2.getElement() == fire)))) {
      maxDmg = fighter1.getDM() * 2;
    } else if ((fighter1.getElement() == air) && (fighter2.getElement() == land) ||
      (fighter1.getElement() == water) && (fighter2.getElement() == land)) {
      maxDmg = fighter1.getDM();
    } else if (((fighter1.getElement() == air) && (fighter2.getElement() == fire)) ||
      (((fighter1.getElement() == fire) && (fighter2.getElement() == land)) ||
      ((fighter1.getElement() == fire) && (fighter2.getElement() == water))) ||
      ((fighter1.getElement() == fighter2.getElement()))) {
      maxDmg = fighter1.getDM() * 0.85;
    } else {
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
