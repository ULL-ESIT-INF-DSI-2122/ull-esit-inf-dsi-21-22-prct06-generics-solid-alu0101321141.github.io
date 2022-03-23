import {SearchableCollection} from "../modificacion/SearchableCollection";

/**
 * Clase String
 */
export class StringSearchableCollection extends SearchableCollection<string> {
  /**
   * Constructor
   * @param element elemento a añadir
   */
  constructor(element:string) {
    super(element);
  }
  /**
   * Buscar
   * @param buscar Buscar subcadena
   * @returns Vector con la repetición de la subcadena
   */
  search(buscar: string): string[] {
    let aux:string[] = []
    this.collection.forEach((element) => {
      for (let i = 0; i < element.length; i++) {
        const subcadena = element.substring(0, i);
        if (subcadena == buscar) {
          aux.push(buscar);
        }
      }
    });
    return aux;
  }
}

