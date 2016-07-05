var pull = require('pull-stream/pull')
var Collect = require('pull-stream/sinks/collect')
var utf8 = require('pull-utf8-decoder')

module.exports = function (cb) {
  return pull(
    utf8(),
    pull.collect(function (err, ary) {
      if(err) cb(err)
      else    cb(null, ary.join(''))
    })
  )
}
