import Box from "./box.ts";

export interface frameOptions {
  direction: "row" | "column";
}

export default class Frame {
  direction: "row" | "column";
  children: Array<Box | Frame>;

  constructor(children: Array<Box | Frame>, opt: frameOptions = {}) {
    this.children = children || [];
    this.direction = opt.direction || "row";
  }
}
