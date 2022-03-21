import {Fighter} from "../ejercicio1/fighter";

/**
 * Clase pokemon
 * Hereda de la clase abstracta luchador.
 */
export class Pokemon extends Fighter {
  /**
   * 
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
}
