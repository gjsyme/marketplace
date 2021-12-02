import Image from 'next/image';
import mirageLogo from '../public/favicon-mirage.ico';
import {
  Box,
  chakra,
  HStack
} from '@chakra-ui/react';
import { NavLink } from './NavLink';

export const Footer = () => {
  return (
    <chakra.footer bgImage="url('/mirage_wave_thin.jpg')">
      <footer>
        <HStack justify="space-between">
          <NavLink href="https://mirage.wtf" isExternal>
            <Image src={mirageLogo} alt="Mirage Logo"/>
          </NavLink>
          <NavLink href="https://docs.zora.co">Powered by Zora</NavLink>
        </HStack>
      </footer>
    </chakra.footer>
  )
}
