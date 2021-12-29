module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        modules: 'commonjs'
      }

    ],
    [
      '@babel/preset-typescript',
      {
        allExtension: true
      }
    ]

  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        helpers: true,
        regenerator: true,
        useESModules: true
      }
    ],
    '@babel/proposal-class-properties',
    '@babel/plugin-transform-typescript'
  ]
}
