# API

## Elements

```ts
Box {
  title?: string,
  value?: string,
  padding?: {
    left?: number
    right?: number
    top?: number
    bottom: number
  } | number,
  align?: {
    v: "start" | "end" | "center",
    h: "start" | "end" | "center"
  } | "center",
  grow?: {
    width?: number,
    height?: number,
  },
  height?: {
    min?: number,
    max?: number
  },
  width?: {
    min?: number,
    max?: number
  },
  border?: "single" | "double" | "round" | "none",
  borderColor?: {
    red: number,
    green: number,
    blue: number,
  } | "black" | "red" | "green" | "yellow" | "blue" | "white" | "cyan" | "magenta",
  color?: {
    red: number,
    green: number,
    blue: number,
  } | "black" | "red" | "green" | "yellow" | "blue" | "white" | "cyan" | "magenta",
  background?: {
    red: number,
    green: number,
    blue: number,
  } | "black" | "red" | "green" | "yellow" | "blue" | "white" | "cyan" | "magenta",
  borderColorHover?: {
    red: number,
    green: number,
    blue: number,
  } | "black" | "red" | "green" | "yellow" | "blue" | "white" | "cyan" | "magenta",
  colorHover?: {
    red: number,
    green: number,
    blue: number,
  } | "black" | "red" | "green" | "yellow" | "blue" | "white" | "cyan" | "magenta",
  backgroundHover?: {
    red: number,
    green: number,
    blue: number,
  } | "black" | "red" | "green" | "yellow" | "blue" | "white" | "cyan" | "magenta",
  borderColorActive?: {
    red: number,
    green: number,
    blue: number,
  } | "black" | "red" | "green" | "yellow" | "blue" | "white" | "cyan" | "magenta",
  colorActive?: {
    red: number,
    green: number,
    blue: number,
  } | "black" | "red" | "green" | "yellow" | "blue" | "white" | "cyan" | "magenta",
  backgroundActive?: {
    red: number,
    green: number,
    blue: number,
  } | "black" | "red" | "green" | "yellow" | "blue" | "white" | "cyan" | "magenta",

  redraw(),
}

Button < Box {
  hotkey?: string,
  disabled?: boolean,
  onClick: function
}

Input < Box {
  cursor_color?: {
    red: number,
    green: number,
    blue: number,
  } | "black" | "red" | "green" | "yellow" | "blue" | "white" | "cyan" | "magenta",
  hidden?: boolean,
  placeholder?: string,
  onChange?: function,
  onSubmit: function
}

ProgressBar < Box {
  value: number,
  max: number,
  fillChar?: string,
  emptyChar?: string
}
```

## Layout declaration

Window is a singleton 

`Window.open();` // Opens the Window and triggers a redraw, bind SIGWINCH

`Window.setLayout(Array<Array<Box>>);` // highest min height takes precedence, than max height then growth row size wise, triggers redraw if opened

`Window.getLayout();` // Returns mutable Boxes

## Releasing the interface

Close will switch back to original term if opened

trapped or `Window.close();`
