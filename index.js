/*
Name:         zonevision
Description:  ZoneVision API access (unofficial)
Author:       Franklin van de Meent (https://frankl.in)
Source:       https://github.com/fvdm/nodejs-zonevision
Contact:      https://github.com/fvdm/nodejs-zonevision/issues
License:      Unlicense (Public Domain, see LICENSE file)
*/

var httpreq = require ('httpreq');


/**
 * Process API response
 *
 * @callback callback
 * @param err {Error, null} - Error
 * @param res {object} - Response details
 * @param callback {function} - `function (err, data) {}`
 * @returns {void}
 */

function processResponse (err, res, callback) {
  var data = res && res.body || '';
  var error = null;

  if (err) {
    callback (err);
    return;
  }

  try {
    data = JSON.parse (data);
  } catch (e) {
    callback (e);
    return;
  }

  if (data.error) {
    error = new Error ('API error');
    error.statusCode = res.statusCode;
    error.error = data.error;
    callback (error);
    return;
  }

  if (res.statusCode >= 300) {
    error = new Error ('API error');
    error.statusCode = res.statusCode;
    error.data = data;
    callback (error);
    return;
  }

  callback (null, data);
}


/**
 * Send API call
 *
 * @callback callback
 * @param hostname {string} - Hostname to lookup
 * @param [timeout=15000] - Request time out in ms, 1000 = 1 second
 * @param callback {function} - `function (err, data) {}`
 */

function sendRequest (hostname, timeout, callback) {
  var error = null;

  var options = {
    url: 'https://api.zone.vision/' + hostname,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'zonevision.js (https://github.com/fvdm/nodejs-zonevision)'
    }
  };

  if (!hostname || typeof hostname !== 'string') {
    error = new Error ('invalid hostname');
    error.hostname = hostname;
    callback (error);
    return;
  }

  if (typeof timeout === 'function') {
    callback = timeout;
    timeout = 15000;
  }

  options.timeout = timeout;

  httpreq.doRequest (options, function (err, res) {
    processResponse (err, res, callback);
  });
}


/**
 * Module interface
 */

module.exports = sendRequest;
