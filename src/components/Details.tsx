import { 
    Box,
    Center,
    Stack,
    Image,
    Flex,
    Text,
    Spacer,
    HStack,
} from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

export default function Details() {
    return (
        <Stack>
            <Flex 
                p={isMobile ? '' : '5% 20vh'}
            >
                <Box>
                    <Flex 
                        direction={ isMobile ? 'column' : 'row' } 
                        align="center" 
                        justify="center" 
                        width="full"
                        color={'#ffffff'}
                        fontSize={'md'}
                        gap={50}
                        maxW={ isMobile ? '' : '50%' }
                    >
                        {/* Feature 1 */}
                        <Stack 
                            className="col-sm"
                            direction={ isMobile ? 'row' :'column'}    
                        >
                            <Box>
                                <Image 
                                    src={'https://raw.githubusercontent.com/noma-protocol/assets/main/icon5.png'}
                                    w={ isMobile ? "25vh" : "15vh" }
                                />
                            </Box>
                            <Box>
                                <Text>
                                Noma directs ensures that the minimum price of the token can be always maintained.
                                </Text>
                            </Box>  
                        </Stack>

                        {/* Feature 2 */}
                        <Stack 
                            className="col-sm"
                            direction={ isMobile ? 'row' :'column'}    
                        >
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

                        {/* Feature #3 */}
                        <Stack 
                            className="col-sm"
                            direction={ isMobile ? 'row' :'column'}
                        >
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

                    </Flex>
                </Box>
            </Flex>
        </Stack>
    );
}