import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  VStack
} from '@chakra-ui/react';
import { FaCaretLeft } from 'react-icons/fa';

interface FilterState{
  status: {
    all: Boolean,
    live: Boolean,
    sold: Boolean,
    underReserve: Boolean
  },
  mediaType: {
    audio: Boolean,
    static: Boolean,
    animated: Boolean
  },
  priceRange: {
    floor: Number,
    max: Number
  },
  collections: string[]
};


export const FilterPanel = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [currentFilter, setCurrentFilter] = useState<FilterState>({
    status: { all: true, live: false, sold: false, underReserve: false },
    mediaType: { audio: true, static: true, animated: true },
    priceRange: { floor: 0, max: 999999999 },
    collections: []
  });

  const toggleShowFilters = () => {
    setShowFilters(!showFilters);
  }
  const handleFilterToggle = (filterName: string) => {
    console.log('filter name',filterName);
    // do the update or directly modify that state object and save it
  }

  if(!showFilters){
    return <Button onClick={toggleShowFilters}>Filters</Button>;
  }
  return (
      <VStack maxW={'20vw'} minH={'60vh'} w={300}>
        <HStack spacing={4}>
          <IconButton 
            aria-label="Hide Filter Toggle" 
            onClick={toggleShowFilters} 
            title="Hide filters" 
            icon={<FaCaretLeft/>} />
          <Text fontSize="xl">Filter</Text>
        </HStack>

        <Accordion w={'100%'} allowToggle defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <Text fontSize="2em">
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  Status
                </Box>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button onClick={handleFilterToggle}>All</Button>
              <Button>Live</Button>
              <Button>Sold</Button>
              <Button>Reserve not met</Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text fontSize="2em">
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Media Type
                </Box>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button>Audio</Button>
              <Button>Static</Button>
              <Button>Animated</Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text fontSize="2em">
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Price Range
                </Box>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <InputGroup>
                <Input placeholder="Floor"/>
                <InputRightAddon children="ETH"/>
              </InputGroup>
              <InputGroup>
                <Input placeholder="Max"/>
                <InputRightAddon children="ETH"/>
              </InputGroup>
              <Button>Apply</Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text fontSize="2em">
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Collections
                </Box>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              The collections can be filtered here: some manner of list mapped to buttons
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        
      </VStack>
  )
}