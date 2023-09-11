/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
      /** IT SHOUD be of WIndows Ip address Currently it is for testing only */
        DOMAIN_URL: 'http://172.25.163.97:8000',
        url:'http://127.0.0.1:8000/',
      }
}

module.exports = nextConfig
