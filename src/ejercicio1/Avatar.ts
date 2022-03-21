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
}
