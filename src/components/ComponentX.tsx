import React, { useContext } from "react";
import { Box, Flex, Image, Stack, Heading, Text, List, ListItem } from "@chakra-ui/react"
import { LanguageContext, LanguageContextType } from "../core/LanguageProvider";
import { isMobile } from "react-device-detect";

const ComponentX: React.FC = () => {
const ctx = useContext<LanguageContextType>(LanguageContext);

function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }

return (
    <Box 
      as="section" 
      className="content-area" 
      display={"inline-block"} 
      p={ isMobile ? '8vh' : '10vh' } 
      my={20}
    >
      <Box className="container">
        <Box className="row align-items-center justify-content-center" >
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" width="full">
            <Box className="col-md">
                {/* <StackedCards /> */}
                <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Introducing our
            </Text>
            <Heading alignSelf={'flex-start'}>Trustless Treasury</Heading>
            <Text fontSize={'lg'}>
              In DeFi, trust is a luxury we cannot afford. That's why we've built a self regulating trustless treasury protocol for sovereignty that defies conventional wisdom. No intermediaries, no custodians – just pure, unadulterated financial automation.
            </Text>
          {/* <List>
            <ListItem>
              Implements a fair and transparent method for distributing tokens to participants.
            </ListItem>
            <ListItem>
              Utilizes smart contract logic to automate token distribution processes.
            </ListItem>
            <ListItem>
              Ensures equitable access to tokens without bias or discrimination.
            </ListItem>
          </List> */}
          </Stack>
            </Box>  
            <Box width={ isMobile ? '0' : '50%' } textAlign={"center"}>
                <Image 
                    // maxW={'50%'}
                  objectFit={'cover'}
                  w={isMobile ? "100%" : "90%"}
                    src={"https://raw.githubusercontent.com/noma-protocol/assets/main/flat/noma-flat-01.png"}
                    visibility={ isMobile ? 'hidden' : 'initial' }
                />
            </Box>
          </Flex>         
        </Box>
      </Box>
    </Box>
  )
}

export default ComponentX;