import {BasicStreamableCollection} from "../ejercicio2/BasicStreamableCollection";
import {Documentary} from "../ejercicio2/Documentary";

/**
 * Clase streamableCollectioDocumentary
 */
export class StreamableCollectionDocumentary extends BasicStreamableCollection<Documentary> {
  constructor(newDocumentary:Documentary) {
    super(newDocumentary);
  }
  /**
   * Buscar por año
   * @param year año
   * @returns retorna Documentary del año
   */
  searchByYear(year: number): Documentary[] {
    let aux:Documentary[] = [];
    aux = this.getCollection().filter(function(element) {
      return element.getYear() == year;
    });
    return aux;
  }
  /**
   * getter
   * @param date fecha
   * @returns retorna Documentary de la fecha
   */
  searchByDate(date: [number, number, number]): Documentary[] {
    let aux: Documentary[] = [];
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
   * @returns retorna Documentary por el tipo
   */
  searchByType(type: string): Documentary[] {
    let aux: Documentary[] = [];
    aux = this.getCollection().filter(function(element) {
      return element.getType() == type;
    });
    return aux;
  }
  /**
   * buscar por puntuacion
   * @param rate puntuacion
   * @returns Documentary por puntuacion
   */
  searchByRate(rate: number): Documentary[] {
    let aux: Documentary[] = [];
    aux = this.getCollection().filter(function(element) {
      return element.getRate() == rate;
    });
    return aux;
  }
  /**
   * Buscar por autor
   * @param autor autor
   * @returns Documentary del autor
   */
  searchByAutor(autor: string): Documentary[] {
    let aux: Documentary[] = [];
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
  searchByGenre(genre: string): Documentary[] {
    let aux: Documentary[] = [];
    aux = this.getCollection().filter(function(element) {
      let counter = 0;
      element.getGenre().forEach((aux1) => {
        if (aux1 == genre) return counter += 1;
      });
      if (counter > 0) return element;
    });
    return aux;
  }
}
