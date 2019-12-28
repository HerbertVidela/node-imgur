import { Client } from '../client';
import { ACCOUNT_SETTINGS } from '../endpoints';
import { InvalidAccessTokenResponse, GetSettingsResponse } from '../responses';

export function getSettings(
  client: Client,
): Promise<GetSettingsResponse | InvalidAccessTokenResponse> {
  return client.get(ACCOUNT_SETTINGS);
}
