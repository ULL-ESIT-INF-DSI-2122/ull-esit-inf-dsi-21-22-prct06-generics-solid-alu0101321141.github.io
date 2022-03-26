import {Content} from "../ejercicio2/Content";

/**
 * clase serie
 */
export class Series extends Content {
  /**
   * Copnstructor de la clase
   * @param name Nombre
   * @param datePublished fecha publicacion
   * @param autor autor de la obra
   * @param duration duracion
   * @param rate calificación
   * @param type tipo
   * @param genre genero de la obra
   * @param mainCharacter personaje principal
   */
  constructor(name: string, datePublished: [number, number, number], autor: string,
      duration: number, rate: number, type: string, genre:string[], private seasons:number,
      private mainCharacter:string) {
    super(name, datePublished, autor, duration, rate, type, genre);
  }
  /**
   * getter
   * @returns personaje principal
   */
  getMainCharacter() {
    return this.mainCharacter;
  }
  /**
   * getter
   * @returns temporadas
   */
  getSeasons() {
    return this.seasons;
  }
}
