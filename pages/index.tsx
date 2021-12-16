import Head from "../components/head";
import { GetStaticProps } from "next";
import { 
  Heading,
  HStack,
  VStack,
} from '@chakra-ui/react';

import { AuctionsList } from "../components/AuctionsList";
import { FilterPanel } from "../components/FilterPanel";

import {
  FetchStaticData,
  MediaFetchAgent,
  NetworkIDs,
} from "@zoralabs/nft-hooks";

export default function Home({ tokens }: { tokens: any }) {

  return (
    <HStack align="start">
      <FilterPanel/>
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