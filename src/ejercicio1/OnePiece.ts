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

  /**
   * Peleas entre el universo one piece
   * @param fighter1 luchador 1
   * @param fighter2 luchador 2
   * @returns daño
   */
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
