module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
  },
  extends: [
		"eslint:recommended",
    "plugin:vue/recommended"
  ],
  plugins: [
    "vue"
  ],
  rules: {
		indent: ["error", "tab"],
		"vue/html-indent": ["error", "tab"],
		"quote-props": ["error", "as-needed"]
  }
}
