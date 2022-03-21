import {Fighter} from "../ejercicio1/fighter";

export class Pokemon extends Fighter {
  constructor(nameUniverse:string, nameCharacter:string, catchingPhrase:string,
      HP:number, DM:number, defense:number, private type:string,
      private info:[number, number, number, number]) {
    super(nameUniverse, nameCharacter, catchingPhrase, HP, DM, defense);
  }

  getInfo() {
    return this.info;
  }

  getType() {
    return this.type;
  }

  dmgFight(): number {
    return 2;
  }

  HPFight(): number {
    return 1;
  }
}
