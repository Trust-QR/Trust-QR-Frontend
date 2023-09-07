/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      /** IT SHOUD be of WIndows Ip address Currently it is for testing only */
        DOMAIN_URL: 'http://172.20.106.220:8000',
      }
}

module.exports = nextConfig
