module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/strongly-recommended',
    'airbnb-base',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@root', './'],
          ['@', './src'],
        ],
        extensions: ['.ts', '.js', '.vue', '.jsx', '.json']
      }
    }
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 12,
    requireConfigFile: false,
    ecmaVersion: 8,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
    radix: "off",
    "no-shadow": 'off',
    "camelcase": "off",
    "no-restricted-imports": ["error", {
      "patterns": ["../*"]
    }],
    "vue/attributes-order": ["error", {
      "order": [
        "DEFINITION",
        "LIST_RENDERING",
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "GLOBAL",
        ["UNIQUE", "SLOT"],
        "OTHER_DIRECTIVES",
        "OTHER_ATTR",
        "CONTENT",
        "EVENTS",
        "TWO_WAY_BINDING",
      ],
      "alphabetical": true
    }],
    "import/prefer-default-export": "off",
    "func-names": "off",
    "no-underscore-dangle": "off",
    "no-prototype-builtins": "off",
    "max-len": [2, { code: 120, ignorePattern: '^import .*' }],
    "no-param-reassign": "off",
    "import/extensions": "off",
    "no-plusplus": 'off',
    "prefer-destructuring": "off",
    "global-require": "off",
    "import/no-dynamic-require": "off",
    "no-return-assign": "off",
    "no-multi-str": "off",
    "import/no-cycle": "off",
    "guard-for-in": "off",
    "no-restricted-syntax": "off",
    "valid-typeof": "off",
    "no-cond-assign": "off",
    "vue/no-mutating-props": "off",
    "vue/require-default-prop": "off",
    "vue/require-prop-types": "off",
    "array-callback-return": "off",
    "vue/no-template-shadow": "off",
    "no-continue": "off",
    "no-multi-assign": "off",
    "block-scoped-var": "off",
    "vars-on-top": "off",
    "no-var": "off",
    "no-await-in-loop": "off",
    "class-methods-use-this": "off",
    "no-restricted-globals": "off",
    "no-restricted-properties": "off",
    "no-bitwise": "off",
    "no-tabs": "off",
    "no-template-curly-in-string": "off"
  },
};

