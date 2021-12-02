import type { AppProps } from 'next/app'

import { NetworkIDs } from '@zoralabs/nft-hooks'
import { MediaConfiguration } from '@zoralabs/nft-components'
import { Web3ConfigProvider } from '@zoralabs/simple-wallet-provider'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { ChakraProvider } from '@chakra-ui/provider'
import theme from './theme';

export default function CreateAuctionHouseApp({
  Component,
  pageProps
}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Web3ConfigProvider
        networkId={parseInt(process.env.NEXT_PUBLIC_NETWORK_ID as string, 10)}
        rpcUrl={process.env.NEXT_PUBLIC_RPC_URL as string || undefined}
      >
        <MediaConfiguration
          networkId={process.env.NEXT_PUBLIC_NETWORK as NetworkIDs}
        >
            <Header />
            <main>
              <Component {...pageProps} />
            </main>
            <Footer/>
        </MediaConfiguration>
      </Web3ConfigProvider>
    </ChakraProvider>
  );
}
