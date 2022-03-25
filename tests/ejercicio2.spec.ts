import "mocha";
import {expect} from 'chai';
import {Series} from '../src/ejercicio2/Series';
import {StreamableCollectionSeries} from '../src/ejercicio2/StreamableCollectionSeries';


describe("Pruebas del ejercicio 2.", () => {
  describe("Pruebas de la clase Series", () => {
    const blackList = new Series("BlackList", [25, 9, 2013], "Jon Bokenkamp", 43, 6.4, "Jovenes", "Drama y Crimen", 9, "Raymond Reddington");
    it("Pruebas exitencia clase Series", () => {
      expect(blackList).not.be.null;
    });
    it("Pruebas Getters.", () => {
      expect(blackList.getName()).to.eq("BlackList");
      expect(blackList.getDatePublished()).to.eql([25, 9, 2013]);
      expect(blackList.getAutor()).to.eq("Jon Bokenkamp");
      expect(blackList.getDuration()).to.eq(43);
      expect(blackList.getRate()).to.eq(6.4);
      expect(blackList.getType()).to.eq("Jovenes");
      expect(blackList.getGenre()).to.eq("Drama y Crimen");
      expect(blackList.getSeasons()).to.eq(9);
      expect(blackList.getMainCharacter()).to.eq("Raymond Reddington");
    });
  });
  describe("Pruebas de la clase Coleccion", () => {
    const blackList = new Series("BlackList", [25, 9, 2013], "Jon Bokenkamp", 43, 6.4, "Jovenes", "Drama y Crimen", 9, "Raymond Reddington");
    const bull = new Series("Bull", [13, 5, 2016], "Phil McGraw y Paul Attanasio", 43, 6.9, "Jovenes", "Drama Judicial / Abogados", 6, "Jason Bull");
    const collectionSeries = new StreamableCollectionSeries(blackList);
    it("Pruebas de existencia", () => {
      expect(collectionSeries).not.be.null;
    });
    it("Pruebas de los add y getters", () => {
      collectionSeries.addCollection(bull);
      expect(collectionSeries.getCollection()).to.eql([blackList, bull]);
      collectionSeries.addFav(bull);
      expect(collectionSeries.getFavList()).to.eql([bull]);
      collectionSeries.addViewLater(blackList);
      expect(collectionSeries.getViewLater()).to.eql([blackList]);
    });
    it("Pruebas de los remove y getters", () => {
      collectionSeries.removeCollection(bull);
      console.log(collectionSeries.getCollection());
      expect(collectionSeries.getCollection()).to.eql([blackList]);
      collectionSeries.removeFav(bull);
      console.log(collectionSeries.getCollection());
      expect(collectionSeries.getFavList()).to.eql([]);
      collectionSeries.removeViewLater(blackList);
      console.log(collectionSeries.getCollection());
      expect(collectionSeries.getViewLater()).to.eql([]);
    });
    it("Pruebas Busquedas", () => {
      collectionSeries.addCollection(bull);
      expect(collectionSeries.searchByYear(2022)).to.eql([]);
      expect(collectionSeries.searchByYear(2013)).to.eql([blackList]);
      expect(collectionSeries.searchByDate([2, 12, 1996])).to.eql([]);
      expect(collectionSeries.searchByDate([13, 5, 2016])).to.eql([bull]);
      expect(collectionSeries.searchByType("Adultos")).to.eql([]);
      expect(collectionSeries.searchByType("Jovenes")).to.eql([blackList, bull]);
      expect(collectionSeries.searchByRate(10)).to.eql([]);
      expect(collectionSeries.searchByRate(6.9)).to.eql([bull]);
      expect(collectionSeries.searchByAutor("hola")).to.eql([]);
      expect(collectionSeries.searchByAutor("Jon Bokenkamp")).to.eql([blackList]);
      expect(collectionSeries.searchByGenre("lucha")).to.eql([]);
      expect(collectionSeries.searchByGenre("Drama y Crimen")).to.eql([blackList]);
    });
  });
});

