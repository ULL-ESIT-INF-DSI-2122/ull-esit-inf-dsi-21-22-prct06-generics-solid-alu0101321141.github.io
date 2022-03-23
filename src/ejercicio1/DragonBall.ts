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
}
