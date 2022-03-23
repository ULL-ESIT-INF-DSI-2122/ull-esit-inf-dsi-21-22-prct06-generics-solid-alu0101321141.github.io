import {Collectable} from "../modificacion/Collectable";
import {Searchable} from "../modificacion/Searchable";

/**
 * Clase abstracta SearchableCollection
 */
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
  private collection: T[];
  /**
   * constructor de la clase abstracta
   * @param primer elemento  de la colección
   */
  constructor(private element:T) {
    this.collection = [];
  }
  /**
   * añade elementos
   * @param newItem nuevo elemento
   */
  addItem(newItem: T): void {
    this.collection.push(newItem);
  }
  /**
   * Obtener un elemento
   * @param position posicion del elemento
   * @returns elemento
   */
  getItem(position: number): T {
    return this.collection[position];
  }
  /**
   * Elimina un elemento
   * @param position posicion del elemento
   */
  removeItem(position: number): void {
    this.collection.splice(position);
  }
  /**
   * getter
   * @returns numero de items dentro de la colección
   */
  getNumberOfItems(): number {
    return this.collection.length;
  }
  /**
   * Metodo de búsqueda
   * @param buscar Método abstracto Search
   */
  abstract search(buscar: T): T;
}
