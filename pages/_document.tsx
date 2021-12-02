import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
class CreateAuctionHouseDocument extends Document {
  render() {
    return (
      <>
        <Html>
          <Head>{/* Place any custom scripts here */}</Head>
          <body>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    )
  }
}

export default CreateAuctionHouseDocument
