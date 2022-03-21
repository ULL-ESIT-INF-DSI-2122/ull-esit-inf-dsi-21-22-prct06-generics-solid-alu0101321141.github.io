
export abstract class Fighter {
  /**
   * Contructor de la clase abstracta Fighter
   * @param nameUniverse Nombre del universo al que petenece el personaje
   * @param nameCharacter Nombre del personaje
   * @param catchingPhrase Frase representativa
   * @param HP Vida que tiene el personaje
   * @param DM Daño que infringe el personaje
   * @param defense Defensa que tiene el personaje
   */
  constructor(private nameUniverse:string, private nameCharacter:string, private catchingPhrase:string,
    private HP:number, private DM:number, private defense:number) {
  }

  /**
   * getter
   * @returns Nombre universo
   */
  getNameUniverse() {
    return this.nameUniverse;
  }

  /**
   * getter
   * @returns Nombre personaje
   */
  getNameCharacter() {
    return this.nameCharacter;
  }

  /**
   * getter
   * @returns frase característica
   */
  getCatchingPhrase() {
    return this.catchingPhrase;
  }

  /**
   * getter
   * @returns vida del personaje
   */
  getHP() {
    return this.HP;
  }

  /**
   * getter
   * @returns daño personaje
   */
  getDM() {
    return this.DM;
  }

  /**
   * getter
   * @returns defensa personaje
   */
  getDefense() {
    return this.defense;
  }

  /**
   * setter
   * @param newHP nueva vida
   */
  setHP(newHP:number) {
    if (newHP > 0) {
      this.HP = newHP;
    } else {
      this.HP = 0;
    }
  }

  /**
   * setter
   * @param newDefense nueva defensa
   */
  setDefense(newDefense:number) {
    if (newDefense > 0) {
      this.defense = newDefense;
    } else {
      this.defense = 0;
    }
  }

  /**
   * Método abstracto daño que realiza el personaje
   */
  abstract dmgFight():number;
  /**
   * Método abstracto daño que recibe el personaje.
   */
  abstract HPFight():number;
}
