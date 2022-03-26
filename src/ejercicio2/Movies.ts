import {Content} from "../ejercicio2/Content";

/**
 * Clase pelicula
 */
export class Movies extends Content {
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
   * @param country país de origen.
   */
  constructor(name: string, datePublished: [number, number, number], autor: string,
      duration: number, rate: number, type: string, genre: string[], private mainCharacter: string,
      private country:string) {
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
   * @returns Pais
   */
  getCountry() {
    return this.country;
  }
}
