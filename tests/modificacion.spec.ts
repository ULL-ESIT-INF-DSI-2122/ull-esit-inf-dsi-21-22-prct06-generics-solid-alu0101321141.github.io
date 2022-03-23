import "mocha";
import {expect} from 'chai';
import {NumericSearchableCollection} from '../src/modificacion/NumericSearchableCollection';
import {StringSearchableCollection} from '../src/modificacion/StringSearchableCollection';


describe("Pruebas de la modificacion de clase", () => {
  describe("Pruebas de la clase Numeric", () => {
    const colección1 = new NumericSearchableCollection(1);
    it("Pruebas de la definición de la clase Numeric", () => {
      expect(colección1).not.to.be.null;
    });
    it("Pruebas de los métodos de Numeric", () => {
      expect(colección1.getItem(1)).to.eq(1);
      expect(colección1.getNumberOfItems()).to.eq(1);
      colección1.addItem(5);
      expect(colección1.getItem(2)).to.eq(5);
      colección1.removeItem(1);
      expect(colección1.getNumberOfItems()).to.eq(1);
      expect(colección1.search(5)).to.eql([5]);
      expect(colección1.search(1)).to.eql([]);
    });
  }); 
  describe("Pruebas de la clase Pokemon", () => {
    const colección1 = new StringSearchableCollection("hola");
    it("Pruebas de la definición de la clase Numeric", () => {
      expect(colección1).not.to.be.null;
    });
    it("Pruebas de los métodos de Numeric", () => {
      expect(colección1.getItem(1)).to.eq("hola");
      expect(colección1.getNumberOfItems()).to.eq(1);
      colección1.addItem("adios");
      expect(colección1.getItem(2)).to.eq("adios");
      colección1.removeItem(1);
      expect(colección1.getNumberOfItems()).to.eq(1);
      expect(colección1.search("ad")).to.eql(["ad"]);
      expect(colección1.search("hol")).to.eql([]);
    });
  });
});
