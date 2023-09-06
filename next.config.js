/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      /** IT SHOUD be of WIndows Ip address Currently it is for testing only */
        DOMAIN_URL: 'http://192.168.63.181:8070',
      }
}

module.exports = nextConfig
