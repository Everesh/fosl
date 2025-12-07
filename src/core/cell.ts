export default class Cell {
  char: string;
  params: Array<string>;

  constructor(char: string, params: Array<string> = []) {
    if (char.length !== 1) {
      throw new Error("Cell's char has to hold exactly 1 character");
    }

    this.char = char;
    this.params = params;
  }
}
