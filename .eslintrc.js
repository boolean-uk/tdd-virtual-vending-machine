module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jasmine: true
  },
  extends: ['standard', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: { 'prettier/prettier': ['error'] }
}
