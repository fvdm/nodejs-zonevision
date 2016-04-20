/*
Name:         test.js
Description:  ZoneVision API access (unofficial)
Author:       Franklin van de Meent (https://frankl.in)
Source:       https://github.com/fvdm/nodejs-zonevision
Contact:      https://github.com/fvdm/nodejs-zonevision/issues
License:      Unlicense (Public Domain, see LICENSE file)
*/

var dotest = require ('dotest');
var app = require ('./');

var timeout = process.env.testTimeout || 15000;


dotest.add ('Module', function (test) {
  test ()
    .isFunction ('fail', 'exports', app)
    .info ('Timeout:  ' + timeout)
    .done ();
});


dotest.add ('Lookup', function (test) {
  app ('github.com', timeout, function (err, data) {
    test (err)
      .isObject ('fail', 'data', data)
      .isExactly ('fail', 'data.name', data && data.name, 'github.com')
      .done ();
  });
});


dotest.run ();
