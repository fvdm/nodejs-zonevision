/*
Name:         zonevision
Description:  ZoneVision API access (unofficial)
Author:       Franklin (https://fvdm.com)
Source:       https://github.com/fvdm/nodejs-zonevision
License:      Unlicense (Public Domain, see LICENSE file)
*/

const { doRequest } = require ('httpreq');


/**
 * Send API call
 *
 * @param   {string}  zone            Hostname to lookup
 * @param   {number}  [timeout=5000]  Request time out in ms
 *
 * @return  {Promise<object>}
 */

module.exports = async ({
  zone,
  timeout = 5000,
}) => {
  let data;
  const options = {
    url: `https://api.zone.vision/${zone}`,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'zonevision.js (https://github.com/fvdm/nodejs-zonevision)',
    },
    timeout,
  };

  const res = await doRequest (options);

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

  return data;
};
