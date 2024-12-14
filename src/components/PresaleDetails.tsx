import React from 'react';
import { Box, HStack, Text, Image } from '@chakra-ui/react';
import { commify } from '../utils';

const PresaleDetails = ({ isMobile, balance, tokenPrice, contributions, contributionAmount, tokensPurchased, Logo }) => {
    return (
        <Box bg="gray.600" border="1px solid white" p={4}>
            <HStack spacing={4}>
                <Box w={"90px"}>
                    <Text fontSize={{ base: "11px", sm: "11px", md: "14px", lg: "14px" }}>Balance</Text>
                </Box>
                <Box w={"90px"}>
                    <Text
                        color="#54FF36"
                        fontWeight="bold"
                        fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
                    >
                        {commify(Number(balance.data?.formatted).toFixed(4))}
                    </Text>
                </Box>
                <Box w="auto" >
                    <Image h={5} src="https://cryptologos.cc/logos/ethereum-eth-logo.png"  />
                </Box>
                <Box w="auto">
                    <Text fontWeight="bold" fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}>
                        {isMobile ? "" : <>&nbsp;</>}ETH
                    </Text>
                </Box>
            </HStack>

            <HStack mt={3} spacing={4} >
                <Box w={"90px"}>
                    <Text fontSize={{ base: "11px", sm: "11px", md: "14px", lg: "14px" }}>Token price</Text>
                </Box>
                <Box   w={"90px"} >
                    <Text
                        color="#54FF36"
                        fontWeight="bold"
                        fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
                    >
                        {commify(tokenPrice)}
                    </Text>
                </Box>
                <Box w="auto">
                    <Image h={5} src="https://cryptologos.cc/logos/ethereum-eth-logo.png" />
                </Box>
                <Box w="auto">
                    <Text fontWeight="bold" fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}>
                        {isMobile ? "" : <>&nbsp;</>}ETH
                    </Text>
                </Box>
            </HStack>

            <HStack mt={3} spacing={4}>
                <Box w={"90px"}>
                    <Text fontSize={{ base: "11px", sm: "11px", md: "14px", lg: "14px" }}>{contributions > 0 ? "Contributed" : "Contributing"}</Text>
                </Box>
                <Box   w={"90px"} >
                    <Text
                        color="#54FF36"
                        fontWeight="bold"
                        fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
                    >
                        {contributions > 0 ?  contributions : contributionAmount}
                    </Text>
                </Box>
                <Box w="auto">
                    <Image h={5} src="https://cryptologos.cc/logos/ethereum-eth-logo.png"  />
                </Box>
                <Box w="auto">
                    <Text fontWeight="bold" fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}>
                        {isMobile ? "" : <>&nbsp;</>}ETH
                    </Text>
                </Box>
            </HStack>            

            <HStack mt={3} spacing={4}>
                <Box  w={"90px"} >
                    <Text fontSize={{ base: "11px", sm: "11px", md: "14px", lg: "14px" }}>
                        {contributions > 0 ? "Balance" : "You get"}
                    </Text>
                </Box>
                <Box  w={"92px"} >
                    <Text
                        color="#54FF36"
                        fontWeight="bold"
                        fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
                    >
                        {commify(tokensPurchased)}
                    </Text>
                </Box>
                <Box w="auto" >
                    <Image h={4} src={Logo} />
                </Box>
                <Box w="auto">
                    <Text fontWeight="bold" fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}>
                    &nbsp;$NOMA
                    </Text>
                </Box>
            </HStack>
        </Box>
    );
};

export default PresaleDetails;