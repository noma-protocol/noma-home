import React from 'react';
import { Box, HStack, Text, Image } from '@chakra-ui/react';
import { commify } from '../utils';

const PresaleDetails = ({ isMobile, balance, tokenPrice, contributions, contributionAmount, tokensPurchased, Logo }) => {
    return (
        <Box bg="gray.600" border="1px solid white" p={4}>
            <HStack spacing={4}>
                <Box w={isMobile ? "64px" : "80px"}>
                    <Text fontSize={{ base: "11px", sm: "11px", md: "14px", lg: "14px" }}>Balance</Text>
                </Box>
                <Box w={"110px"}>
                    <Text
                        color="#54FF36"
                        fontWeight="bold"
                        fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
                    >
                        {commify(Number(balance.data?.formatted).toFixed(4))}
                    </Text>
                </Box>
                <Box w="auto" ml={-5}>
                    <Image h={5} src="https://cryptologos.cc/logos/ethereum-eth-logo.png" ml={"-5px"} />
                </Box>
                <Box w="auto">
                    <Text fontWeight="bold" fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}>
                        {isMobile ? "" : <>&nbsp;</>}ETH
                    </Text>
                </Box>
            </HStack>

            <HStack mt={3} spacing={4}>
                <Box>
                    <Text fontSize={{ base: "11px", sm: "11px", md: "14px", lg: "14px" }}>Token price</Text>
                </Box>
                <Box w={"110px"}>
                    <Text
                        color="#54FF36"
                        fontWeight="bold"
                        fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
                    >
                        {commify(tokenPrice)}
                    </Text>
                </Box>
                <Box w="auto" ml={-5}>
                    <Image h={5} src="https://cryptologos.cc/logos/ethereum-eth-logo.png" ml={"-6px"} />
                </Box>
                <Box w="auto">
                    <Text fontWeight="bold" fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}>
                        {isMobile ? "" : <>&nbsp;</>}ETH
                    </Text>
                </Box>
            </HStack>

            <HStack mt={3} spacing={4}>
                <Box>
                    <Text fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}>Contributed</Text>
                </Box>
                <Box w={"79px"}>
                    <Text
                        color="#54FF36"
                        fontWeight="bold"
                        fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
                    >
                        {contributions === 0 ? contributionAmount : contributions}
                    </Text>
                </Box>
                <Box w="auto">
                    <Image h={5} src="https://cryptologos.cc/logos/ethereum-eth-logo.png" />
                </Box>
                <Box w="auto">
                    <Text fontWeight="bold" fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}>
                        &nbsp;ETH
                    </Text>
                </Box>
            </HStack>

            <HStack mt={3} spacing={4}>
                <Box>
                    <Text fontSize={{ base: "11px", sm: "11px", md: "14px", lg: "14px" }}>
                        {contributions === 0 ? "You get" : "Balance"}
                    </Text>
                </Box>
                <Box w={"110px"}>
                    <Text
                        color="#54FF36"
                        fontWeight="bold"
                        fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
                    >
                        {commify(tokensPurchased)}
                    </Text>
                </Box>
                <Box w="auto" ml={isMobile ? -2 : 0}>
                    <Image h={4} src={Logo} />
                </Box>
                <Box w="auto">
                    <Text fontWeight="bold" fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}>
                        &nbsp;&nbsp;$NOMA
                    </Text>
                </Box>
            </HStack>
        </Box>
    );
};

export default PresaleDetails;