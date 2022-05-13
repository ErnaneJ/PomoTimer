
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./phosphor-react.cjs.production.min.js')
} else {
  module.exports = require('./phosphor-react.cjs.development.js')
}
