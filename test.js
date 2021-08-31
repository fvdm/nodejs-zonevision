/*
Name:         test.js
Description:  ZoneVision API access (unofficial)
Author:       Franklin (https://fvdm.com)
Source:       https://github.com/fvdm/nodejs-zonevision
License:      Unlicense (Public Domain, see LICENSE file)
*/

const dotest = require ('dotest');
const app = require ('./');

const timeout = process.env.testTimeout || 5000;


dotest.add ('Module', async test => {
  test ()
    .isFunction ('fail', 'exports', app)
    .info (`Timeout: ${timeout}`)
    .done ()
  ;
});


dotest.add ('Error: timeout', async test => {
  let data;
  let error;

  try {
    data = await app ({
      zone: 'dnsimple.com',
      timeout: 1,
    });
  }
  catch (err) {
    error = err;
  }

  test ()
    .isError ('fail', 'error', error)
    .isExactly ('fail', 'error.code', error && error.code, 'TIMEOUT')
    .isUndefined ('fail', 'data', data)
    .done ()
  ;
});


dotest.add ('Error: API error', async test => {
  let data;
  let error;

  try {
    data = await app ({
      zone: 'invalid-',
    });
  }
  catch (err) {
    error = err;
  }

  test ()
    .isError ('fail', 'error', error)
    .isExactly ('fail', 'error.message', error && error.message, 'Name not found')
    .isNumber ('fail', 'error.statusCode', error && error.statusCode)
    .isCondition ('fail', 'error.statusCode', error && error.statusCode, '>=', 300)
    .isUndefined ('fail', 'data', data)
    .done ()
  ;
});


dotest.add ('Lookup', async test => {
  try {
    const data = await app ({
      zone: 'github.com',
      timeout,
    });

    test ()
      .isObject ('fail', 'data', data)
      .isExactly ('fail', 'data.name', data && data.name, 'github.com')
      .done ()
    ;
  }
  catch (err) {
    test (err).done();
  }
});


dotest.run ();
