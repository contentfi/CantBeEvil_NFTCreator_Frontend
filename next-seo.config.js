/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "ContentFi",
  titleTemplate: "%s | ContentFi",
  defaultTitle: "ContentFi",
  description: "Applying Your NFT to the a16z “Can’t Be Evil” Licenses.",
  openGraph: {
    url: "https://cbe.tools/",
    title: "ContentFi",
    description: "Applying Your NFT to the a16z “Can’t Be Evil” Licenses.",
    images: [
      {
        url: "https://cbe.tools/45.jpg",
        alt: "cbe og image",
      },
    ],
    site_name: "ContentFi",
  },
  twitter: {
    handle: "@0xContentFi",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
