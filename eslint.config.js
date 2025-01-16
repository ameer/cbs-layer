import withNuxt from './.playground/.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      '@stylistic/object-curly-spacing': 'error',
      'vue/html-self-closing': 'warn',
      'vue/no-multiple-template-root': 'off',
      'vue/max-attributes-per-line': ['warn', {
        singleline: {
          max: 4,
        },
        multiline: {
          max: 1,
        },
      }],
      'indent': ['error', 2],
      'vue/html-indent': ['error', 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      }],
      'vue/html-closing-bracket-newline': [
        'error',
        {
          singleline: 'never',
          multiline: 'always',
          selfClosingTag: {
            singleline: 'never',
            multiline: 'always',
          },
        },
      ],
    },
  },
)
