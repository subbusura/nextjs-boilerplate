/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "standalone", // Required for docker image
  experimental:{
     serverActions:{
      allowedOrigins: ["localhost:3000"]
     }
  }
};

module.exports = nextConfig;
