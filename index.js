/*
Name:         zonevision
Description:  ZoneVision API access (unofficial)
Author:       Franklin (https://fvdm.com)
Source:       https://github.com/fvdm/nodejs-zonevision
License:      Unlicense (Public Domain, see LICENSE file)
*/

const { doRequest } = require ('httpreq');


/**
 * Process API response
 *
 * @param   {object}  res  Response details
 *
 * @return  {Promise<object>}
 */

async function processResponse (res) {
  let data;

  try {
    data = JSON.parse (res.body);
  }
  catch (err) {
    throw err;
  }

  if (data.error) {
    const error = new Error (data.error);

    error.statusCode = res.statusCode;
    throw error;
  }

  if (res.statusCode >= 300) {
    const error = new Error ('API error');

    error.statusCode = res.statusCode;
    error.data = data;
    throw error;
  }

  return data;
}


/**
 * Send API call
 *
 * @param   {string}  zone            Hostname to lookup
 * @param   {number}  [timeout=5000]  Request time out in ms
 *
 * @return  {Promise<object>}
 */

modules.exports = async function sendRequest ({
  zone,
  timeout = 5000,
}) {
  if (typeof zone !== 'string') {
    const error = new Error ('invalid hostname');

    error.zone = zone;
    throw error;
  }

  const options = {
    url: `https://api.zone.vision/${zone}`,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'zonevision.js (https://github.com/fvdm/nodejs-zonevision)'
    },
    timeout,
  };

  return doRequest (options)
    .then (processResponse)
  ;
};
