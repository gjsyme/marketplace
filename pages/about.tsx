import Head from '../components/head'
import { 
  Box,
  Container,
  Heading,
  Link,
  Text
} from '@chakra-ui/react';

export default function About() {
  return (
    <>
      <Head title={'About'} />
      <Container minH={'80vh'} maxW={'80ch'}>
        <Box mt={'1em'}>
          <Heading>Mirage</Heading>
          <Text>
            We are builders that want to deliver Augmented Reality's final form to
            the world, powered by blockchain and NFTs. We recognized this as the
            gigantic challenge that it is, but we also know that we can make it
            a reality by working together.
          </Text>
          <Text>
            See more at {' '}
            <Link href="https://mirage.wtf" target="_blank" noreferrer externalLink>mirage.wtf</Link>
          </Text>
        </Box>
        <Box mt={'1em'}>
          <Heading>Zora Fork Marketplace</Heading>
          <Text>
            The Mirage Marketplace is meant as a 3d-/AR-only NFT marketplace to
            allow for the exchange of NFTs that can by found in the Mirage.
          </Text>
        </Box>
      </Container>
    </>
  )
}
