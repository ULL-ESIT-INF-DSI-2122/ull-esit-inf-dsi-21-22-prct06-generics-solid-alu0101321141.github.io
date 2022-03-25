/**
 * Interfaz Stramable list
 */
export interface StreamableList<T> {
  /**
   * Lista de contenido favorta
   */
  favList:T[];
  /**
   * Lista de contenido Para ver después
   */
  viewLater:T[];
  /**
   * Getter list
   */
  getFavList():T[];
  /**
   * Getter View Later
   */
  getViewLater():T[];
  /**
   * Añadir elementos a la lista de favoritos
   * @param newElement nevo elemento a la lista
   */
  addFav(newElement:T):string;
  /**
   * Añadir elementos a la lista de ver más tarde
   * @param newElement nevo eleemento a la lista
   */
  addViewLater(newElement:T):string;
  /**
   * elimina un elemento de la lista de favoritos
   * @param element elemento a eliminar
   */
  removeFav(element:T):string;
  /**
   * elimina un elemento de la lista de ver más tarde*3
   * @param element elemento a eliminar
   */
  removeViewLater(element:T):string;
}
