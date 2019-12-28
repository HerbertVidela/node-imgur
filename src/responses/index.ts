export type ImgurApiResponse = {
  data: {
    [key: string]: any | undefined;
  };
  success: boolean;
  status: number;
};

export type InvalidRefreshTokenResponse = ImgurApiResponse & {
  success: boolean;
  status: 400;
};

export type AuthenticationRequiredResponse = ImgurApiResponse & {
  success: boolean;
  status: 401;
};

export type InvalidAccessTokenResponse = ImgurApiResponse & {
  success: boolean;
  status: 403;
};

export type RefreshTokenResponse = {
  access_token: string;
  expires_in: number;
  token_type: 'bearer';
  scope: string;
  refresh_token: string;
  account_id: number;
  account_username: string;
};

export type UploadSuccessResponse = ImgurApiResponse & {
  data: {
    id: string;
    title: string | null;
    description: string | null;
    datetime: number;
    type: string;
    animated: boolean;
    width: number;
    height: number;
    size: number;
    views: number;
    bandwidth: number;
    vote: any | null;
    favorite: boolean;
    nsfw: any | null;
    section: any | null;
    account_url: string | null;
    account_id: number;
    is_ad: boolean;
    in_most_viral: boolean;
    has_sound: boolean;
    tags: string[];
    ad_type: number;
    ad_url: string;
    edited: string;
    in_gallery: boolean;
    deletehash: string;
    name: string;
    link: string;
  };
  success: true;
  status: 200;
};

export type GetSettingsResponse = ImgurApiResponse & {
  data: {
    account_url: string;
    email: string;
    avatar: string;
    cover: string;
    public_images: boolean;
    album_privacy: string;
    pro_expiration: boolean;
    accepted_gallery_terms: boolean;
    active_emails: string[];
    messaging_enabled: boolean;
    comment_replies: boolean;
    blocked_users: string[];
    show_mature: boolean;
    newsletter_subscribed: boolean;
    first_party: boolean;
  };
  success: true;
  status: 200;
};
