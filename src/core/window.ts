import { Box } from "../elements/box.ts";
import { ANSI } from "./ansi.ts";

class WindowSingleton {
  private layout: Array<Array<Box>> = [];
  private opened = false;
  private encoder = new TextEncoder();

  private awaitResolver: (() => void) | null = null;
  private resizeDebounce?: number;

  private resizeListener = (): void => {
    if (this.resizeDebounce !== undefined) {
      clearTimeout(this.resizeDebounce);
    }
    this.resizeDebounce = setTimeout(() => {
      this.redraw();
      this.resizeDebounce = undefined;
    }, 200);
  };

  private cleanup = (): void => {
    if (this.opened) {
      this.close();
    }
    Deno.exit(0);
  };

  setLayout(layout: Array<Array<Box>>): this {
    this.layout = layout;

    if (this.opened) this.redraw();
    return this;
  }

  open(): this {
    if (this.opened) throw Error("Can't open opened window!");

    Deno.stdout.writeSync(this.encoder.encode(ANSI.screen.switch));
    this.opened = true;

    Deno.addSignalListener("SIGWINCH", this.resizeListener);
    Deno.addSignalListener("SIGTERM", this.cleanup);
    Deno.addSignalListener("SIGINT", this.cleanup);
    this.redraw();

    return this;
  }

  close(): this {
    if (!this.opened) throw Error("Can't close closed window!");

    Deno.stdout.writeSync(this.encoder.encode(ANSI.screen.restore));
    this.opened = false;

    Deno.removeSignalListener("SIGWINCH", this.resizeListener);
    Deno.removeSignalListener("SIGTERM", this.cleanup);
    Deno.removeSignalListener("SIGINT", this.cleanup);

    this.awaitResolver?.();
    this.awaitResolver = null;

    return this;
  }

  await(): Promise<void> {
    if (!this.opened) {
      throw new Error("Can't await closed window!");
    }

    return new Promise((resolve) => {
      this.awaitResolver = resolve;
    });
  }

  private redraw(): void {
    // TODO - link up engine
    console.log("ping\n");
  }
}

export const Window = new WindowSingleton();
