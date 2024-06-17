import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import { isMobile } from "react-device-detect";

  export default function Hero() {
    return (
      <Stack 
        align={'center'} 
        justify={'center'} 
        minH={'100vh'} 
        direction={{ base: 'column', md: 'row' }}
      >
        <Flex 
          p={isMobile ? "10vw" : "5vw"} 
          flex={1} 
          align={'center'} 
          justify={'center'}
          gap={20}
        >
            <VStack 
              alignItems={'baseline'} 
              maxW={isMobile ? 250 : '20vh'}
              >
              <Heading 
                fontSize={{ 
                  base: '3xl', 
                  md: '4xl', 
                  lg: '5xl' }}
              >
                <Text as={'span'}>
                  Decentralized
                </Text>
                <br />
                <Text color={'lightgreen'} as={'span'}>
                  Money
                </Text>
              </Heading>
                <Text as={'span'}>
                  Automated tokenomics and permission-less market-making on top of Uniswap V3.
                </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Button
                  p={15}
                  rounded={'full'}
                  bg={'lightgreen'}
                  color={'black'}
                  minW={100}
                  >
                  Presale
                </Button>
                <Button p={15} rounded={'full'} minW={100}>
                  Docs
                </Button>
              </Stack>
            </VStack>
            <VStack width={ isMobile ? '0px' : '' }>
              <Image
                alt={'Noma'}
                maxW={'50vh'}
                objectFit={'contain'}
                src={'https://raw.githubusercontent.com/noma-protocol/assets/main/hands.png'}
                visibility={ isMobile ? 'hidden' : 'initial' }
              />
            </VStack>
        </Flex>
      </Stack>
    );
  }