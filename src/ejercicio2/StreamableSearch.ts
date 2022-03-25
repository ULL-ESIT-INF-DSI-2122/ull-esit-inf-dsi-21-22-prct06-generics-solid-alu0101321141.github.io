/**
 * Interfaz StreamableSearch
 */
export interface StreamableSearch<T> {
  /**
   * Buscar el contenido por el año
   * @param year Año
   */
  searchByYear(year:number):T[];
  /**
   * Buscar el contenido por fecha
   * @param date Fecha completa dividida con day-month-year
   */
  searchByDate(date:[number, number, number]):T[];
  /**
   * Buscar por tipo de contenido
   * @param type tipo (series, Peliculas, documentales)
   */
  searchByType(type:string):T[];
  /**
   * Buscar por valoración.
   * @param rate Nota de valoración
   */
  searchByRate(rate:number):T[];
  /**
   * Buscar por el autor.
   * @param autor Autor
   */
  searchByAutor(autor:string):T[];
  /**
   * Buscar por el genero.
   * @param Genre gereno
   */
  searchByGenre(genre:string):T[];
}
