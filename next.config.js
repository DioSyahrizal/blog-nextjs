const ghPages = process.env.DEPLOY_TARGET === "gh-pages";

module.exports = {
  assetPrefix: ghPages ? "/diosyahrizal.github.io/" : "", // customize this value
};
