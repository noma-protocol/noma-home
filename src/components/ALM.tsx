import { Box, Flex, Image, Stack, Heading, Text, Button } from "@chakra-ui/react"
import { isMobile } from "react-device-detect";

const ALM: React.FC = () => {

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
            <Box width={ isMobile ? '0' : '50%' } textAlign={"center"}>
                <Image 
                    // maxW={'50%'}
                    src={"https://raw.githubusercontent.com/noma-protocol/assets/c90ea6422f6938b3b932466d650d55dda2ee97d0/face.svg"}
                    objectFit={'cover'}
                    w={isMobile ? "100%" : "90%"}
                    visibility={ isMobile ? 'hidden' : 'initial' }
                />
            </Box>
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
                    Automated
                  </Text>
                  <Heading alignSelf={'flex-start'}>Liquidity Management</Heading>
                  <Text color={'white'} fontSize={'lg'}>
                    - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore <br/>
                    - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore<br/>
                    - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore<br/>
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
          </Flex>         
        </Box>
      </Box>
    </Box>
  )
}

export default ALM;