import React, { useContext } from "react";
import { Box, Flex, Image, Stack, Heading, Text, List, ListItem, Button } from "@chakra-ui/react"
import { LanguageContext, LanguageContextType } from "../core/LanguageProvider";
import { isMobile } from "react-device-detect";

const Treasury: React.FC = () => {
const ctx = useContext<LanguageContextType>(LanguageContext);

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
              color={'#1ad000'}
              fontWeight={600}
              fontSize={'sm'}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Introducing our
            </Text>
            <Heading alignSelf={'flex-start'}>Trustless Treasury</Heading>
            <Text color={'white'} fontSize={'lg'}>
              Noma is centered around the vision of an autonomous future within non-custodial finance. Protocol-owned-liquidity in Noma handled is managed trustlessly by the treasury at all times. No intermediaries, no custodians – just pure, unadulterated financial automation.
            </Text>
            <Button 
              maxW={"150px"} 
              p={15}
              background={"black"}
              color={"#1ad000"}
              fontWeight={600} >
                Read More
            </Button>
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

export default Treasury;