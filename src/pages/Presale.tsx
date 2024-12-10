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

  const tokenPrice = 0.00008;
  const targetDate = new Date("2025-01-01T00:00:00Z").getTime();

  // State for contribution and presale data
  const [contribution, setContribution] = useState(0);
  const [totalContributed, setTotalContributed] = useState(0); // Example default
  const [totalContributors, setTotalContributors] = useState(0); // Example default
  const [timeLeft, setTimeLeft] = useState("00:00:00"); // Example default

  const [allowance, setAllowance] = useState(0);
  const [balance, setBalance] = useState(0);
  const [contributionAmount, setContributionAmount] = useState(0);
  const [tokensPurchased, setTokensPurchased] = useState(0);

  const [referralCode, setReferralCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://noma.money/presale?${referralCode}`).then(() => {
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000); // Reset after 2 seconds
    });
  };

  useEffect(() => {
    const fetchReferralCode = async () => {
      if (!isConnected || !address) return;

      try {
        const response = await fetch('http://localhost:3000/referral', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ address }),
        });

        const data = await response.json();

        if (response.ok) {
          setReferralCode(data.referralCode);
          setErrorMessage('');
        } else {
          setErrorMessage(data.error || 'An error occurred while fetching the referral code.');
        }
      } catch (error) {
        setErrorMessage('Failed to connect to the server. Please try again later.');
        console.error('Error fetching referral code:', error);
      }
    };

    fetchReferralCode();
  }, [isConnected, address]); // Run whenever isConnected or address changes

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft("00:00:00");
        return;
      }

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
      );
    }, 1000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [targetDate]);

  async function addBaseNetwork() {
      try {
          // Check if the MetaMask extension is installed
          if (!window.ethereum) {
              alert('MetaMask is not installed. Please install it to use this feature.');
              return;
          }

          // Define the Base network parameters
          const baseNetwork = {
              chainId: '0x2105', // Hexadecimal for 8451
              chainName: 'Base Mainnet',
              nativeCurrency: {
                  name: 'Ether',
                  symbol: 'ETH', // Symbol for the native currency
                  decimals: 18,
              },
              rpcUrls: ['https://mainnet.base.org'], // Replace with Base's official RPC endpoint
              blockExplorerUrls: ['https://explorer.base.org'], // Replace with Base's block explorer URL
          };

          // Request MetaMask to add the network
          await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [baseNetwork],
          });

          console.log('Base network added successfully!');
      } catch (error) {
          console.error('Failed to add the Base network:', error);
          alert('Failed to add the Base network. See console for details.');
      }
  }

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
              // bg="#2d2f33"
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
                <Text fontSize={isMobile ? "sm": "lg"} fontWeight="bold" color="#54FF36">
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
            {/* <Box mt={50} color="gray.300" fontSize="sm" lineHeight="tall" p={4} w={isMobile? 280 : 600}>
 

               <HStack>
                <Box>In order to participate in the presale, you need a compatible wallet connected to the Base network.
                 To add the network to your web3 wallet please click the button below.</Box> 
               </HStack>
               <Button
                mt={4}
                onClick={addBaseNetwork}
                colorScheme="gray"
                variant="ghost"
                // leftIcon={<CopyIcon />}
                bg="transparent"  
                border="1px solid"     
                color="gray"           
                _hover={{ bg: "rgba(0, 0, 255, 0.1)" }} 
                _active={{ bg: "rgba(0, 0, 255, 0.2)" }} 
                ml={2}
                w={isMobile? 20: 110}
                fontSize={isMobile? 10: 14}
              >
                Add Base
              </Button>
              <br /><br /><br />
            </Box> */}
              <Box mt={10}></Box>
              <SimpleGrid columns={{ base: 1, md: 2 }}   gap={4}>
                <Box bg="gray.700"  p={2}>
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
                {allowance == 0 ? (
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
                    disabled={!isConnected || contributionAmount === 0}
                  >
                   Approve
                  </Button> 
                ) : <></>}
                </HStack>
                </Box>
                <Box bg="gray.700" p={4} >
                <HStack  columns={3}> 
                  <Box > 
                      <Text 
                        fontSize={{ base: "11px", sm: "11px", md: "14px", lg: "14px" }} 
                      >Token price </Text>
                    </Box>
                    <Box w={"110px"}> 
                      <Text 
                        color="#54FF36" 
                        fontWeight={"bold"} 
                        fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }} 
                      >{commify(tokenPrice)}</Text> 
                    </Box>
                    <Box w="auto" ml={-5}>
                    <Image
                        h={5}
                        src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                        // visibility={isMobile ? "hidden" : "initial"}
                        ml={"-6px"}
                      /> 
                    </Box>
                    <Box w="auto" > 
                      <Text 
                      fontWeight={"bold"} 
                      fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }} 
                      
                      >{isMobile? "":<>&nbsp;</>}ETH</Text> 
                    </Box> 
                  </HStack> 

                  <HStack columns={3} mt={2}>
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
                      >&nbsp;ETH</Text>
                    </Box>                    
                  </HStack>

                  {/* {isMobile ? <br />: ""} */}

                  <HStack   columns={3} mt={2}>
                     <Box> 
                        <Text fontSize={{ base: "11px", sm: "11px", md: "14px", lg: "14px" }}>
                          You get 
                        </Text>
                    </Box>
                    <Box w={"110px"}> 
                      <Text 
                        color="#54FF36" 
                        fontWeight={"bold"} 
                        fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }} 
                      >{commify(tokensPurchased)}</Text> 
                    </Box>
                    <Box w="auto" ml={isMobile? -2 : 0}>
                    <Image
                        h={4}
                        src={Logo}
                        // visibility={isMobile ? "hidden" : "initial"}
                      /> 
                    </Box>
                    <Box w="auto" > 
                      <Text 
                      fontWeight={"bold"} 
                      fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }} 
                      
                      >&nbsp;&nbsp;$NOMA</Text> 
                    </Box>
                  </HStack>

                 
                </Box>
              
              </SimpleGrid>

              <Box 
            mt={5} 
            alignContent={"center"} 
            backgroundColor="gray.600" 
            fontSize="sm" 
            lineHeight="tall" 
            p={4} 
            w={"auto"} 
            border="1px solid" 
          >
            <Box w={isMobile?"100%":"55%"}>
              {isConnected ? (
                <Flex align="left" gap={1} direction={isMobile? "column" : "row"} alignItems="left" justifyContent="space-between">
                <Box mt={1}>
                <Text fontSize={"sm"} >Your referral URL is</Text>
                </Box>
                <Box>
                <Text 
                  p={1} 
                  backgroundColor="ivory" 
                  fontStyle="italic" 
                  color="black" 
                  fontSize={"xs"}
                  w={"280px"}
                >
                  https://noma.money/presale?{referralCode}
                </Text>
                </Box>
                <Box>
                  <Button
                  h={8}
                  mt={isMobile?3:-1}
                  w={"80px"}
                  borderRadius={10}
                  onClick={handleCopy}
                  colorScheme="white"
                  variant="ghost"
                  bg="transparent"
                  border="2px solid"
                  color="white"
                  _hover={{ bg: "rgba(0, 0, 255, 0.1)" }}
                  _active={{ bg: "rgba(0, 0, 255, 0.2)" }}
                >
                  {hasCopied ? "Copied!" : "Copy"}
                </Button>
                </Box>
              </Flex>): <>Please login with your wallet</>}
            </Box>

            </Box>              
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
 