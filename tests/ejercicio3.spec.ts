import "mocha";
import {expect} from 'chai';
import {Cifrado} from '../src/ejercicio3/Cifrado';


describe("Pruebas de clase Cifrado.", () => {
  describe("Pruebas de la clase Cifrado", () => {
    const cifrado1 = new Cifrado("abcdef", "cef", "abba");
    it("Pruebas de la definición de la clase Pokemon", () => {
      expect(cifrado1).not.to.be.null;
    });
    it("Getters de la clase cifrado ", () => {
      expect(cifrado1.getAlphabet()).to.eq("abcdef");
      expect(cifrado1.getKey()).to.eq("cef");
      expect(cifrado1.getText()).to.eq("abba");
    });
    it("setters de la clase cifrado", () => {
      cifrado1.setAlphabet("aa");
      expect(cifrado1.getAlphabet()).to.eq("aa");
      cifrado1.setKey("bb");
      expect(cifrado1.getKey()).to.eq("bb");
      cifrado1.setText("tt");
      expect(cifrado1.getText()).to.eq("tt");
    });
    it("Pruebas de la codificación con difrentes alfabetos, claves y textos", () => {
      cifrado1.setAlphabet("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
      cifrado1.setKey("CLA");
      cifrado1.setText("HOLA");
      expect(cifrado1.coding()).to.eq("KAMD");
      cifrado1.setAlphabet("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
      cifrado1.setKey("CLA");
      cifrado1.setText("HOLA1");
      expect(cifrado1.coding()).to.eq("KAMD1");
    });
    it("Pruebas de la Decodificación con difrentes alfabetos, claves y textos", () => {
      cifrado1.setAlphabet("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
      cifrado1.setKey("CLA");
      cifrado1.setText("KAMD");
      expect(cifrado1.decoding()).to.eq("HOLA");
      cifrado1.setAlphabet("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
      cifrado1.setKey("CLA");
      cifrado1.setText("KAMD1");
      expect(cifrado1.decoding()).to.eq("HOLA1");
    });
  });
});
