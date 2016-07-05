# pull-concat

concatenate a pull-stream of buffers into a string or buffer.

# example

``` js
var Concat = require('pull-concat/string')
pull(
  source_data,
  Concat(function (err, string) {
    if(err) throw err
    console.log(string)
  })
)
```

This will handle `utf8` characters correctly,
using [pull-utf8-decoder](http://npm.im/pull-utf8-decoder)
internally.

or, concat as a buffer

``` js
var Concat = require('pull-concat/buffer')
pull(
  source_data,
  Concat(function (err, buffer) {
    if(err) throw err
    console.log(buffer)
  })
)
```

## License

MIT


