/**
 * interfaz Searcheable
 */
export interface Searchable<T> {
  search(buscar:T):T[];
}
