import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import preferArrow from "eslint-plugin-prefer-arrow";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...fixupConfigRules(compat.extends(
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "airbnb",
)), {
    plugins: {
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        "prefer-arrow": preferArrow,
        prettier: fixupPluginRules(prettier),
        react: fixupPluginRules(react),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
        },

        parser: tsParser,
    },

    rules: {
        "react/function-component-definition": [2, {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function",
        }],

        "consistent-return": "off",
        "no-nested-ternary": "off",
        "no-underscore-dangle": "off",

        "prettier/prettier": ["warn", {
            singleQuote: true,
            endOfLine: "auto",
            parser: "typescript",
        }],

        "no-unused-vars": "off",

        "@typescript-eslint/no-unused-vars": ["off", {
            vars: "all",
            args: "after-used",
            ignoreRestSiblings: true,
        }],

        "react/jsx-filename-extension": ["error", {
            extensions: [".tsx"],
        }],

        "react/jsx-no-useless-fragment": "off",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-curly-newline": "off",
        "no-spaced-func": "off",
        "func-call-spacing": "off",

        "react/jsx-wrap-multilines": ["warn", {
            declaration: false,
            assignment: false,
        }],

        "react/jsx-key": "error",

        "max-len": ["warn", {
            code: 150,
        }],

        "react/prop-types": "off",
        "no-useless-constructor": "off",
        "react/require-default-props": "off",
        "linebreak-style": "off",
        "no-else-return": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "no-shadow": "off",
        "jsx-a11y/click-events-have-key-events": "warn",
        "react/jsx-one-expression-per-line": "off",
        "object-curly-newline": "off",
        "implicit-arrow-linebreak": "off",
        "function-paren-newline": "off",
        "operator-linebreak": "off",
        "arrow-parens": "off",
        "no-confusing-arrow": "off",
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "import/named": "off",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-indent": "off",
        indent: "off",

        "prefer-arrow/prefer-arrow-functions": ["warn", {
            disallowPrototype: true,
            classPropertiesAllowed: false,
        }],

        "no-param-reassign": ["warn", {
            props: true,
            ignorePropertyModificationsFor: ["state"],
        }],
    },
}, {
    files: ["**/*.ts"],

    rules: {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
    },
}];