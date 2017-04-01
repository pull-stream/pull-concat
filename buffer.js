var collect = require('pull-stream/sinks/collect')

module.exports = function (cb) {
  return collect(function (err, ary) {
    if(err) cb(err)
    else    cb(null, Buffer.concat(ary))
  })
}
