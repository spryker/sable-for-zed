module.exports = {
    "env": {
        "commonjs": true,
        "es6": false,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "document": "readonly",
        "navigator": "readonly",
        "location": "readonly",
        "window": "readonly",
        "$": "readonly",
        "jQuery": "readonly",
        "SprykerAjax": "readonly",
        "SprykerAlert": "readonly",
        "SprykerAjaxCallbacks": "readonly",
        "confirm": "readonly",
        "alert": "readonly",
        "localStorage": "readonly",
        "antelope": "readonly",
        "Event": "readonly",
        "CustomEvent": "readonly",
        "swal": "readonly",
        "DEV": "readonly"
    },
    // define the rules to override default rules list
    "rules": {
        "accessor-pairs": "error",
        "block-spacing": ["error", "always"],
        "brace-style": ["error"],
        "camelcase": ["error", { "properties": "always" }],
        "comma-dangle": ["error", {
            "arrays": "never",
            "objects": "never",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "comma-style": ["error", "last"],
        "dot-location": ["error", "property"],
        "eol-last": ["error", "always"],
        "eqeqeq": ["error", "always", { "null": "ignore" }],
        "func-call-spacing": ["error", "never"],
        "handle-callback-err": ["error", "^(err|error)$" ],
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "key-spacing": ["error", {
            "beforeColon": false,
            "afterColon": true,
            "mode": "strict"
        }],
        "keyword-spacing": ["error", {
            "before": true,
            "after": true
        }],
        "new-cap": ["error", {
            "newIsCap": true,
            "capIsNew": false
        }],
        "new-parens": "error",
        "no-array-constructor": "error",
        "no-caller": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": ["error", "always"],
        "no-const-assign": "error",
        "no-constant-condition": ["error", { "checkLoops": false }],
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": ["error", "functions"],
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-inner-declarations": ["error", "functions"],
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": ["error", { "skipStrings": true, "skipTemplates": true }],
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": ["error", { "allowLoop": false, "allowSwitch": false }],
        "no-lone-blocks": "error",
        "no-mixed-operators": ["error", {
            "groups": [
                ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                ["in", "instanceof"]
            ]
        }],
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
        "no-negated-in-lhs": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-path-concat": "error",
        "no-proto": "error",
        "no-prototype-builtins": "off",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-return-assign": ["error", "except-parens"],
        "no-return-await": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-undef": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": ["error"],
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": ["error", {
            "allowShortCircuit": true,
            "allowTernary": true,
            "allowTaggedTemplates": true
        }],
        "no-unused-vars": ["error", {
            "vars": "all",
            "args": "all"
        }],
        "no-use-before-define": ["error", {
            "functions": false,
            "classes": false,
            "variables": false
        }],
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "object-property-newline": ["error", {
            "allowMultiplePropertiesPerLine": true
        }],
        "one-var": ["error", {
            "initialized": "never"
        }],
        "operator-linebreak": ["error", "after", {
            "overrides": {
                "?": "before",
                ":": "before"
            }
        }],
        "padded-blocks": ["error", {
            "blocks": "never",
            "switches": "never",
            "classes": "never"
        }],
        "prefer-promise-reject-errors": "error",
        "quotes": ["error", "single", {
            "avoidEscape": true,
            "allowTemplateLiterals": true
        }],
        "rest-spread-spacing": ["error", "never"],
        "semi": ["error", "always"],
        "semi-spacing": ["error", {
            "before": false,
            "after": true
        }],
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": ["error", {
            "words": true,
            "nonwords": false
        }],
        "spaced-comment": ["error", "always", {
            "line": {
                "markers": ["*package", "!", "/", ",", "="]
            },
            "block": {
                "balanced": true,
                "markers": ["*package", "!", ",", ":", "::", "flow-include"],
                "exceptions": ["*"]
            }
        }],
        "symbol-description": "error",
        "template-curly-spacing": ["error", "never"],
        "template-tag-spacing": ["error", "never"],
        "unicode-bom": ["error", "never"],
        "use-isnan": "error",
        "valid-typeof": ["error", {
            "requireStringLiterals": true
        }],
        "wrap-iife": ["error", "any", {
            "functionPrototypeMethods": true
        }],
        "yield-star-spacing": ["error", "both"],
        "yoda": ["error", "never"]
    }
};
