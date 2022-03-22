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
}
