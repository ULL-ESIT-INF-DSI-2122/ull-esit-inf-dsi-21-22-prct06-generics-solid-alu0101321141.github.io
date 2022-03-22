import {Fighter} from "../ejercicio1/fighter";

export class Combat {
  constructor(private Fighter1:Fighter, private Fighter2:Fighter ) {
  }

  getFighter1() {
    return this.Fighter1;
  }

  getFighter2() {
    return this.Fighter2;
  }

  setFighter1(newFighter:Fighter) {
    this.Fighter1 = newFighter;
  }

  setFighter2(newFighter:Fighter) {
    this.Fighter2 = newFighter;
  }
}
