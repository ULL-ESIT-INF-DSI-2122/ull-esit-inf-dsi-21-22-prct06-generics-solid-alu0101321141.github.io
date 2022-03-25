import {StreamableList} from "../ejercicio2/StreamableList";
import {StreamableSearch} from "../ejercicio2/StreamableSearch";

/**
 * Clase abstracta BasicStreamableCollection
 */
export abstract class BasicStreamableCollection<T> implements StreamableList<T>, StreamableSearch<T> {
  /**
   * Coleccion
   */
  private collection:T[];
  /**
   * Lista de favoritos
   */
  favList: T[];
  /**
   * Lista de ver más tarde
   */
  viewLater: T[];
  constructor(content:T) {
    this.collection = [];
    this.collection.push(content);
    this.favList = [];
    this.viewLater = [];
  }
  /**
   * getter
   * @returns Colección
   */
  getCollection() {
    return this.collection;
  }
  /**
   * getter
   * @returns fav list
   */
  getFavList(): T[] {
    return this.favList;
  }
  /**
   * getter
   * @returns view Later
   */
  getViewLater(): T[] {
    return this.viewLater;
  }
  /**
   * Metodo de busqueda.
   * @param year Buscar por año.
   */
  abstract searchByYear(year: number): T[];
  /**
   * Busqueda
   * @param date buscar por fecha
   */
  abstract searchByDate(date: [number, number, number]): T[];
  /**
   * Busqueda
   * @param type buscar por tipo
   */
  abstract searchByType(type: string): T[];
  /**
   * Busqueda
   * @param rate buscar por puntuación
   */
  abstract searchByRate(rate: number): T[];
  /**
   * Busqueda
   * @param autor buscar por autor
   */
  abstract searchByAutor(autor: string): T[];
  /**
   * busqueda
   * @param Genre buscar por generp
   */
  abstract searchByGenre(Genre: string): T[];
  /**
   * añadir a lista
   * @param newElement nuevo elemento
   * @returns string confirmación
   */
  addFav(newElement: T): string {
    this.favList.push(newElement);
    return "Añadido a la lista de favoritos";
  }
  /**
   * añadir un elemento a la lista
   * @param newElement nuevo elemento
   * @returns mensaje confirmación
   */
  addViewLater(newElement: T): string {
    this.viewLater.push(newElement);
    return "Añadido a la lista de ver más tarde";
  }
  /**
   * eliminar un elemento de favoritos
   * @param element elemento
   * @returns mensaje de confirmación
   */
  removeFav(element: T): string {
    let aux: T[] = [];
    this.favList.forEach((content) => {
      if (element != content) aux.push(content);
    });
    this.favList = aux;
    return "Elemento eliminado de favoritos";
  }
  /**
   * eliminar un elemento de ver más tarde
   * @param element elemento
   * @returns mensaje de confirmación
   */
  removeViewLater(element: T): string {
    let aux: T[] = [];
    this.viewLater.forEach((content) => {
      if (element != content) aux.push(content);
    });
    this.viewLater = aux;
    return "Elemento eliminado de favoritos";
  }

  /**
   * Añadir a la coleccion
   * @param element Añadir elemento a la colección
   * @returns mensaje confirmación
   */
  addCollection(element:T):string {
    this.collection.push(element);
    return "Elemento añadido a la colección";
  }

  /**
   * Eliminar de la colección.
   * @param element elemento a eliminar
   * @returns mensaje de confirmación
   */
  removeCollection(element:T):string {
    let aux:T[] = [];
    this.collection.forEach((content) => {
      if (element != content) aux.push(content);
    });
    this.collection = aux;
    return "ELemento eliminado de la colección";
  }
}
