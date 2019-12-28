import { generateAccessToken } from '../index';
import { Client } from '../../client';
import {
  RefreshTokenResponse,
  InvalidRefreshTokenResponse,
} from '../../responses';

describe('generateAccessToken', () => {
  let client: Client;

  beforeAll(() => {
    client = new Client({ client_id: process.env.CLIENT_ID });
  });

  it('should genereate the access token successfully when the body has correct keys', async () => {
    const body = {
      refresh_token: process.env.REFRESH_TOKEN || '',
      client_id: process.env.CLIENT_ID || '',
      client_secret: process.env.CLIENT_SECRET || '',
    };
    const resp = await generateAccessToken(client, body);
    const {
      access_token: accessToken,
      refresh_token: refreshToken,
    } = resp as RefreshTokenResponse;

    expect(accessToken).toBeTruthy();
    expect(refreshToken).toBeTruthy();
  });

  it('should fail to generate the access token when the body has any incorrect key', async () => {
    const body = {
      refresh_token: `123`,
      client_id: '',
      client_secret: '',
    };
    const resp = await generateAccessToken(client, body);
    const { status, success } = resp as InvalidRefreshTokenResponse;

    expect(status).toBe(400);
    expect(success).toBeFalsy();
  });
});
