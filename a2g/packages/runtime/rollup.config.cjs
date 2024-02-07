const commonjs = require("@rollup/plugin-commonjs");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const terser = require("@rollup/plugin-terser");
const cleanup = require("rollup-plugin-cleanup");
const filesize = require("rollup-plugin-filesize");

module.exports = {
  input: "src/index.js",
  plugins: [commonjs(), nodeResolve(), cleanup()],
  output: [
    {
      file: "dist/a2g.js",
      format: "esm",
      plugins: [filesize()],
    },
    {
      file: "dist/a2g.min.js",
      format: "esm",
      plugins: [terser(), filesize()],
    },
  ],
};
