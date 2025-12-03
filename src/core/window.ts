import { Box } from "../elements/box.ts";
import { ANSI } from "./ansi.ts";

class WindowSingleton {
  private layout: Array<Array<Box>>;
  private opened: boolean;

  private encoder: TextEncoder;

  private resizeListener: () => void;

  constructor() {
    this.layout = [];
    this.opened = false;

    this.encoder = new TextEncoder();

    let resizeDebounce: number | undefined;
    this.resizeListener = () => {
      if (resizeDebounce !== undefined) {
        clearTimeout(resizeDebounce);
      }

      resizeDebounce = setTimeout(() => {
        this.redraw();
        resizeDebounce = undefined;
      }, 200);
    };
  }

  setLayout(layout: Array<Array<Box>>): void {
    this.layout = layout;

    if (this.opened) this.redraw();
  }

  getLayout(): Array<Array<Box>> {
    return this.layout;
  }

  open(): void {
    if (this.opened) throw Error("__FATAL__ Window already opened!");

    Deno.stdout.writeSync(this.encoder.encode(ANSI.screen.switch));
    this.opened = true;

    Deno.addSignalListener("SIGWINCH", this.resizeListener);
    this.redraw();
  }

  close(): void {
    if (!this.opened) throw Error("__FATAL__ Window already closed!");

    Deno.stdout.writeSync(this.encoder.encode(ANSI.screen.restore));
    this.opened = false;

    Deno.removeSignalListener("SIGWINCH", this.resizeListener);
  }

  private redraw(): void {
    // TODO - link up engine
    console.log("ping\n");
  }
}

export const Window = new WindowSingleton();
