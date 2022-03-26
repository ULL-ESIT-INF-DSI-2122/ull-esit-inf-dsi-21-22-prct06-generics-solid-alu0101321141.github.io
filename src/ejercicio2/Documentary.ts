import {Content} from "../ejercicio2/Content";

export class Documentary extends Content {
  /**
   * Copnstructor de la clase
   * @param name Nombre
   * @param datePublished fecha publicacion
   * @param autor autor de la obra
   * @param duration duracion
   * @param rate calificación
   * @param type tipo
   * @param genre genero de la obra
   * @param country país de origen.
   */
  constructor(name: string, datePublished: [number, number, number], autor: string,
      duration: number, rate: number, type: string, genre: string[], private country:string, private chanel:string) {
    super(name, datePublished, autor, duration, rate, type, genre);
  }
  /**
   * getter
   * @returns Pais
   */
  getCountry() {
    return this.country;
  }

  /**
   * getter
   * @returns canal
   */
  getChanel() {
    return this.chanel;
  }
}
