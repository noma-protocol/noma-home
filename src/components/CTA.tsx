import { Box, Flex, Stack, Heading, Text, Button, HStack } from "@chakra-ui/react"
import { isMobile } from "react-device-detect";

const CTA: React.FC = () => {

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
                <Stack spacing={4}>
                  <Text
                    textTransform={'uppercase'}
                    color={'#1ad000'}
                    fontWeight={600}
                    fontSize={'sm'}
                    p={2}
                    alignSelf={'flex-start'}
                    rounded={'md'}>
                    Upcoming Presale
                  </Text>
                  <Heading alignSelf={'flex-start'}>Bootstrap event and initial distribution</Heading>
                  <Text color={'white'} fontSize={'lg'}>
                    Innovative protocol design and trustless presale mechanism form a synergy to ensure Noma has a fair distribution from the get go. Do not miss the upcoming bootstrap event. Join our community and get all updates.
                  </Text>
                </Stack>
                <HStack pt={"3vh"}>
                  <a href="https://noma-protocol.github.io/" target="_blank">
                    <Button
                      p={15} 
                      minW={100}
                      maxW={"15vh"} 
                      fontWeight={600} 
                      background={"black"} 
                      color={"#1ad000"}>
                      Join now
                    </Button>
                  </a>
                </HStack>
            </Box> 
          </Flex>         
        </Box>
      </Box>
    </Box>
  )
}

export default CTA;