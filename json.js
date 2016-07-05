var Concat = require('./string')
module.exports = function (cb) {
  return Concat(function (err, data) {
    if(err) return cb(err)
    //DEAR READER: never call a callback inside a try.
    //if there is a thrown error inside cb() then it will
    //be caught, and then the error passed to the callback.
    //That will not be easy to debug. Instead assign to a
    //variable and callback outside the try-catch.
    try {
      data = JSON.parse(data)
    } catch (err) {
      return cb(err)
    }
    cb(null, data)
  })
}
