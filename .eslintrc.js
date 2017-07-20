module.exports = {
    "extends": "standard",
    "plugins": [
        "standard",
        "promise"
    ],
    "globals": {
        angular: true,
    },
    "rules": {
        "semi": [2, "always"],
        "eol-last": 0,
        "indent": [2, 2, {
            "SwitchCase": 1
        }],
        "no-extra-boolean-cast": 0,
        "import/no-webpack-loader-syntax": 0,
        "space-unary-ops": 0,
        "space-before-function-paren": [0, "always"],
        "no-unused-expressions": 0
    }
};