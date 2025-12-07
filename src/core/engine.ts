import Cell from "./cell.ts";

class Engine {
  screen: Array<Array<Cell>>;
  buffer: Array<Array<Cell>>;
  dimensions: {
    x: number;
    y: number;
  };
}
