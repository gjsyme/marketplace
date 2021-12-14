import { 
  Box, 
  HStack,
  Link,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react';
import Image from 'next/image';
import { NavLink } from './NavLink';

export const Header = () => {
  return (
    <Box bgImage="url('/mirage_wave_thin.jpg')">
      <header>
        <HStack justify="space-between" px={6}>
          <Link href="/">
            <Image src="/MirageLogo_White.svg" width="100%" height="100%" alt="Mirage"/>
          </Link>
          <HStack>
            <NavLink href="/list">List</NavLink>
            <NavLink href="/about">About</NavLink>
          </HStack>
        </HStack>
      </header>
    </Box>
  )
}
