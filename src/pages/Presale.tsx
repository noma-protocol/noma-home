import React, { useEffect, useState } from "react";
import {
  Container,
  VStack,
  Box,
  SimpleGrid,
  HStack,
  Heading,
  Image,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { isMobile } from "react-device-detect";
import { Slider } from "../components/ui/slider"
import {
  StatRoot,
  StatLabel,
  StatValueText,
} from "../components/ui/stat";

import { commify } from "../utils";
import Logo from "../assets/images/noma_logo_transparent.png";

const Presale: React.FC = () => {
  const { address, isConnected } = useAccount();

  // State for contribution and presale data
  const [contribution, setContribution] = useState(0);
  const [totalContributed, setTotalContributed] = useState(0); // Example default
  const [totalContributors, setTotalContributors] = useState(0); // Example default
  const [timeLeft, setTimeLeft] = useState("00:00:00"); // Example default

  const [allowance, setAllowance] = useState(0);
  const [balance, setBalance] = useState(0);
  const [contributionAmount, setContributionAmount] = useState(0);
  const [tokensPurchased, setTokensPurchased] = useState(0);

  const tokenPrice = 0.00008;

  const handleApprovalAndDeposit = () => {
    if (!isConnected) {
      alert("Please connect your wallet to proceed.");
      return;
    }
    console.log("Approved and deposited:", contribution);
  };

  useEffect(() => {

    console.log(`Value changed to ${contributionAmount}`);
    setTokensPurchased(Number(contributionAmount / tokenPrice).toFixed(4));

  }, [contributionAmount]);

  return (
    <Container maxW="container.xl" p={2}>
      <Box
        // as="section"
        // p={{ base: "4vh", md: "8vh" }}
        // my={10}
        w="100%"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="left"
        position="relative"
        mt={150}
      >
        <VStack spacing={8} w="full" px={4}>
          <Box w="full" maxW="1000px" ml={isMobile?0:"18%"}>
            {/* <Heading fontSize={34}  mb={4} color="white" ml={15}>
              Noma Presale
            </Heading> */}
            {/* <Text fontSize="lg" color="gray.500" mb={6}>
              Launch on Base blockchain in Q1 2025
            </Text> */}
          <VStack spacing={4} w="full" align="center">
            {/* Content Box */}
            <Box
              w="full"
              maxW="1000px"
              p={4}
              borderRadius="lg"
              border="2px solid white"
              bg="#2d2f33"
              boxShadow="lg"
            >
          {/* Welcome and Stats Section */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            <Box 
              p={2} 
              // border="1px solid white"
            >
              <HStack>
                <Box>
                  <Text fontSize="lg" color="white">
                  Welcome
                </Text>
                </Box>
                <Box>
                <Text fontSize={isMobile ? "sm": "lg"} fontWeight="bold" color="white">
                {address ? `${address.slice(0, 6)}...${address.slice(-6)}` : "Not connected"}
              </Text>
                </Box>
              </HStack>
            </Box>
            <Box
              textAlign={{ base: "left", md: "right" }}
              h={"100%"}
              // border="1px solid white"
              display="flex"
              flexDirection="column"
              gap={0}
              pr={10}
              pl={5}
            >
            <Flex flexWrap="wrap" justifyContent="space-between" gap={4} mt={isMobile? 5:0}>
              <Box>
                <StatRoot>
                  <StatLabel fontSize="sm" lineHeight="5px">
                    Total Contributed
                  </StatLabel>
                  <StatValueText
                    value={totalContributed}
                    fontSize="md"
                    lineHeight="5px"
                    color="#54FF36"
                  />
                </StatRoot>
              </Box>

              <Box>
                <StatRoot>
                  <StatLabel fontSize="sm" lineHeight="5px">
                    Total Contributors
                  </StatLabel>
                  <StatValueText fontSize="md" lineHeight="1px" value={totalContributors} color="#54FF36" />
                </StatRoot>
              </Box>

              <Box>
                <StatRoot>
                  <StatLabel fontSize="sm" lineHeight="5px">
                    Time Left
                  </StatLabel>
                  <StatValueText fontSize="md" lineHeight="5px" color="#54FF36">
                    {timeLeft}
                  </StatValueText>
                </StatRoot>
              </Box>
            </Flex>
            </Box>
          </SimpleGrid>

          {/* Description */}
            <Box mt={50} color="gray.300" fontSize="sm" lineHeight="tall" p={4} w={isMobile?280:600}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam similique explicabo
              excepturi dicta saepe unde hic dolor officiis eos veritatis dolorum atque aperiam, soluta
              aliquid. Cupiditate inventore blanditiis vel saepe.
              <br /><br /><br />
            </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }}   gap={4}>
                <Box bg="gray.700" borderRadius={"10px"} p={2}>
                <StatRoot>
                <StatLabel fontSize="md" lineHeight="5px" ml={2}>
                Contribution Amount
              </StatLabel>
              <Text fontSize={13}  fontStyle={"italic"} m={2} mt={-2}>
                Choose your contribution amount (min 0.25 max 5 ETH)
              </Text>
                </StatRoot>
                <HStack spacing={4} align="center" justify="center">
                <Slider
                  step={0.001}
                  defaultValue={[0.5]}
                  variant="outline"
                  w={{ base: "140px", sm: "140px", md: "250px", lg: "250px" }} // Responsive widths
                  marks={[
                    { value: 0, label: "0.25" },
                    { value: 5, label: "5" },
                  ]}
                  min={0}
                  max={5.0}
                  ml={isMobile? 4 : 2}
                  mt="5%"
                  onValueChange={(e) => {
                    if (e.value < 0.25) {
                      return setContributionAmount(0.25);
                    }
                    return setContributionAmount(e.value);
                  }}
                />
                  <Button
                    ml={4}
                    variant={"outline"}
                    colorScheme="blue"
                    w={{ base: "60px", sm: "60px", md: "100px", lg: "100px" }} 
                    fontSize={{ base: "11px", sm: "11px", md: "14px", lg: "14px" }} 
                    maxH={40}
                    backgroundColor={"gray.900"}
                    borderRadius={10}
                    mt={10}
                    mb={5}
                    disabled={contributionAmount === 0}

                  >
                    Deposit
                  </Button> 
                </HStack>
                </Box>
                <Box bg="gray.700" borderRadius={"10px"} p={4} >
                  <HStack columns={4}>
                     <Box > 
                      <Text 
                        fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }} 
                      >Your contribution </Text>
                    </Box>
                    <Box w={"50px"}> 
                      <Text 
                        color="#54FF36" 
                        fontWeight={"bold"} 
                        fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }} 
                      >{contributionAmount}</Text> 
                    </Box>
                    <Box w="auto"> 
                    <Image
                        h={5}
                        src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                        // visibility={isMobile ? "hidden" : "initial"}
                        ml={"-6px"}
                      /> 
                    </Box>
                    <Box w="auto"> 
                      <Text 
                        fontWeight={"bold"} 
                        fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }} 
                      >ETH</Text>
                    </Box>                    
                  </HStack>
                  {isMobile ? <br />: ""}
                  <HStack mt={2} columns={3}>
                     <Box > 
                      <Text 
                        fontSize={{ base: "11px", sm: "11px", md: "14px", lg: "14px" }} 
                      >You get </Text>
                    </Box>
                    <Box w={"110px"}> 
                      <Text 
                        color="#54FF36" 
                        fontWeight={"bold"} 
                        fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }} 
                      >{commify(tokensPurchased)}</Text> 
                    </Box>
                    <Box w="auto">
                    <Image
                        h={4}
                        src={Logo}
                        // visibility={isMobile ? "hidden" : "initial"}
                      /> 
                    </Box>
                    <Box w="auto"> 
                      <Text 
                      fontWeight={"bold"} 
                      fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }} 
                      >$NOMA</Text> 
                    </Box>
                  </HStack>
                </Box>
              
              </SimpleGrid>
        </Box>
        <br />  <br />  <br />
      </VStack>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Presale;
 