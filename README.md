zonevision
==========

Unofficial Node.js module for DNS diagnostics with the ZoneVision API.

[![npm](https://img.shields.io/npm/v/zonevision.svg?maxAge=3600)](https://github.com/fvdm/nodejs-zonevision/blob/master/CHANGELOG.md)
[![Build Status](https://travis-ci.org/fvdm/nodejs-zonevision.svg?branch=master)](https://travis-ci.org/fvdm/nodejs-zonevision)
[![Dependency Status](https://gemnasium.com/badges/github.com/fvdm/nodejs-zonevision.svg)](https://gemnasium.com/github.com/fvdm/nodejs-zonevision#runtime-dependencies)


* [Node.js](https://nodejs.org)
* [ZoneVision](http://zone.vision)
* [API documentation](https://api.zone.vision)


Usage
-----

```js
var zonevision = require ('zonevision');

zonevision ('dnsimple.com', function (err, data) {
  if (err) {
    console.log (err);
    return;
  }

  console.log (data);
});
```


Installation
------------

`npm install zonevision`


Configuration
-------------

You can override the default 15 seconds `timeout` per request
with the optional second argument. The value is in ms, 1000 = 1 sec.


```js
// Set timeout to 5 seconds
zonevision ('dnsimple.com', 5000, processResponse);
```


License
-------

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org>


Author
------

[Franklin van de Meent](https://frankl.in)
