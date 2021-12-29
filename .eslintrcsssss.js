module.exports = {
    root: true,

    env: {
        node: true,
    },

    extends: [
        "eslint:recommended",
        '@vue/typescript/recommended',
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential",
        "prettier/@typescript-eslint"
    ],
    parser: "vue-eslint-parser",
    plugins: [
        "vue",
        "@typescript-eslint",
    ],

    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        parser: "@typescript-eslint/parser",
    },
};
