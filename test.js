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


dotest.add ('Error: invalid hostname', function (test) {
  app ('', timeout, function (err, data) {
    test ()
      .isError ('fail', 'err', err)
      .isExactly ('fail', 'err.message', err && err.message, 'invalid hostname')
      .isUndefined ('fail', 'data', data)
      .done ();
  });
});


dotest.add ('Error: timeout', function (test) {
  app ('dnsimple.com', 1, function (err, data) {
    test ()
      .isError ('fail', 'err', err)
      .isExactly ('fail', 'err.code', err && err.code, 'TIMEOUT')
      .isUndefined ('fail', 'data', data)
      .done ();
  });
});


dotest.add ('Error: API error', function (test) {
  app ('invalid-', timeout, function (err, data) {
    test ()
      .isError ('fail', 'err', err)
      .isExactly ('fail', 'err.message', err && err.message, 'API error')
      .isNumber ('fail', 'err.statusCode', err && err.statusCode)
      .isCondition ('fail', 'err.statusCode', err && err.statusCode, '>=', 300)
      .isExactly ('warn', 'err.error', err && err.error, 'Domain not found')
      .isUndefined ('fail', 'data', data)
      .done ();
  });
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
