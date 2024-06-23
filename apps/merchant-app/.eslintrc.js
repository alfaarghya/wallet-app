/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@wallet-app/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
