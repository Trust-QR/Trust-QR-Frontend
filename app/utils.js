export const get_api_url = () => {
  const url = process.env.url || 'Your Api url';
  return url;
}

export const getApiUrl = () => {
  const DOMAIN_URL = process.env.DOMAIN_URL || 'default_domain_url_here';
  return DOMAIN_URL;
};

