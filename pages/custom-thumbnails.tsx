import Head from "../components/head";
import { GetStaticProps } from "next";

import {
  FetchStaticData,
  MediaFetchAgent,
  NetworkIDs,
} from "@zoralabs/nft-hooks";

import { MediaThumbnailWrapper } from "@zoralabs/nft-components/dist/nft-preview/MediaThumbnailWrapper";
import { NFTPreview, PreviewComponents } from "@zoralabs/nft-components";
import { useRouter } from "next/router";
import { SyntheticEvent } from "react";

// Create A Token Thumbnail
const TokenThumbnail = ({
  token,
  linkDetails = true,
}: {
  token: any;
  linkDetails?: boolean;
}) => {
  const listed = token.auctions && token.auctions.length > 0;
  const router = useRouter();
  const linkTarget = listed ? `/${token.address}/${token.tokenId}` : "/list";

  const wrapperLink = linkDetails
    ? {
        onClick: (evt: SyntheticEvent) => {
          evt.preventDefault();
          router.push(linkTarget);
        },
        href: linkTarget,
      }
    : {};
  return (
    <NFTPreview
      key={`${token.tokenContract}-${token.tokenId}`}
      contract={token.tokenContract}
      id={token.tokenId}
      initialData={token}
      useBetaIndexer={true}
    >
      <div
        key={token.tokenId}
        className={`thumbnail-wrapper ${!listed ? "not-listed" : ""} ${
          token.auctions &&
          token.auctions.length > 0 &&
          (token.auctions[0].bidEvents.length > 0 ? "auction-live" : "listed")
        }`}
        {...wrapperLink}
      >
        <MediaThumbnailWrapper {...wrapperLink}>
          <PreviewComponents.MediaThumbnail />
          {token.auctions && token.auctions.length > 0 && (
            <PreviewComponents.PricingComponent />
          )}
        </MediaThumbnailWrapper>
      </div>
    </NFTPreview>
  );
};

// LIST THE TOKENS
const CustomAuctionsList = ({ tokens }: { tokens: any[] }) => {
  return (
    <div className="token-list-wrapper">
      {tokens &&
        tokens.map((token) => {
          const tokenInfo = FetchStaticData.getIndexerServerTokenInfo(token);
          return <TokenThumbnail token={token} key={tokenInfo.tokenId} />;
        })}
    </div>
  );
};

// INCLUDE IN THE PAGE
export default function Home({ tokens }: { tokens: any }) {
  return (
    <>
      <Head />
      <h1>{process.env.NEXT_PUBLIC_APP_TITLE}</h1>
      <CustomAuctionsList tokens={tokens} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const fetchAgent = new MediaFetchAgent(
    process.env.NEXT_PUBLIC_NETWORK_ID as NetworkIDs
  );
  const tokens = await FetchStaticData.fetchZoraIndexerList(fetchAgent, {
    curatorAddress: process.env.NEXT_PUBLIC_CURATORS_ID as string,
    collectionAddresses: process.env.NEXT_PUBLIC_TARGET_CONTRACT_ADDRESS
      ? (process.env.NEXT_PUBLIC_TARGET_CONTRACT_ADDRESS as string).split(",")
      : undefined,

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
