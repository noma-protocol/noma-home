import React, { useState } from "react";
import { Container, VStack, Box, SimpleGrid, HStack, Heading, Text, Button } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { useAccount } from "wagmi";

const Bootstrap: React.FC = () => {
  const { address, isConnected } = useAccount();
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [error, setError] = useState("");

  // Function to handle the check subscription button click
  const checkSubscription = async () => {
    const url = `http://bootstrap.noma.money/get-subscription?address=${address}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }

        const data = await response.json();
        console.log("Subscription data:", data);
    } catch (error) {
        console.error("Error fetching subscription:", error);
    }
};

  return (
    <Container>
      <Box 
        as="section" 
        className="content-area" 
        display={"inline-block"} 
        p={ isMobile ? '8vh' : '10vh' } 
        my={20}
      >
        <Box className="container"></Box>
      </Box>

      <Box 
        as="section" 
        className="content-area" 
        p={ isMobile ? '8vh' : '10vh' } 
        my={20}
        w="100vw"
        h="200vh"
        minH="30vh"
        bg="gray.800"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        position={"absolute"}
        left={0}
        right={0}
        height={isMobile? 480 : 300}
        p={4}
        backgroundColor={"#161616"}
        backgroundSize={"100%"}
      >
        <VStack>
          <Heading>Bootstrap event whitelist</Heading>
          <Box className="container">
            <SimpleGrid columns={2} w={"90vh"} maxW={"120vh"} border="1px solid" spacing={20}>
              <Box>
                <HStack>
                  <Box><Text> Welcome </Text></Box>
                  <Box><Text> <b>{`${address?.slice(0, 6)}...${address?.slice(-6)}`}</b> </Text></Box>
                </HStack>
              </Box>
              <Box>
                <HStack>
                  <Box><Text> Are you already subscribed? </Text></Box>
                  <Box>
                    <Button id="checkNow" onClick={checkSubscription}>Check now</Button>
                  </Box>
                </HStack>
              </Box>
            </SimpleGrid>
            <Box mt={20} fontSize={16}>
              {subscriptionData ? (
                <Text>Subscription found: {JSON.stringify(subscriptionData)}</Text>
              ) : (
                error && <Text color="red.400">{error}</Text>
              )}
            </Box>
          </Box>
        </VStack>
      </Box>            

      <Box 
        as="section" 
        className="content-area" 
        display={"inline-block"} 
        p={ isMobile ? '8vh' : '10vh' } 
        my={20}
        h={"60vh"}
      >
        <Box className="container"></Box>
      </Box>     
    </Container>
  );
};

export default Bootstrap;
