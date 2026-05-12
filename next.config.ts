import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "v3b.fal.media" },
      { protocol: "https", hostname: "*.fal.media" },
    ],
  },
  async redirects() {
    return [
      { source: "/stretch", destination: "/courses", permanent: true },
      { source: "/trainer", destination: "/trainers", permanent: true },
      { source: "/qna", destination: "/faq", permanent: true },
      { source: "/lp/family", destination: "/for/family", permanent: true },
      {
        source: "/lp/selfstretch",
        destination: "/for/family",
        permanent: true,
      },
      { source: "/lp/stretch", destination: "/", permanent: true },
      {
        source: "/lp/stretch-nagoya",
        destination: "/campus/nagoya",
        permanent: true,
      },
      {
        source: "/lp/stretch-fukuoka",
        destination: "/campus/fukuoka",
        permanent: true,
      },
      {
        source: "/lp/stretch01_osaka",
        destination: "/campus/osaka",
        permanent: true,
      },
      {
        source: "/lp/recruitment-A",
        destination: "/for/business",
        permanent: true,
      },
      {
        source: "/license2",
        destination: "/license/holders",
        permanent: true,
      },
      { source: "/lp/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
