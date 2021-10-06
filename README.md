zonevision
==========

Unofficial Node.js module for DNS diagnostics
with the [DNSimple](https://dnsimple.com) ZoneVision API.

[![Changelog](https://img.shields.io/npm/v/zonevision.svg?maxAge=3600)](https://github.com/fvdm/nodejs-zonevision/blob/master/CHANGELOG.md)
[![Build Status](https://github.com/fvdm/nodejs-zonevision/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/fvdm/nodejs-zonevision/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/fvdm/nodejs-zonevision/badge.svg?branch=master)](https://coveralls.io/github/fvdm/nodejs-zonevision?branch=master)

* [Node.js](https://nodejs.org)
* [API documentation](https://api.zone.vision)


Usage
-----

```js
const zonevision = require ('zonevision');

zonevision ({ zone: 'dnsimple.com' })
  .then (data => console.dir (data, {
    depth: null,
    colors: true,
  })
  .catch (console.error)
;
```


Installation
------------

`npm install zonevision`


Configuration
-------------

param     | type   | default | description
:---------|:-------|:--------|:-----------
[timeout] | number | `15000` | Request timeout in ms


```js
// Set timeout to 5 seconds
zonevision ({
  zone: 'dnsimple.com',
  timeout: 5000,
});
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

For more information, please refer to <https://unlicense.org>


Author
------

[Franklin](https://fvdm.com)
| [Buy me a coffee](https://fvdm.com/donating )

