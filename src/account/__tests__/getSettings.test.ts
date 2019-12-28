import { getSettings } from '../getSettings';
import { Client } from '../../client';

describe('getSettings', () => {
  it('should get the account settings successfully when the access token is valid', async () => {
    const client = new Client({ access_token: process.env.ACCESS_TOKEN });
    const resp = await getSettings(client);

    expect(resp.status).toEqual(200);
  });

  it('should fail to get the account settings when the access token is invalid', async () => {
    const client = new Client({ access_token: 'asdf' });
    const resp = await getSettings(client);

    expect(resp.status).toEqual(403);
    expect(resp.success).toBeFalsy();
  });
});
