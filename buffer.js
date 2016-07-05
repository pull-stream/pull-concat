var pull = require('pull-stream/pull')
var collect = require('pull-stream/sinks/collect')

module.exports = function (cb) {
  return Collect(function (err, ary) {
    if(err) cb(err)
    else    cb(null, Buffer.concat(ary))
  })
}
