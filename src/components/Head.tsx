import React, { useContext } from "react";
import { Box, Flex, Image, Stack, Heading, Text, Button, HStack } from "@chakra-ui/react"
import { LanguageContext, LanguageContextType } from "../core/LanguageProvider";
import { isMobile } from "react-device-detect";

const Head: React.FC = () => {
const ctx = useContext<LanguageContextType>(LanguageContext);

function Head({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }

return (
    <Box 
      alignContent={'center'}
      as="section" 
      p={ isMobile ? '8vh' : '10vh' } 
      minH={'100vh'} 
    >
      <Box p={isMobile ? "10vw" : "5vw"} 
          flex={1}
          gap={20} 
          className="container"
      >
        <Box className="row align-items-center justify-content-center" >
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" width="full">
            
            <Box className="col-md">
              <Stack spacing={0}>
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
                <Text>
                  Automated tokenomics and permission-less market-making on top of Uniswap V3.
                </Text>
                <HStack minW={100}>
                  <Button p={15} bg={'lightgreen'} minW={100}>
                    dApp
                  </Button>
                  <Button p={15} minW={100}>
                    Docs
                  </Button>
                </HStack>
              </Stack>
            </Box>  

            <Box 
              width={ isMobile ? '0' : '50%' } 
              textAlign={"center"}
            >
                <Image 
                  objectFit={'cover'}
                  maxW={'75%'}
                  src={"https://raw.githubusercontent.com/noma-protocol/assets/main/hands.png"}
                  visibility={ isMobile ? 'hidden' : 'initial' }
                />
            </Box>
          </Flex>         
        </Box>
      </Box>
    </Box>
  )
}

export default Head;