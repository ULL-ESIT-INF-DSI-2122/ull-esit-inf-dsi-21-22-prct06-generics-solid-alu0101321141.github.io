import "mocha";
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio1/Pokemon';
import {Avatar} from '../src/ejercicio1/Avatar';

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
  describe("Pruebas de la clase Avatar", () => {
    const aang = new Avatar("Avatar", "Aang", "La venganza es como un arma de doble filo: mientras " +
      " ves caer a tu enemigo, te envenenas por dentro", 250, 150, 100, "Avatar", "Planeador", [12, "Nomadas del aire"]);
    const zuko = new Avatar("Avatar", "Zuko", "Yo solía pensar que esta cicatriz me marcaba. La marca " +
      "del príncipe desterrado, condenado a perseguir al Avatar para siempre.", 150, 100, 80, "Fire", "Espadas duales Dao", [18,
      "Nación del fuego"]);
    const katara = new Avatar("Avatar", "Katara", "No! Yo nunca ¡Jamás! le daré la espalda a alguien que me necesite.",
        100, 80, 40, "water", "hielo", [14, "Tibu Agua del norte"]);
    const Toph = new Avatar("Avatar", "Toph Beifong", "No me importa cómo me veo. No busco la aprobación de nadie." +
      " Sé muy bien quien soy.", 150, 95, 100, "land", "Cables Metal", [12, "Reino Tierra"]);


    it("Pruebas de la definición de la clase Avatar", () => {
      expect(aang).not.to.be.null;
    });
    it("Getters del universo Avatar ", () => {
      expect(zuko.getNameUniverse()).to.eq("Avatar");
      expect(katara.getNameCharacter()).to.eq("Katara");
      expect(Toph.getCatchingPhrase()).to.eq("No me importa cómo me veo. No busco la aprobación de nadie." +
      " Sé muy bien quien soy.");
      expect(Toph.getHP()).to.eq(150);
      expect(Toph.getDM()).to.eq(95);
      expect(Toph.getDefense()).to.eq(100);
      expect(Toph.getWeapon()).to.eq("Cables Metal");
      expect(Toph.getInfo()).to.eql([12, "Reino Tierra"]);
    });
    it("Setter del universo Avatar ", () => {
      Toph.setHP(10);
      expect(Toph.getHP()).to.eq(10);
      Toph.setHP(75);
      Toph.setDefense(10);
      expect(Toph.getDefense()).to.eq(10);
      Toph.setDefense(80);
    });
  });
});
