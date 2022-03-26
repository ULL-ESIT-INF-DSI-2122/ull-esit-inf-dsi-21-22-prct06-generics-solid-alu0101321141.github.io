/**
 * Clase cifrado
 */
export class Cifrado {
  private alphabet:string[];
  private key:string[];
  private text:string[];
  /**
   * constructor
   * @param alphabet alfabeto para codificar/decodificar
   * @param key clave
   * @param text texto
   */
  constructor(alphabet:string, key:string, text:string) {
    this.alphabet = this.stringToVector(alphabet);
    this.key = this.stringToVector(key);
    this.text = this.stringToVector(text);
  }

  /**
   * getter
   * @returns alfabeto
   */
  getAlphabet() {
    return this.alphabet.toString().replace(/,/g, "");
  }
  /**
   * getter
   * @returns clave
   */
  getKey() {
    return this.key.toString().replace(/,/g, "");
  }
  /**
   * getter
   * @returns texto
   */
  getText() {
    return this.text.toString().replace(/,/g, "");
  }
  /**
   * setter
   * @param newAlphabet nuevo Alfabeto
   */
  setAlphabet(newAlphabet:string) {
    this.alphabet = this.stringToVector(newAlphabet);
  }
  /**
   * setter
   * @param newKey nueva clave
   */
  setKey(newKey: string) {
    this.key = this.stringToVector(newKey);
  }
  /**
   * setter
   * @param newText nuevo texto
   */
  setText(newText: string) {
    this.text = this.stringToVector(newText);
  }

  /**
   * codificacion
   * @returns mensaje cifrado
   */
  coding() {
    let codingMSG:string = "";
    for (let i = 0; i < this.text.length; i++) {
      const letterOrig = this.text[i];
      const positionLetterO = this.alphabet.indexOf(letterOrig);
      const letterKey = this.key[i % this.key.length];
      const postionKey = this.alphabet.indexOf(letterKey);
      if (positionLetterO == -1 || postionKey == -1) {
        codingMSG += letterOrig;
      } else {
        codingMSG += this.alphabet[(positionLetterO + (postionKey + 1)) % this.alphabet.length];
      }
    }
    return codingMSG;
  }

  /**
   * decoding
   * @returns mensaje decodificado
   */
  decoding() {
    let DecodingMSG: string = "";
    for (let i = 0; i < this.text.length; i++) {
      const letterCoding = this.text[i];
      const positionLetterO = this.alphabet.indexOf(letterCoding);
      const letterKey = this.key[i % this.key.length];
      const postionKey = this.alphabet.indexOf(letterKey);
      if (positionLetterO == -1 || postionKey == -1) {
        DecodingMSG += letterCoding;
      } else {
        let postionBefore:number = (positionLetterO - (postionKey + 1)) % this.alphabet.length;
        if (postionBefore < 0) postionBefore = postionBefore + this.alphabet.length;
        DecodingMSG += this.alphabet[postionBefore];
      }
    }
    return DecodingMSG;
  }

  /**
   * transforma una string en un vector,
   * este vector tendra cada letra separada en la posición.
   * @param myString string a transformar
   * @returns vector con las string
   */
  private stringToVector(myString:string) {
    let aux:string[] = [];
    for (let i = 0; i < myString.length; i++) {
      const letter = myString.charAt(i);
      aux.push(letter);
    }
    return aux;
  }
}
