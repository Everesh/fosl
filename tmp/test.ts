import * as fosl from "../mod.ts";

fosl.Window.open();

await new Promise((f) => setTimeout(f, 5000));

fosl.Window.close();
