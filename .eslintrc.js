module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "document": "readonly",
        "navigator": "readonly",
        "window": "readonly",
        "$": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    // define the rules to override default rules list
    "rules": {

    },
};
