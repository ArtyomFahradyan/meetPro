module.exports = {
  rules: {
    'header-capitalized': [2, 'always'],
    'header-no-punctuation': [2, 'always'],
    'header-no-colon': [2, 'always']
  },
  plugins: [
    {
      rules: {
        'header-capitalized': ({ header }) => {
          const firstChar = header[0];
          return [firstChar === firstChar.toUpperCase(), 'Please capitalize your commit message!'];
        },
        'header-no-punctuation': ({ header }) => {
          const lastChar = header[header.length - 1];
          const punctuation = '.?!;';
          return [
            !punctuation.includes(lastChar),
            'Please do not end your commit message with punctuation!'
          ];
        },
        'header-no-colon': ({ header }) => {
          return [
            !header.includes(':'),
            'Please keep your commit message a simple imperative sentence!'
          ];
        }
      }
    }
  ]
};
