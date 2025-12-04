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

  open(): void {
    if (this.opened) throw Error("Window already opened!");

    Deno.stdout.writeSync(this.encoder.encode(ANSI.screen.switch));
    this.opened = true;

    Deno.addSignalListener("SIGWINCH", this.resizeListener);
    Deno.addSignalListener("SIGTERM", this.cleanup);
    Deno.addSignalListener("SIGINT", this.cleanup);
    this.redraw();
  }

  close(): void {
    if (!this.opened) throw Error("Window already closed!");

    Deno.stdout.writeSync(this.encoder.encode(ANSI.screen.restore));
    this.opened = false;

    Deno.removeSignalListener("SIGWINCH", this.resizeListener);
    Deno.removeSignalListener("SIGTERM", this.cleanup);
    Deno.removeSignalListener("SIGINT", this.cleanup);
  }

  private cleanup = (): void => {
    if (this.opened) {
      this.close();
    }
    Deno.exit(0);
  };

  private redraw(): void {
    // TODO - link up engine
    console.log("ping\n");
  }
}

export const Window = new WindowSingleton();
