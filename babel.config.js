module.exports = api => {
  api.cache(true)

  const config = {
    presets: [
      ['@babel/preset-env', {
        targets: {
          safari: 14,
          chrome: 87,
          firefox: 85
        },
        useBuiltIns: 'usage',
        corejs: {version: 3, proposals: true}
      }]
    ],
    plugins: []
  }

  return config
}
