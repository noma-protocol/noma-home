import React, { useState, useEffect } from "react";
import { Container, VStack, Box, SimpleGrid, HStack, Heading, Text, Button } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { isMobile } from "react-device-detect";

const Bootstrap: React.FC = () => {
  const { address, isConnected } = useAccount();
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState(""); // Combined message state for task and verification messages
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const checkSubscription = async () => {
      if (!address) return;

      const url = `https://bootstrap.noma.money/get-subscription?address=${address}`;

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
        if (data.error) {
          setSubscriptionData(null);
          setError(isConnected 
            ? "You are not yet subscribed. Join our <b><a href='https://discord.gg/nomaprotocol' target='_blank' rel='noopener noreferrer'>Discord server</a></b> to participate." 
            : "");
        } else {
          setSubscriptionData(data);
          setError("");
          setIsVerified(data.verified || false);
        }
        console.log("Subscription data:", data);
      } catch (error) {
        console.error("Error fetching subscription:", error);
        setError("Error checking subscription status.");
      }
    };

    checkSubscription();
  }, [address, isConnected]);

  const handleGetTask = async () => {
    if (!address) return;

    const url = `https://bootstrap.noma.money/task?address=${address}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.error || data.message); // Set the combined message
      console.log("Task data:", data);
    } catch (error) {
      console.error("Error fetching task:", error);
      setMessage("Error retrieving task.");
    }
  };

  const handleVerifyTask = async () => {
    if (!address || !subscriptionData) return;

    const lastTaskTime = new Date(subscriptionData.lastTask).getTime();
    const currentTime = Date.now();
    const timeDifference = currentTime - lastTaskTime;

    if (timeDifference < 86400000) { // 24 hours in milliseconds
      setMessage("You can only verify once every 24 hours. Please try again later.");
      return;
    }

    const url = `https://bootstrap.noma.money/verifytask`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address })
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.error || data.message);
      if (!data.error) setIsVerified(true);
      console.log("Verification data:", data);
    } catch (error) {
      console.error("Error verifying task:", error);
      setMessage("Error verifying task.");
    }
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Box 
        as="section" 
        className="content-area" 
        display="block" 
        p={{ base: '4vh', md: '8vh' }} 
        my={10}
      >
        <Box className="container"></Box>
      </Box>

      <Box 
        as="section" 
        className="content-area" 
        p={{ base: '4vh', md: '8vh' }} 
        my={10}
        w="100%"
        bg="#161616"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        position="relative"
      >
        <VStack spacing={6} w="full" px={4}>
          {/* Heading and Description */}
          <SimpleGrid columns={1} spacing={2} textAlign="center">
            <Box>
              <Heading as="h2" fontSize="2xl" mb={2} color="white">
                Bootstrap Event Whitelist
              </Heading>
            </Box>
            <Box>
              <Text fontSize="md" color="gray.500">
                Join the whitelist to participate in the event and earn $NOMA points. Seats are limited so secure your spot now!
              </Text>
            </Box>
          </SimpleGrid>

          <SimpleGrid 
            columns={isMobile ? 1 : 2} // Switch to 1 column on mobile
            spacing={10} 
            w="full" 
            maxW={"50vw"}
            minW={"50vh"}
            minH="20vh"
            p={4}
            mt={30}
          >
            {/* Left Column: User Address Info */}
            <Box>
              <HStack spacing={2} align="center" justify={isMobile ? "center" : "flex-start"}>
                <Box><Text>Welcome</Text></Box>
                <Box><Text fontWeight="bold">{address ? `${address.slice(0, 6)}...${address.slice(-6)}` : "Not connected"}</Text></Box>
              </HStack>
              <Text mt={2} textAlign={isMobile ? "center" : "left"}>
                {subscriptionData 
                  ? "You are already subscribed" 
                  : (isConnected && (
                      <span dangerouslySetInnerHTML={{ __html: error }}></span>
                    ))}
              </Text>
            </Box>

            {/* Right Column: Action Buttons */}
            <Box display="flex" flexDirection="column" alignItems="center">
              <VStack spacing={4}>
                {subscriptionData && !message && (
                  <Button colorScheme="blue" onClick={handleGetTask} minW={120}>
                    Get Task
                  </Button>
                )}
                {subscriptionData && (
                  <Button colorScheme="teal" onClick={handleVerifyTask} minW={120}>
                    Verify Task
                  </Button>
                )}
              </VStack>
            </Box>

            {/* Bottom Row: Message Box Spanning Both Columns */}
            <Box gridColumn="span 2" mt={4} p={4} bg="gray.800" borderRadius="md">
              {message && (
                <Text color={message.includes("Error") || message.includes("only verify once") ? "red.400" : "green.400"} fontWeight="bold">
                  {message}
                </Text>
              )}
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      <Box 
        className="content-area" 
        display="block" 
        p={{ base: '4vh', md: '8vh' }} 
        my={10}
        h="5vh"
      >
        <Box className="container"></Box>
      </Box>     
    </Container>
  );
};

export default Bootstrap;
