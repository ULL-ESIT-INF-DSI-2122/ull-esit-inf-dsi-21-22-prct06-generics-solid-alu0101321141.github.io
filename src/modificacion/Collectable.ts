
/**
 * Interfaz Collectable.
 */
export interface Collectable<T> {
  /**
   * setter
   * @param newItem nuevo item a insertar
   */
  addItem(newItem:T):void;
  /**
   * getter
   * @param position posicion donde esta el elemento
   */
  getItem(position:number):T;
  /**
   * delete
   * @param position posición donde esta el elemento
   */
  removeItem(position:number):void;
  /**
   * getter
   * @return numero
   */
  getNumberOfItems():number;
}
