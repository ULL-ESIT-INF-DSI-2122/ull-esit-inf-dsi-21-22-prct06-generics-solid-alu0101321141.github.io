import "mocha";
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio1/Pokemon';
import {Avatar} from '../src/ejercicio1/Avatar';
import {OnePiece} from '../src/ejercicio1/OnePiece';
import {Combat} from '../src/ejercicio1/Combat';

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
        100, 80, 40, "Water", "hielo", [14, "Tibu Agua del norte"]);
    const Toph = new Avatar("Avatar", "Toph Beifong", "No me importa cómo me veo. No busco la aprobación de nadie." +
      " Sé muy bien quien soy.", 150, 95, 100, "Land", "Cables Metal", [12, "Reino Tierra"]);


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
      expect(Toph.getElement()).to.eq("Land");
      expect(Toph.getWeapon()).to.eq("Cables Metal");
      expect(Toph.getInfo()).to.eql([12, "Reino Tierra"]);
    });
    it("Setter del universo Avatar ", () => {
      Toph.setHP(10);
      expect(Toph.getHP()).to.eq(10);
      Toph.setHP(150);
      Toph.setDefense(10);
      expect(Toph.getDefense()).to.eq(10);
      Toph.setDefense(100);
    });
  });
  describe("Pruebas de la clase One Piece", () => {
    const luffy = new OnePiece("OnePiece", "Luffy", "En un duelo entre piratas… No existe tal cosa de jugar sucio",
        350, 400, 150, "Paramecia", "Gear 2", [19, "East Blue", "1.500.000.000 Belly"]);
    const akainu = new OnePiece("OnePiece", "Akainu", "¡¡El «mal» que representan los piratas debe ser erradicado!!",
        650, 1000, 300, "Logia", "", [55, "North Blue", "Almirante de flota"]);
    const Queen = new OnePiece("OnePiece", "Queen la Plaga", "¡Gracias por esperar! ¡Pedazos de basura!",
        400, 500, 250, "Zoan", "", [56, "Grand Line", "1.320.000.000 Belly"]);

    it("Pruebas de la definición de la clase OnePiece", () => {
      expect(luffy).not.to.be.null;
    });
    it("Getters del universo One Piece ", () => {
      expect(akainu.getNameUniverse()).to.eq("OnePiece");
      expect(Queen.getNameCharacter()).to.eq("Queen la Plaga");
      expect(Queen.getCatchingPhrase()).to.eq("¡Gracias por esperar! ¡Pedazos de basura!");
      expect(akainu.getHP()).to.eq(650);
      expect(akainu.getDM()).to.eq(1000);
      expect(akainu.getDefense()).to.eq(300);
      expect(akainu.getTypeDevilFruit()).to.eq("Logia");
      expect(akainu.getWeapon()).to.eq("");
      expect(luffy.getInfo()).to.eql([19, "East Blue", "1.500.000.000 Belly"]);
    });
    it("Setter del universo One Piece ", () => {
      luffy.setHP(10);
      expect(luffy.getHP()).to.eq(10);
      luffy.setHP(350);
      luffy.setDefense(10);
      expect(luffy.getDefense()).to.eq(10);
      luffy.setDefense(150);
    });
  });
  describe("Pruebas de la clase Combate", () => {
    const aang = new Avatar("Avatar", "Aang", "La venganza es como un arma de doble filo: mientras " +
        " ves caer a tu enemigo, te envenenas por dentro", 250, 150, 100, "Avatar", "Planeador", [12, "Nomadas del aire"]);
    const luffy = new OnePiece("OnePiece", "Luffy", "En un duelo entre piratas… No existe tal cosa de jugar sucio",
        350, 400, 150, "Paramecia", "Gear 2", [19, "East Blue", "1.500.000.000 Belly"]);
    const akainu = new OnePiece("OnePiece", "Akainu", "¡¡El «mal» que representan los piratas debe ser erradicado!!",
        650, 1000, 300, "Logia", "", [55, "North Blue", "Almirante de flota"]);
    const pikachu = new Pokemon("Pokemon", "Pikachu", "Pika Pika CHUU", 45, 80, 50, "Electric", [430, 75, 60, 120]);

    const combat1 = new Combat(aang, luffy);

    it("Pruebas de la definición de la clase Combate", () => {
      expect(combat1).not.to.be.null;
    });
    it("Getters del Combate ", () => {
      expect(combat1.getFighter1()).to.eql(aang);
      expect(combat1.getFighter2()).to.eql(luffy);
    });
    it("Setter del universo One Piece ", () => {
      combat1.setFighter1(akainu);
      expect(combat1.getFighter1()).to.eql(akainu);
      combat1.setFighter1(aang);
      combat1.setFighter2(pikachu);
      expect(combat1.getFighter2()).to.eql(pikachu);
      combat1.setFighter2(luffy);
    });
  });
});
