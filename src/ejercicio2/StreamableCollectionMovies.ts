import {BasicStreamableCollection} from "../ejercicio2/BasicStreamableCollection";
import {Movies} from "../ejercicio2/Movies";

/**
 * Clase streamableCollectioMovies
 */
export class StreamableCollectionMovies extends BasicStreamableCollection<Movies> {
  constructor(newSerie:Movies) {
    super(newSerie);
  }
  /**
   * Buscar por año
   * @param year año
   * @returns retorna Movies del año
   */
  searchByYear(year: number): Movies[] {
    let aux:Movies[] = [];
    aux = this.getCollection().filter(function(element) {
      return element.getYear() == year;
    });
    return aux;
  }
  /**
   * getter
   * @param date fecha
   * @returns retorna Movies de la fecha
   */
  searchByDate(date: [number, number, number]): Movies[] {
    let aux: Movies[] = [];
    aux = this.getCollection().filter(function(element) {
      let i = 0;
      while (i < 3 && date[i] == element.getDatePublished()[i]) {
        i = i + 1;
      }
      if (i == 3) return element;
    });
    return aux;
  }
  /**
   * buscar por tipo
   * @param type tipo
   * @returns retorna Movies por el tipo
   */
  searchByType(type: string): Movies[] {
    let aux: Movies[] = [];
    aux = this.getCollection().filter(function(element) {
      return element.getType() == type;
    });
    return aux;
  }
  /**
   * buscar por puntuacion
   * @param rate puntuacion
   * @returns Movies por puntuacion
   */
  searchByRate(rate: number): Movies[] {
    let aux: Movies[] = [];
    aux = this.getCollection().filter(function(element) {
      return element.getRate() == rate;
    });
    return aux;
  }
  /**
   * Buscar por autor
   * @param autor autor
   * @returns Movies del autor
   */
  searchByAutor(autor: string): Movies[] {
    let aux: Movies[] = [];
    aux = this.getCollection().filter(function(element) {
      return element.getAutor() == autor;
    });
    return aux;
  }
  /**
   * buscar por genero
   * @param genre genero
   * @returns serie por genero
   */
  searchByGenre(genre: string): Movies[] {
    let aux: Movies[] = [];
    aux = this.getCollection().filter(function (element) {
      let counter = 0;
      element.getGenre().forEach((aux1) => {
        if (aux1 == genre) return counter += 1;
      });
      if (counter > 0) return element;
    });
    return aux;
  }
}
