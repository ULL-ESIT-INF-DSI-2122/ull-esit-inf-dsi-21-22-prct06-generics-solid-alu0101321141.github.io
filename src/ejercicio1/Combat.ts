import {Fighter} from "../ejercicio1/fighter";

/**
 * Clase combate
 */
export class Combat {
  /**
   * Constructor de la clase
   * @param Fighter1 primer luchador
   * @param Fighter2 segundo luchador
   */
  constructor(private Fighter1:Fighter, private Fighter2:Fighter ) {
  }

  /**
   * getter
   * @returns Luchador 1
   */
  getFighter1() {
    return this.Fighter1;
  }

  /**
   * getter
   * @returns Luchador 2
   */
  getFighter2() {
    return this.Fighter2;
  }

  /**
   * setter
   * @param newFighter nuevo contrincante 1
   */
  setFighter1(newFighter:Fighter) {
    this.Fighter1 = newFighter;
  }

  /**
   * setter
   * @param newFighter nuevo contrincante 2
   */
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
