import { Box, Flex, Stack, Heading, Text } from "@chakra-ui/react"
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
                    color={'blue.400'}
                    fontWeight={600}
                    fontSize={'sm'}
                    p={2}
                    alignSelf={'flex-start'}
                    rounded={'md'}>
                    Stay tuned
                  </Text>
                  <Heading alignSelf={'flex-start'}>Beyond the Horizon: Explore the Unknown</Heading>
                  <Text color={'gray.500'} fontSize={'lg'}>
                    Tap into the psychedelic realms of decentralized liquidity management, where you'll find the keys to unlocking new opportunities and possibilities. So embrace the madness, and let the journey begin.
                  </Text>
                </Stack>
            </Box> 
          </Flex>         
        </Box>
      </Box>
    </Box>
  )
}

export default CTA;