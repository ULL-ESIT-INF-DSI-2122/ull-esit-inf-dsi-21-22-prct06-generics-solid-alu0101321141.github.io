import {Fighter} from "../ejercicio1/fighter";

/**
 * Clase Pokedex
 */
export class Pokedex {
  /**
   * Contructor de la clase pokedex
   * @param nameOwner Nombre dle dueño de la pokedex
   * @param age edad
   * @param FavUniverse universo favorito
   * @param Characters Personajes guardados
   */
  constructor(private readonly nameOwner:string, private age:number, private FavUniverse:string,
    private Characters:Fighter[]) {
  }
  /**
   * getter
   * @returns nombre del dueño de la pokedex
   */
  getNameOwner() {
    return this.nameOwner;
  }
  /**
   * getter
   * @returns edad
   */
  getAge() {
    return this.age;
  }
  /**
   * getter
   * @returns Universo favorito
   */
  getFavUniverse() {
    return this.FavUniverse;
  }
  /**
   * getter
   * @returns Personaje
   */
  getCharacters() {
    return this.Characters;
  }
  /**
   * setter
   * @param newCharacter Vector de personajes
   */
  setNewCharacters(newCharacter:Fighter) {
    this.Characters.push(newCharacter);
  }
}
