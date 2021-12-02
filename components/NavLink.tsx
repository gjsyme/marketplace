import { Link, Text } from '@chakra-ui/react';
import React from 'react';

// compose the link and its text in case we want to get fancy
const NavLinkText = (props: {children: string | React.ReactChildren | React.ReactChild}) => {
  if(typeof props.children === 'string'){
    return (<Text fontSize="xl" textTransform="uppercase">{props.children}</Text>);
  }else{
    return <>{props.children}</>;
  }
};
export const NavLink = (props: {href: string, isExternal?: boolean, children: string | React.ReactChildren | React.ReactChild}) => (
  <Link 
    isExternal={props.isExternal}
    href={props.href} 
    p={4} 
    color="gray.900" 
    _hover={{ backgroundColor: "gray.100" }} 
    borderRadius="sm"
  >
    <NavLinkText>{props.children}</NavLinkText>
  </Link>
);