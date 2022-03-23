import {Fighter} from "../ejercicio1/fighter";

/**
* Clase Dragon Ball
 */
export class DragonBall extends Fighter {
  /**
   * Constructor de la clase
   * @param nameUniverse nombre del universo
   * @param nameCharacter nombre del personaje
   * @param catchingPhrase frase mítica
   * @param HP puntos de vida
   * @param DM puntos de daño
   * @param defense puntos de defensa
   * @param planet planeta del que viene
   * @param Technics tecnica que esta utilizando
   * @param info info adicional de los personajes
   */
  constructor(nameUniverse: string, nameCharacter: string, catchingPhrase: string,
      HP: number, DM: number, defense: number, private planet: string,
      private Technics: string, private info: (string | number)[]) {
    super(nameUniverse, nameCharacter, catchingPhrase, HP, DM, defense);
  }

  /**
   * getter
   * @returns Planeta
   */
  getPlanet() {
    return this.planet;
  }

  /**
   * getter
   * @returns Tecnica
   */
  getTechnics() {
    return this.Technics;
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
   * @param newTechnic nueva tecnica a utilizar
   */
  setTechnics(newTechnic:string) {
    this.Technics = newTechnic;
  }

  /**
   * Peleas entre el universo dragon ball.
   * @param fighter1 luchador 1
   * @param fighter2 luchador 2
   * @returns daño hecho
   */
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
