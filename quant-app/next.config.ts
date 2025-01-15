import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg)$/,
        type: "asset/resource",
        generator: {
          filename: "static/media/[name].[hash][ext]",
        },
      });
      return config;
    },
  };

export default withNextIntl(nextConfig);
