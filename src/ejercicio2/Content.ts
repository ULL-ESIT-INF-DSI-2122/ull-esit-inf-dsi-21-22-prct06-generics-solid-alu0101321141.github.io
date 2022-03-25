/**
 * Clase abstracta contenido
 */
export abstract class Content {
  private year:number;
  /**
   * Constructor Clase
   * @param name Nombre
   * @param datePublished fecha publicacion
   * @param autor autor de la obra
   * @param duration duracion
   * @param rate calificación [day, month, year]: number, number, number
   * @param type tipo
   * @param genre genero de la obra
   */
  constructor(private name:string, private datePublished:[number, number, number], private autor:string,
      private duration:number, private rate:number, private type:string, private genre:string[]) {
    this.year = datePublished[2];
  }
  /**
   * getter
   * @returns nombre
   */
  getName() {
    return this.name;
  }
  /**
   * getter
   * @returns fecha publicacion
   */
  getDatePublished() {
    return this.datePublished;
  }
  /**
   * getter
   * @returns autor
   */
  getAutor() {
    return this.autor;
  }
  /**
   * getter
   * @returns duracion
   */
  getDuration() {
    return this.duration;
  }
  /**
   * getter
   * @returns puntuacion
   */
  getRate() {
    return this.rate;
  }
  /**
   * getter
   * @returns tipo
   */
  getType() {
    return this.type;
  }
  /**
   * getter
   * @returns genero
   */
  getGenre() {
    return this.genre;
  }
  /**
   * getter
   * @returns año
   */
  getYear() {
    return this.year;
  }
}

