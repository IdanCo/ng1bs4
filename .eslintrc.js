module.exports = {
  extends: ["plugin:angular/johnpapa", "eslint:recommended"],
  "globals": {
    angular: true,
    alert: true,
    console: true,
    // for tests files:
    describe: true,
    beforeEach: true,
    inject: true,
    expect: true,
    it: true,
  },
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  "rules": {
    "semi": [2, "always"], // end lines with semicolon
    "eol-last": 2, // end files with newline
    "indent": [2, 2], // indent with two spaces
    "angular/file-name": 0, // not friendly to modular architecture
    "no-console": 1, // useful for debugging
    "angular/function-type": 0, // not friendly to modular architecture
    "angular/no-service-method": 0 // what's wrong with services?!
  }
};