module.exports = {
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  endOfLine: 'lf',
  proseWrap: 'never',
  arrowParens: 'always',
  trailingComma: 'all',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: 'document.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
};
