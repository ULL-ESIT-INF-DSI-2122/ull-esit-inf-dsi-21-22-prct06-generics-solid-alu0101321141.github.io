import "mocha";
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio1/Pokemon';

describe("Pruebas del juego de peleas.", () => {
  describe("Pruebas de la clase Pokemon", () => {
    const pikachu = new Pokemon("Pokemon", "Pikachu", "Pika Pika CHUU", 45, 80, 50, "Electric", [430, 75, 60, 120]);
    const vaporeon = new Pokemon("Pokemon", "Vaporeon", "vapo vapo vaporeon", 130, 65, 60, "Water", [525, 110, 95, 65]);
    const dragonite = new Pokemon("Pokemon", "Dragonite", "Dragoonite", 91, 134, 95, "Fire", [600, 100, 100, 80]);
    const bellossom = new Pokemon("Pokemon", "Bellossom", "Bello Bello Bellossom", 75, 80, 95, "Grass", [490, 90, 100, 50]);
    it("Pruebas de la definición de la clase Pokemon", () => {
      expect(pikachu).not.to.be.null;
    });
    it("Getters del universo pokemon ", () => {
      expect(vaporeon.getNameUniverse()).to.eq("Pokemon");
      expect(pikachu.getNameCharacter()).to.eq("Pikachu");
      expect(dragonite.getCatchingPhrase()).to.eq("Dragoonite");
      expect(bellossom.getHP()).to.eq(75);
      expect(bellossom.getDM()).to.eq(80);
      expect(bellossom.getDefense()).to.eq(95);
      expect(bellossom.getType()).to.eq("Grass");
      expect(bellossom.getInfo()).to.eql([490, 90, 100, 50]);
    });
    it("Setter del universo Pokemon ", () => {
      bellossom.setHP(10);
      expect(bellossom.getHP()).to.eq(10);
      bellossom.setHP(75);
      bellossom.setDefense(10);
      expect(bellossom.getDefense()).to.eq(10);
      bellossom.setDefense(80);
    });
  });
});
