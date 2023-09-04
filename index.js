/*
Name:         zonevision
Description:  ZoneVision API access (unofficial)
Author:       Franklin (https://fvdm.com)
Source:       https://github.com/fvdm/nodejs-zonevision
License:      Unlicense (Public Domain, see LICENSE file)
*/


/**
 * Send API call
 *
 * @param   {object}  args
 * @param   {string}  args.zone            Hostname to lookup
 * @param   {number}  [args.timeout=5000]  Request time out in ms
 *
 * @return  {Promise<object>}
 */

module.exports = async ({
  zone,
  timeout = 5000,
}) => {
  const url = `https://api.zone.vision/${zone}`;
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'zonevision.js (https://github.com/fvdm/nodejs-zonevision)',
    },
    signal: AbortSignal.timeout (timeout),
  };

  const res = await fetch (url, options);
  const data = await res.json();

  if (data.error) {
    const error = new Error (data.error);

    error.statusCode = res.status;
    throw error;
  }

  return data;
};
