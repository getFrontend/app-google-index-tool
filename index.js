import fs from 'node:fs';
import { google } from 'googleapis';
import key from './service_account.json' assert {
  type: 'json',
  integrity: 'sha384-ABC123'
};
import request from 'request';

const URL_AUTH = 'https://www.googleapis.com/auth/indexing';
const URL_BATCH = 'https://indexing.googleapis.com/batch';

const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  [URL_AUTH],
  null
);

const batch = fs
  .readFileSync('urls.txt')
  .toString()
  .split('\n');

jwtClient.authorize((err, tokens) => {
  if (err) {
    console.log(err);
    return;
  }

  const items = batch.map(line => {
    return {
      'Content-Type': 'application/http',
      'Content-ID': '',
      body:
        'POST /v3/urlNotifications:publish HTTP/1.1\n' +
        'Content-Type: application/json\n\n' +
        JSON.stringify({
          url: line,
          type: 'URL_UPDATED'
        })
    };
  });

  const options = {
    url: URL_BATCH,
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/mixed'
    },
    auth: { bearer: tokens.access_token },
    multipart: items
  };
  request(options, (err, resp, body) => {
    console.log(body);
  });
});
