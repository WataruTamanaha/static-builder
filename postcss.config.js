module.exports = {
  map: false,
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')({
      warnForDuplicates: false
    }),
    require('cssnano')()
  ]
}
