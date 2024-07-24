// import rootConfig from "../../.eslintrc";

// export default {
//   ...rootConfig,
// };

// basic .eslintrc.js compatible with react prettier and typescript
module.exports = {
  overrides: [
    {
      files: ["*.ts", "*.tsx"],

      // Specifies the ESLint parser for TypeScript
      parser: "@typescript-eslint/parser",
      extends: [
        "@launchware/eslint-config-react",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      settings: {
        react: {
          version: "detect",
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      plugins: ["@typescript-eslint", "react", "@tanstack/query"],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        // Allows for the parsing of modern ECMAScript features
        ecmaVersion: 2018,
        // Allows for the use of imports
        sourceType: "module",
      },
      rules: {
        // Disable prop-types as we use TypeScript for type checking
        "react/prop-types": "off",
      },
    },
    {
      files: ["*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint", "jsx-a11y"],
      rules: {
        "@graphql-eslint/no-anonymous-operations": "error",
        "@graphql-eslint/naming-convention": [
          "error",
          {
            OperationDefinition: {
              style: "PascalCase",
              forbiddenPrefixes: ["Query", "Mutation", "Subscription", "Get"],
              forbiddenSuffixes: ["Query", "Mutation", "Subscription"],
            },
          },
        ],
      },
    },
  ],
};
