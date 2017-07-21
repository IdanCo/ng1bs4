module.exports = {
  extends: ["plugin:angular/johnpapa", "eslint:recommended"],
  "globals": {
    angular: true,
    alert: true,
  },
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  "rules": {
    "semi": [2, "always"], // end lines with semicolon
    "eol-last": 2, // end files with newline
    "indent": [2, 2], // indent with two spaces
    // new ones
    "angular/file-name": 0 // not friendly to modular architecture

  }
};