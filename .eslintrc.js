module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  rules: {
    "no-console": "off",
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix"
    ] // https://.com/q/39114446/2771889
  }
};
