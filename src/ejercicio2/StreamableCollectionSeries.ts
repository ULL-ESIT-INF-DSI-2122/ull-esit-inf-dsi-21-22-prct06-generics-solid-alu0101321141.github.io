import {BasicStreamableCollection} from "../ejercicio2/BasicStreamableCollection";
import {Series} from "../ejercicio2/Series";

/**
 * Clase streamableCollectionSeries
 */
export class StreamableCollectionSeries extends BasicStreamableCollection<Series> {
  /**
   * Constructor
   * @param newSerie nueva serie
   */
  constructor(newSerie:Series) {
    super(newSerie);
  }
  /**
   * Buscar por año
   * @param year año
   * @returns retorna series del año
   */
  searchByYear(year: number): Series[] {
    let aux:Series[] = [];
    aux = this.getCollection().filter(function(element) {
      return element.getYear() == year;
    });
    return aux;
  }
  /**
   * getter
   * @param date fecha
   * @returns retorna series de la fecha
   */
  searchByDate(date: [number, number, number]): Series[] {
    let aux: Series[] = [];
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
   * @returns retorna series por el tipo
   */
  searchByType(type: string): Series[] {
    let aux: Series[] = [];
    aux = this.getCollection().filter(function(element) {
      return element.getType() == type;
    });
    return aux;
  }
  /**
   * buscar por puntuacion
   * @param rate puntuacion
   * @returns series por puntuacion
   */
  searchByRate(rate: number): Series[] {
    let aux: Series[] = [];
    aux = this.getCollection().filter(function(element) {
      return element.getRate() == rate;
    });
    return aux;
  }
  /**
   * Buscar por autor
   * @param autor autor
   * @returns series del autor
   */
  searchByAutor(autor: string): Series[] {
    let aux: Series[] = [];
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
  searchByGenre(genre: string): Series[] {
    let aux: Series[] = [];
    aux = this.getCollection().filter(function(element) {
      let counter = 0;
      element.getGenre().forEach((aux1) => {
        if (aux1 == genre) return counter += 1;;
      });
      if (counter > 0) return element;
    });
    return aux;
  }
}
