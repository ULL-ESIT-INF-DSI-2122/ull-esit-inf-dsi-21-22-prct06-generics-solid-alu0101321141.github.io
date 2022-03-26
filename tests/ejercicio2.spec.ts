import "mocha";
import {expect} from 'chai';
import {Series} from '../src/ejercicio2/Series';
import {StreamableCollectionSeries} from '../src/ejercicio2/StreamableCollectionSeries';
import {Movies} from '../src/ejercicio2/Movies';
import {StreamableCollectionMovies} from '../src/ejercicio2/StreamableCollectionMovies';
import {Documentary} from '../src/ejercicio2/Documentary';
import {StreamableCollectionDocumentary} from '../src/ejercicio2/StreamableCollectionDocumentary';


describe("Pruebas del ejercicio 2.", () => {
  describe("Pruebas de la clase Series", () => {
    const blackList = new Series("BlackList", [25, 9, 2013], "Jon Bokenkamp", 43, 6.4, "Jovenes", ["Drama", "Crimen"], 9, "Raymond Reddington");
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
      expect(blackList.getGenre()).to.eql(["Drama", "Crimen"]);
      expect(blackList.getSeasons()).to.eq(9);
      expect(blackList.getMainCharacter()).to.eq("Raymond Reddington");
    });
  });
  describe("Pruebas de la clase Coleccion de Series.", () => {
    const blackList = new Series("BlackList", [25, 9, 2013], "Jon Bokenkamp", 43, 6.4, "Jovenes", ["Drama", "Crimen"], 9, "Raymond Reddington");
    const bull = new Series("Bull", [13, 5, 2016], "Phil McGraw y Paul Attanasio", 43, 6.9, "Jovenes", ["Drama Judicial", "Abogados"], 6, "Jason Bull");
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
      expect(collectionSeries.getCollection()).to.eql([blackList]);
      collectionSeries.removeFav(bull);
      expect(collectionSeries.getFavList()).to.eql([]);
      collectionSeries.removeViewLater(blackList);
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
      expect(collectionSeries.searchByGenre("Crimen")).to.eql([blackList]);
    });
  });
  describe("Pruebas de la clase Peliculas", () => {
    const avatar = new Movies("Avatar", [18, 11, 2009], "James Cameron", 161, 7.2, "No recomendado a menores de 7 años",
        ["Ciencia ficción", "Acción", "Aventura"], "Jake Sully", "Estados Unidos");
    it("Pruebas exitencia clase Series", () => {
      expect(avatar).not.be.null;
    });
    it("Pruebas Getters.", () => {
      expect(avatar.getName()).to.eq("Avatar");
      expect(avatar.getDatePublished()).to.eql([18, 11, 2009]);
      expect(avatar.getAutor()).to.eq("James Cameron");
      expect(avatar.getDuration()).to.eq(161);
      expect(avatar.getRate()).to.eq(7.2);
      expect(avatar.getType()).to.eq("No recomendado a menores de 7 años");
      expect(avatar.getGenre()).to.eql(["Ciencia ficción", "Acción", "Aventura"]);
      expect(avatar.getMainCharacter()).to.eq("Jake Sully");
      expect(avatar.getCountry()).to.eq("Estados Unidos");
    });
  });
  describe("Pruebas de la clase Coleccion de Peliculas.", () => {
    const avatar = new Movies("Avatar", [18, 11, 2009], "James Cameron", 161, 7.2, "No recomendado menores 7 años",
        ["Ciencia ficción", "Acción", "Aventura"], "Jake Sully", "Estados Unidos");
    const interStellar = new Movies("Interstellar", [7, 11, 2014], "Christopher Nolan", 169, 7.9, "No recomendado menores 7 años",
        ["Ciencia ficción", "Drama", "Aventura", "Aventura Espacial"], "Joseph Cooper", "Estados Unidos");
    const collectionMovies = new StreamableCollectionMovies(avatar);
    it("Pruebas de existencia", () => {
      expect(collectionMovies).not.be.null;
    });
    it("Pruebas de los add y getters", () => {
      collectionMovies.addCollection(interStellar);
      expect(collectionMovies.getCollection()).to.eql([avatar, interStellar]);
      collectionMovies.addFav(interStellar);
      expect(collectionMovies.getFavList()).to.eql([interStellar]);
      collectionMovies.addViewLater(avatar);
      expect(collectionMovies.getViewLater()).to.eql([avatar]);
    });
    it("Pruebas de los remove y getters", () => {
      collectionMovies.removeCollection(avatar);
      expect(collectionMovies.getCollection()).to.eql([interStellar]);
      collectionMovies.removeFav(interStellar);
      expect(collectionMovies.getFavList()).to.eql([]);
      collectionMovies.removeViewLater(avatar);
      expect(collectionMovies.getViewLater()).to.eql([]);
    });
    it("Pruebas Busquedas", () => {
      collectionMovies.addCollection(avatar);
      expect(collectionMovies.searchByYear(2022)).to.eql([]);
      expect(collectionMovies.searchByYear(2014)).to.eql([interStellar]);
      expect(collectionMovies.searchByDate([2, 12, 1996])).to.eql([]);
      expect(collectionMovies.searchByDate([18, 11, 2009])).to.eql([avatar]);
      expect(collectionMovies.searchByType("Adultos")).to.eql([]);
      expect(collectionMovies.searchByType("No recomendado menores 7 años")).to.eql([interStellar, avatar]);
      expect(collectionMovies.searchByRate(10)).to.eql([]);
      expect(collectionMovies.searchByRate(7.9)).to.eql([interStellar]);
      expect(collectionMovies.searchByAutor("hola")).to.eql([]);
      expect(collectionMovies.searchByAutor("Christopher Nolan")).to.eql([interStellar]);
      expect(collectionMovies.searchByGenre("lucha")).to.eql([]);
      expect(collectionMovies.searchByGenre("Aventura Espacial")).to.eql([interStellar]);
    });
  });
  describe("Pruebas de la clase Documental", () => {
    const cosmos = new Documentary("Cosmos: Un viaje Personal", [28, 9, 1980], "Carl Sagan", 60, 8.8, "Todos los publicos",
        ["Divulgación científica", "Naturaleza"], "Estados Unidos", "Public Broadcasting Service");
    it("Pruebas exitencia clase Series", () => {
      expect(cosmos).not.be.null;
    });
    it("Pruebas Getters.", () => {
      expect(cosmos.getName()).to.eq("Cosmos: Un viaje Personal");
      expect(cosmos.getDatePublished()).to.eql([28, 9, 1980]);
      expect(cosmos.getAutor()).to.eq("Carl Sagan");
      expect(cosmos.getDuration()).to.eq(60);
      expect(cosmos.getRate()).to.eq(8.8);
      expect(cosmos.getType()).to.eq("Todos los publicos");
      expect(cosmos.getGenre()).to.eql(["Divulgación científica", "Naturaleza"]);
      expect(cosmos.getCountry()).to.eq("Estados Unidos");
      expect(cosmos.getChanel()).to.eq("Public Broadcasting Service");
    });
  });
  describe("Pruebas de la clase Coleccion de Documental.", () => {
    const cosmos = new Documentary("Cosmos: Un viaje Personal", [28, 9, 1980], "Carl Sagan", 60, 8.8, "Todos los publicos",
        ["Divulgación científica", "Naturaleza"], "Estados Unidos", "Public Broadcasting Service");
    const ingenieriaRomana = new Documentary("Ingeniería Romana", [24, 10, 2015], "Jose Antonio Muñiz", 55, 8.7, "Todos los publicos",
        ["Historia", "Antigua Roma", "Arquitectura"], "España", "RTVE");
    const collectionDocumentary = new StreamableCollectionDocumentary(cosmos);
    it("Pruebas de existencia", () => {
      expect(collectionDocumentary).not.be.null;
    });
    it("Pruebas de los add y getters", () => {
      collectionDocumentary.addCollection(ingenieriaRomana);
      expect(collectionDocumentary.getCollection()).to.eql([cosmos, ingenieriaRomana]);
      collectionDocumentary.addFav(cosmos);
      expect(collectionDocumentary.getFavList()).to.eql([cosmos]);
      collectionDocumentary.addViewLater(ingenieriaRomana);
      expect(collectionDocumentary.getViewLater()).to.eql([ingenieriaRomana]);
    });
    it("Pruebas de los remove y getters", () => {
      collectionDocumentary.removeCollection(cosmos);
      expect(collectionDocumentary.getCollection()).to.eql([ingenieriaRomana]);
      collectionDocumentary.removeFav(ingenieriaRomana);
      expect(collectionDocumentary.getFavList()).to.eql([cosmos]);
      collectionDocumentary.removeViewLater(cosmos);
      expect(collectionDocumentary.getViewLater()).to.eql([ingenieriaRomana]);
    });
    it("Pruebas Busquedas", () => {
      collectionDocumentary.addCollection(cosmos);
      expect(collectionDocumentary.searchByYear(2022)).to.eql([]);
      expect(collectionDocumentary.searchByYear(1980)).to.eql([cosmos]);
      expect(collectionDocumentary.searchByDate([2, 12, 1996])).to.eql([]);
      expect(collectionDocumentary.searchByDate([24, 10, 2015])).to.eql([ingenieriaRomana]);
      expect(collectionDocumentary.searchByType("Adultos")).to.eql([]);
      expect(collectionDocumentary.searchByType("Todos los publicos")).to.eql([ingenieriaRomana, cosmos]);
      expect(collectionDocumentary.searchByRate(10)).to.eql([]);
      expect(collectionDocumentary.searchByRate(8.8)).to.eql([cosmos]);
      expect(collectionDocumentary.searchByAutor("hola")).to.eql([]);
      expect(collectionDocumentary.searchByAutor("Jose Antonio Muñiz")).to.eql([ingenieriaRomana]);
      expect(collectionDocumentary.searchByGenre("lucha")).to.eql([]);
      expect(collectionDocumentary.searchByGenre("Arquitectura")).to.eql([ingenieriaRomana]);
    });
  });
});

