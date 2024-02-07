const app = require("./app");
const h = require("./h");

module.exports = {
  createApp: app.createApp,
  h: h.h,
  hFragment: h.hFragment,
  hString: h.hString,
};
