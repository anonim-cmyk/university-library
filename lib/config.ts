const config = {
  env: {
    apiEndpoint: "https://university-library-beta.vercel.app",
    prodApiEndpoint: process.env.NEXT_PUBLIC__PROD_API_ENDPOINT!,

    imageKit: {
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
    },
    databaseUrl: process.env.NEXT_PUBLIC_DATABASE_URL!,
    upstash: {
      redisUrl: process.env.UPSTASH_REDIS_URL,
      redisToken: process.env.UPSTASH_REDIS_TOKEN,
      qtashUrl: process.env.QTASH_URL,
      qtashToken: process.env.QTASH_TOKEN!,
    },
    resend: process.env.RESEND_TOKEN!,
  },
};
export default config;
