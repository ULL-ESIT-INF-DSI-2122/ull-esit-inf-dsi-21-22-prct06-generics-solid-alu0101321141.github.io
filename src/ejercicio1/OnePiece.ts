import {Fighter} from "../ejercicio1/fighter";

/**
 * Clase One Piece
 */
export class OnePiece extends Fighter {
  /**
   * Constructor de la clase One Piece
   * @param nameUniverse nombre del universo que pertenece el personaje.
   * @param nameCharacter nombre personaje.
   * @param catchingPhrase frase mítica del personaje.
   * @param HP vida del personaje
   * @param DM daño que reaiza el personaje
   * @param defense defensa del personaje.
   * @param TypeDevilFruit tipo de fruta del personaje
   * @param weapon Arma que tiene el personaje
   * @param info información adicional del personaje
   */
  constructor(nameUniverse: string, nameCharacter: string, catchingPhrase: string,
      HP: number, DM: number, defense: number, private TypeDevilFruit: string,
      private weapon: string, private info: (string | number)[]) {
    super(nameUniverse, nameCharacter, catchingPhrase, HP, DM, defense);
  }

  /**
   * getter
   * @returns Tipo de fruta del diablo
   */
  getTypeDevilFruit() {
    return this.TypeDevilFruit;
  }

  /**
   * getter
   * @returns arma
   */
  getWeapon() {
    return this.weapon;
  }

  /**
   * getter
   * @returns informacion adicional
   */
  getInfo() {
    return this.info;
  }

  /**
   * setter
   * @param newWeapon Nueva arma
   */
  setWeapon(newWeapon:string) {
    this.weapon = newWeapon;
  }
}
