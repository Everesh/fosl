import Cell from "./cell.ts";
import Box from "../elements/box.ts";
import Frame from "../elements/frame.ts";

class EngineSingleton {
  screen: Array<Array<Cell>>;
  buffer: Array<Array<Cell>>;
  layout: Frame | Box;
  size: {
    columns: number;
    rows: number;
  };

  constructor() {
    this.size = Deno.consoleSize();
    this.screen = [];
    this.buffer = [];
    this.layout = [];
  }

  render(): void {
    this.size = Deno.consoleSize();
    this.updateBuffer();
    if (this.screen.length !== this.buffer.length ||
        this.screen[0].length !== this.buffer[0].length) {
      this.fullScreenRedraw();
    } else {
      this.diffScreenRedraw();
    }
  };

  private fullScreenRedraw(): void {
    // TODO
  }

  private diffScreenRedraw(): void {
    // TODO
  }

  private updateBuffer(): void {
    // TODO
  }
}

export default const Engine = new Engine();
