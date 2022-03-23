import {Collectable} from "../modificacion/Collectable";
import {Searchable} from "../modificacion/Searchable";

/**
 * Clase abstracta SearchableCollection
 */
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
  protected collection:T[];
  /**
   * constructor de la clase abstracta
   * @param element elemento  de la colección
   */
  constructor(private element:T) {
    this.collection = [];
    this.collection.push(element);
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
    return this.collection[position - 1];
  }
  /**
   * Elimina un elemento
   * @param position posicion del elemento
   */
  removeItem(element:number): void {
    this.collection = this.collection.splice(element);
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
  abstract search(buscar: T): T[];
}
