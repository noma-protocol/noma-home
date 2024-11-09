import React from "react";
import { Box, Flex, Image, Stack, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

const Hero: React.FC = () => {
  return (
    <Box 
      alignContent={'center'}
      as="section" 
      p={ isMobile ? '8vh' : '10vh' } 
      minH={'100vh'} 
    >
      <Box 
        p={isMobile ? "10vw" : "5vw"} 
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
                    Money with
                  </Text>
                  <br />
                  <Text color={'lightgreen'} as={'span'}>
                    Special Powers
                  </Text>
                </Heading>
                  <Text color={"white"}>
                    Perpetually increasing and guaranteed Intrinsic Minimum Value (IMV) with permission-less market-making on top of Uniswap V3.
                  </Text>
                  <HStack minW={100} justify={{ base: 'center', md: 'flex-start' }}>
                    <a href="https://nomaprotocol.medium.com/announcing-noma-ecafef785e34" onClick={()=>gaEventTracker('read_announcement')} target="_blank">
                      <Button p={15} minW={100} fontWeight={600} background={"black"} color={"lightgreen"}>
                          Read our <br />announcement
                      </Button>
                    </a>              
                  <Button p={15} bg={'lightgreen'} minW={100} fontWeight={600} isDisabled>
                  <div style={{ textAlign: 'center' }}>
                    <div>Go to dApp</div>
                    <div style={{ fontSize: '10px', marginTop: '5px', color: "gray" }}>Coming Soon</div>
                  </div>
                </Button>                  
              </HStack>
              </Stack>

            </Box>   

            <Box width={ isMobile ? '0' : '50%' } textAlign={"center"}>
                <Image 
                  objectFit={'cover'}
                  src={"https://raw.githubusercontent.com/noma-protocol/assets/main/hands.png"}
                  visibility={ isMobile ? 'hidden' : 'initial' }
                />
            </Box>
          </Flex>         
        </Box>
      </Box>
    </Box>               
  );
}

export default Hero;
