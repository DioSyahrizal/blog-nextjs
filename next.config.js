const ghPages = process.env.DEPLOY_TARGET === "gh-pages";

module.exports = {
  //   assetPrefix: ghPages ? "/diosyahrizal.github.io/blog-nextjs/" : "", // customize this value
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};
