import {
    Box,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Text,
  } from '@chakra-ui/react';
  import { isMobile } from "react-device-detect";

  export default function DetailsX() {
    return (
        <>
          <Flex
            p={'2vh'}
            style={{
              backgroundImage: `url('https://i.imgur.com/2rOSpuU.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <SimpleGrid 
              columns={isMobile ? 1 : 3}
              spacing='40px' 
              color={'white'}
              maxW={isMobile ? "" : "50%" }
              mx={'auto'} 
              padding={'10vh 0'}
              fontWeight={'bold'}
            >
              
              {/* Feature 1 */}
                <Stack direction={ isMobile ? 'row' :'column'} backgroundColor={"black"} p={10}>
                  <Box>
                    <Image 
                      src={'https://raw.githubusercontent.com/noma-protocol/assets/main/icon5.png'}
                      w={ isMobile ? "25vh" : "15vh" }
                    />
                  </Box>
                  <Box>
                    <Text>
                      Noma ensures that the minimum price of the token can be always maintained.   
                    </Text>
                  </Box>  
                </Stack>

              {/* Feature 2 */}
                <Stack direction={ isMobile ? 'row' :'column'} backgroundColor={"black"} p={10}>
                  <Box>
                    <Image 
                      src={'https://raw.githubusercontent.com/noma-protocol/assets/main/icon3.png'}
                      w={ isMobile ? "25vh" : "15vh" }
                    />
                  </Box>
                  <Box>
                    <Text>
                      Noma ensures that the minimum price of the token can be always maintained.         
                    </Text>
                  </Box>
                </Stack>

              {/* Feature 3 */}
                <Stack direction={ isMobile ? 'row' :'column'} backgroundColor={"black"} p={10}>
                  <Box>
                    <Image 
                      src={'https://raw.githubusercontent.com/noma-protocol/assets/main/icon2.png'}
                      w={ isMobile ? "25vh" : "15vh" }
                    />
                  </Box>
                  <Box>
                    <Text>
                      Noma ensures that the minimum price of the token can be always maintained.         
                    </Text>
                  </Box>
                </Stack>

              {/* Feature 4 */}
              {/* <Box bg='tomato' height='80px'></Box> */}
            </SimpleGrid>
          </Flex>
        </>
    );
  }