export default const ANSI = {
  screen: {
    switch: "\x1b[?1049h",
    restore: "\x1b[?1049l",
  },

  cursor: {
    set: (x: number, y: number) => `\x1b[${x};${y}H`,
    up: (x: number) => `\x1b[${x}A`,
    down: (x: number) => `\x1b[${x}B`,
    right: (x: number) => `\x1b[${x}C`,
    left: (x: number) => `\x1b[${x}D`,
    visible: "\x1b[?25h",
    invisible: "\x1b[?25l",
  },

  erase: {
    line: "\x1b[2K",
    left: "\x1b[1K",
    right: "\x1b[0K",
    screen: "\x1b[2J",
    up: "\x1b[1J",
    down: "\x1b[0J",
  },

  style: {
    reset: "\x1b[0m",

    weight: {
      reset: "\x1b[22m",
      bold: "\x1b[1m",
      dim: "\x1b[2m",
    },

    italic: {
      reset: "\x1b[23m",
      set: "\x1b[3m",
    },

    underline: {
      reset: "\x1b[24m",
      set: "\x1b[4m",
    },

    inverse: {
      reset: "\x1b[27m",
      set: "\x1b[7m",
    },

    invisible: {
      reset: "\x1b[28m",
      set: "\x1b[8m",
    },

    strikethrough: {
      reset: "\x1b[29m",
      set: "\x1b[9m",
    },

    fg: {
      reset: "\x1b[39m",
      black: "\x1b[30m",
      red: "\x1b[31m",
      green: "\x1b[32m",
      yellow: "\x1b[33m",
      blue: "\x1b[34m",
      magenta: "\x1b[35m",
      cyan: "\x1b[36m",
      white: "\x1b[37m",

      bright: {
        black: "\x1b[90m",
        red: "\x1b[91m",
        green: "\x1b[92m",
        yellow: "\x1b[93m",
        blue: "\x1b[94m",
        magenta: "\x1b[95m",
        cyan: "\x1b[96m",
        white: "\x1b[97m",
      },

      twoFiveSix: (x: number) => `\x1b[38;5;${x}m`,
      rgb: (r: number, g: number, b: number) => `\x1b[38;2;${r};${g};${b}m`,
    },

    bg: {
      reset: "\x1b[49m",
      black: "\x1b[40m",
      red: "\x1b[41m",
      green: "\x1b[42m",
      yellow: "\x1b[43m",
      blue: "\x1b[44m",
      magenta: "\x1b[45m",
      cyan: "\x1b[46m",
      white: "\x1b[47m",

      bright: {
        black: "\x1b[100m",
        red: "\x1b[101m",
        green: "\x1b[102m",
        yellow: "\x1b[103m",
        blue: "\x1b[104m",
        magenta: "\x1b[105m",
        cyan: "\x1b[106m",
        white: "\x1b[107m",
      },

      twoFiveSix: (x: number) => `\x1b[48;5;${x}m`,
      rgb: (r: number, g: number, b: number) => `\x1b[48;2;${r};${g};${b}m`,
    },
  },
};
