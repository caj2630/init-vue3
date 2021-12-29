module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    commonjs: true,
    amd: true
  },
  extends: [
    "eslint:recommended",
     "plugin:vue/base",
     "plugin:vue/vue3-recommended",
     "plugin:vue/vue3-essential",
     "@vue/typescript/recommended",
     "plugin:@typescript-eslint/eslint-recommended",
     "plugin:@typescript-eslint/recommended"
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],

  globals: {
    process: true
  },
  rules: {
    // console
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // class
    'lines-between-class-members': ['error', 'always'],
    // vue
    'vue/html-self-closing': [
      'error',
      {
        // html close auto
        html: {
          void: 'always', // must always otherwise prettier will conflict
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    // 事件名小写
    'vue/custom-event-name-casing': [
      'error',
      'kebab-case',
      {
        ignores: []
      }
    ],
    // 组件名书写方式
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: ['/^router-.*/']
      }
    ],
    // 注释的空格行为
    'vue/html-comment-content-spacing': [
      'error',
      'always',
      {
        exceptions: []
      }
    ],
    // 各种行为换行
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'function'
      }, // 函数前填充空行
      {
        blankLine: 'always',
        prev: '*',
        next: 'export'
      }, // export前填充空行
      {
        blankLine: 'always',
        prev: '*',
        next: 'block'
      }, // {} 前换行
      {
        blankLine: 'always',
        prev: '*',
        next: 'block-like'
      }, // {} 前换行
      {
        blankLine: 'always',
        prev: '*',
        next: 'expression'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'multiline-block-like'
      }, // 多类{}前填充空行
      {
        blankLine: 'always',
        prev: 'multiline-let',
        next: '*'
      }, // 多个let后空行
      {
        blankLine: 'always',
        prev: 'multiline-const',
        next: '*'
      }, // 多个cont后空行
      {
        blankLine: 'always',
        prev: 'const',
        next: '*'
      } // 多个cont后空行
    ],
    // template script style之间换行
    'vue/padding-line-between-blocks': ['error', 'always'],
    // 限制函数的最大行数 100行
    'max-lines-per-function': [
      'error',
      {
        max: 100,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    // 关闭 nay 无法使用的提示
    '@typescript-eslint/no-explicit-any': 'off',
    // 允许非详细说明
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: false
      }
    ],
    '@typescript-eslint/no-var-requires': 0
  }
};
