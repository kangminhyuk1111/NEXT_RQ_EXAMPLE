//next.config.js
/** @type {import('next').NextConfig} */

const API_KEY = '4r2MSxI1MaeVEVdIYloEsxJZ2vJCQfP7vIxD4hPgXUtbPbmIXylX3KSmBRqxqjfKqgQ24xag4QEY%2F%2FzT2hq82w%3D%3D';

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/asd',
        destination: `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&base_date=20220930&base_time=0600&nx=55&ny=127`,
        permanent: false
      },
      {
        source: '/',
        destination: `https://localhost:3000/api/hello`
      }
    ];
  },
};
