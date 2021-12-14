import Head from "../components/head";
import { GetStaticProps } from "next";
import { 
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

import { AuctionsList } from "../components/AuctionsList";

import {
  FetchStaticData,
  MediaFetchAgent,
  NetworkIDs,
} from "@zoralabs/nft-hooks";

export default function Home({ tokens }: { tokens: any }) {

  return (
    <HStack align="start">
      <VStack maxW={'20vw'} minH={'60vh'}>
        <Text fontSize="xl">Menu Header</Text>
        <VStack>
          <Text>Item One</Text>
          <Text>Item Two</Text>
        </VStack>
      </VStack>
      <HStack minH="90vh">
        <VStack>
          <Head />
          <Heading mt="1em">{process.env.NEXT_PUBLIC_APP_TITLE}</Heading>
          <AuctionsList tokens={tokens} />
        </VStack>
      </HStack>
    </HStack>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const fetchAgent = new MediaFetchAgent(
    process.env.NEXT_PUBLIC_NETWORK_ID as NetworkIDs
  );
  const contractAddress = process.env
    .NEXT_PUBLIC_TARGET_CONTRACT_ADDRESS as string;
  const tokens = await FetchStaticData.fetchZoraIndexerList(fetchAgent, {
    curatorAddress: process.env.NEXT_PUBLIC_CURATORS_ID as any,
    collectionAddresses: contractAddress ? contractAddress.split(',') : undefined,
    limit: 100,
    offset: 0,
  });

  return {
    props: {
      tokens,
    },
    revalidate: 60,
  };
};