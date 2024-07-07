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
                    Stay tuned
                  </Text>
                  <Heading alignSelf={'flex-start'}>Beyond the Horizon: Explore the Unknown</Heading>
                  <Text color={'white'} fontSize={'lg'}>
                    Tap into the psychedelic realms of decentralized liquidity management, where you'll find the keys to unlocking new opportunities and possibilities. So embrace the madness, and let the journey begin.
                  </Text>
                </Stack>
                <HStack pt={"5vh"}>
                  <Button 
                    p={15} 
                    bg={'lightgreen'} 
                    minW={100} 
                    fontWeight={600}>
                    dApp
                  </Button>
                  <Button 
                    p={15} 
                    minW={100} 
                    fontWeight={600} 
                    background={"black"} 
                    color={"#1ad000"}>
                    Read More
                  </Button>
                </HStack>
            </Box> 
          </Flex>         
        </Box>
      </Box>
    </Box>
  )
}

export default CTA;