import React from "react";
import { Box, Flex, Image, Stack, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import styled from 'styled-components';

const StyledLink = styled.a`
  color: gray !important;  /* Force color to be white */
  text-decoration: none;    /* Remove underline */
  
  &:visited {
    color: gray !important; /* Ensure visited links stay white */
  }
`;

const Hero: React.FC = () => {
  return (
    <Box 
      alignContent={'center'}
      as="section" 
      p={ isMobile ? '8vh' : '10vh' } 
      minH={'100vh'} 
      position="relative" // Required for absolute positioning of the banner
    >
      <Box 
        bg="lightgreen" 
        height="60px" 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
        overflow="hidden"
        position="absolute"
        top="150px" 
        left="0"
        width="100vw"
        zIndex="10"
      >
        <Box 
          as="span" 
          whiteSpace="nowrap"
          fontSize="16px"
          color="black"
          display="flex"
          animation="scroll 40s linear infinite" /* Slower animation */
        >
          <Box as="span">Earn</Box>
          <Box as="span" color={"gray"}>&nbsp;<b>$NOMA</b>&nbsp;</Box> 
          <Box as="span"> points by participating in our community and promoting the upcoming</Box>
          <Box as="span" color={"gray"}>&nbsp;<b>bootstrap</b>&nbsp;</Box> 
          <Box as="span">event.&nbsp;&nbsp;Read more 
          <StyledLink href="https://nomaprotocol.medium.com/bootstrap-event-49c1ad496ab6" target="_blank">
            &nbsp;<b>here</b>&nbsp; 
          </StyledLink> 
          </Box>
          <Box as="span">&nbsp;&nbsp;👈👈👈&nbsp;&nbsp; </Box>
          <Box as="span" color={"gray"}>&nbsp;<b>$NOMA</b>&nbsp;</Box>
          <Box as="span">points earned globally:&nbsp;</Box>
          <Box as="span" color={"gray"} fontSize={"21px"} mt={-5}>&nbsp;&nbsp;<b>28,973</b>&nbsp;&nbsp;📈</Box>
        </Box>
      </Box>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(100%); /* Start fully off-screen to the right */
            }
            100% {
              transform: translateX(-100%); /* Move completely off-screen to the left */
            }
          }
        `}
      </style>

      <Box 
        p={isMobile ? "10vw" : "5vw"} 
        flex={1}
        gap={20} 
        className="container"
        mt="120px" // Push content down to accommodate the banner
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
                  Perpetually increasing and guaranteed Intrinsic Minimum Value (IMV) with permission-less market making on top of Uniswap V3.
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
