import {Fighter} from "../ejercicio1/fighter";

/**
 * Clase pokemon
 * Hereda de la clase abstracta luchador.
 */
export class Pokemon extends Fighter {
  /**
   * Constructor de la clase
   * @param nameUniverse Nombre del universo Pokemon
   * @param nameCharacter Nombre del Personaje
   * @param catchingPhrase Fase mítica del personaje
   * @param HP Puntos de vida del pokemon
   * @param DM Daño del pokemon
   * @param defense Defensa del pokemon
   * @param type Tipo del pokemon
   * @param info Info adicional de las estdísticas del pokemon.
   */
  constructor(nameUniverse:string, nameCharacter:string, catchingPhrase:string,
      HP:number, DM:number, defense:number, private type:string,
      private info:[number, number, number, number]) {
    super(nameUniverse, nameCharacter, catchingPhrase, HP, DM, defense);
  }

  /**
   * getter
   * @returns info adicional
   */
  getInfo() {
    return this.info;
  }

  /**
   * getter
   * @returns tipo
   */
  getType() {
    return this.type;
  }

  /**
   * Peleas entre  Pokemon
   * @param fighter1 Luchador 1
   * @param fighter2 Luchador 2
   * @returns Daño hecho
   */
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
