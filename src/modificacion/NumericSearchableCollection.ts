import {SearchableCollection} from "../modificacion/SearchableCollection";

/**
 * Clase NumericSearchableCollectio
 */
export class NumericSearchableCollection extends SearchableCollection<number> {
  /**
   * Constructor de la clase.
   * @param element primer elemento
   */
  constructor(element:number) {
    super(element);
  }
  /**
   * Funcion de buscar
   * @param buscar elemento a buscar
   * @returns vector con los elementos.
   */
  search(buscar: number):number[] {
    let aux:number[] = [];
    this.collection.forEach((element) => {
      if (element == buscar) {
        aux.push(element);
      }
    });
    return aux;
  }
}

