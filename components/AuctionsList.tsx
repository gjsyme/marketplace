import { FetchStaticData } from "@zoralabs/nft-hooks";
import { NFTPreview } from "@zoralabs/nft-components";
import { useRouter } from "next/router";
import { Flex, Grid, GridItem } from '@chakra-ui/react';

const AuctionItem = (props) => {
  return (
    <>
      {JSON.stringify(props)}
    </>
  )
}

export const AuctionsList = ({ tokens }: { tokens: any[] }) => {
  const router = useRouter();

  return (
    <Grid
      templateColumns={["repeat(1,1fr)", null, "repeat(2,1fr)", null, "repeat(3,1fr)", "repeat(4,1fr)"]}
      w="100%"
      gap={4}
    >
      {tokens &&
        tokens.map((token) => {
          const tokenInfo = FetchStaticData.getIndexerServerTokenInfo(token);
          return (
            <GridItem key={tokenInfo.tokenId}>
              <Flex justify="center">
                {/* this will need to be replaced with our own chakra component */}
                {/* Base it on NFTPreview.js and the components called there */}
                <NFTPreview
                  initialData={token}
                  key={tokenInfo.tokenId}
                  id={tokenInfo.tokenId}
                  contract={tokenInfo.tokenContract}
                  onClick={(evt) =>
                    router.push(
                      `/token/${tokenInfo.tokenContract}/${tokenInfo.tokenId}`
                    )
                  }
                  useBetaIndexer={true}
                />
                {/* <AuctionItem
                  initialDate={token}
                  key={tokenInfo.tokenId}
                  id={tokenInfo.tokenId}
                  contract={tokenInfo.tokenContract}
                  onClick={() =>
                    router.push(
                      `/token/${tokenInfo.tokenContract}/${tokenInfo.tokenId}`
                    )
                  }
                  useBetaIndexer={true}
                ></AuctionItem> */}
              </Flex>
            </GridItem>
          );
        })}
    </Grid>
  );
};
