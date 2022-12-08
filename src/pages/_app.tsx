/* eslint-disable react/jsx-props-no-spreading */
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";

import defaultSEOConfig from "../../next-seo.config";
import { Chakra } from "lib/components/Chakra";
import Layout from "lib/layout";

import "lib/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

const { chains, provider } = configureChains(
  [chain.goerli, chain.mainnet],
  [alchemyProvider({ apiKey: "2MMG2yEHbH1BM9qQry6bYUC_oTpG86Qh" })]
);

const { connectors } = getDefaultWallets({
  appName: "ContentFi",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Chakra>
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            />
            <meta
              name="og:title"
              content="CBE(Can't Be Evil) NFT Creator Tools"
            />
            <meta name="og:type" content="website" />
            <meta name="og:url" content="https://cbe.tools" />
            <meta
              name="og:image"
              content="https://i.ibb.co/g9jRQWY/Screenshot-2022-12-08-at-10-25-42.png"
            />
          </Head>
          <DefaultSeo {...defaultSEOConfig} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Chakra>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default MyApp;
