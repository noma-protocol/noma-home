import { Box, Flex, Image, Stack, Heading, Text, List, ListItem } from "@chakra-ui/react"
import { isMobile } from "react-device-detect";

const ALM: React.FC = () => {

function ALM({ title, desc, ...rest }) {
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
            <Box width={ isMobile ? '0' : '50%' } textAlign={"center"}>
                <Image 
                    // maxW={'50%'}
                    src={"https://raw.githubusercontent.com/noma-protocol/assets/main/flat/noma-flat-07.png"}
                    objectFit={'cover'}
                    w={isMobile ? "100%" : "90%"}
                    visibility={ isMobile ? 'hidden' : 'initial' }
                />
            </Box>
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
                    Automated
                  </Text>
                  <Heading alignSelf={'flex-start'}>Liquidity Management</Heading>
                  {/* <Text color={'gray.500'} fontSize={'lg'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                  </Text> */}
                    <List>
                      <ListItem>
                        <Text color={'gray.500'}>
                          Automated rebalancing mechanisms to distribute liquidity on Uniswap V3 pools based on volume.
                        </Text>
                      </ListItem>
                      <ListItem>
                        Continuously increases to floor price as the protocol-owned-liquidity increases from earning fees
                      </ListItem>
                      <ListItem>
                        Rebalancing actions may include adding or removing liquidity from pools, adjusting pool parameters, or reallocating assets based on predefined rules and algorithms.
                      </ListItem>
                    </List>
                </Stack>
            </Box> 
          </Flex>         
        </Box>
      </Box>
    </Box>
  )
}

export default ALM;