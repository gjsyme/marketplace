import { Box, HStack } from '@chakra-ui/react';
import { NavLink } from './NavLink';

export const Header = () => {
  return (
    <Box bgImage="url('/mirage_wave_thin.jpg')">
      <header>
        <HStack justify="space-between" px={6}>
          <NavLink href="/">Auctions</NavLink>
          <NavLink href="/list">Link</NavLink>
          <NavLink href="/about">About</NavLink>
        </HStack>
      </header>
    </Box>
  )
}
