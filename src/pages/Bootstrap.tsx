import React, { useState, useEffect } from "react";
import { Container, VStack, Box, SimpleGrid, HStack, Heading, Text, Button } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { isMobile } from "react-device-detect";

const Bootstrap: React.FC = () => {
  const { address, isConnected } = useAccount();
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [error, setError] = useState(""); // Frontend error messages
  const [apiMessage, setApiMessage] = useState(""); // Success messages from backend
  const [apiError, setApiError] = useState(""); // Error messages from backend
  const [isVerified, setIsVerified] = useState(false);
  const [isTaskEndpoint, setIsTaskEndpoint] = useState(false);
  const [loading, setLoading] = useState(false); // Add a loading state to manage the loading indicator

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
    setIsTaskEndpoint(true);  // Set isTaskEndpoint to true before the task call.
    setLoading(true);  // Set loading to true to prevent premature state updates
  
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
      if (data.error) {
        setApiError(data.error);
        setApiMessage("");
      } else {
        setApiMessage(data.message);
        setApiError("");
      }
      console.log("Task data:", data);
    } catch (error) {
      console.error("Error fetching task:", error);
      setApiError("Error retrieving task.");
      setApiMessage("");
    } finally {
      setLoading(false);  // Reset loading state after the API call completes
    }
  };
  
  const handleVerifyTask = async () => {
    if (!address || !subscriptionData) return;
    setIsTaskEndpoint(false); // Reset to false for white color on success
    setLoading(true);
  
    const lastTaskTime = new Date(subscriptionData.lastTask).getTime();
    const currentTime = Date.now();
    const timeDifference = currentTime - lastTaskTime;
  
    if (timeDifference < 86400000) { // 24 hours in milliseconds
      setApiError("You can only verify once every 24 hours. Please try again later.");
      setApiMessage("");
      setLoading(false);  // Ensure loading state is reset
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
      if (data.error) {
        setApiError(data.error);
        setApiMessage("");
      } else {
        setApiMessage(data.message);
        setApiError("");
        setIsVerified(true);
      }
      console.log("Verification data:", data);
    } catch (error) {
      console.error("Error verifying task:", error);
      setApiError("Error verifying task.");
      setApiMessage("");
    } finally {
      setLoading(false);  // Reset loading state after the API call completes
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
        textAlign="left"
        position="relative"
      >
        <VStack spacing={8} w="full" px={4}>
          <Box w="full" maxW="900px">
            <Box p={6}  borderRadius="md" minH="200px">
              <Heading as="h2" fontSize="2xl" mb={4} color="white">
                Bootstrap Event Whitelist
              </Heading>
              <Text fontSize="lg" color="gray.500">
                Join the whitelist to participate in the event and earn $NOMA points. Seats are limited, so secure your spot now!
              </Text>
            </Box>

            <Box mt={10} p={6} border="3px solid white" p={20} borderRadius={10} minH="250px">
              <SimpleGrid columns={isMobile ? 1 : 2} spacing={8}>
                <Box>
                  <HStack spacing={4} align="center" justify={isMobile ? "center" : "flex-start"}>
                    <Box><Text fontSize="lg">Welcome</Text></Box>
                    <Box><Text fontWeight="bold" fontSize="lg">{address ? `${address.slice(0, 6)}...${address.slice(-6)}` : "Not connected"}</Text></Box>
                  </HStack>
                  <Text mt={4} textAlign={isMobile ? "center" : "left"} fontSize="md">
                    {subscriptionData 
                      ? "You are already subscribed" 
                      : (isConnected && (
                          <span dangerouslySetInnerHTML={{ __html: error }}></span>
                        ))}
                  </Text>
                </Box>

                <Box display="flex" flexDirection="column" alignItems={isMobile?"center":"flex-end"}>
                  <VStack spacing={6} mt={isMobile?20:0}>
                    {subscriptionData && !apiMessage && !apiError && (
                      <Button colorScheme="blue" onClick={handleGetTask} minW={140} borderRadius={10}>
                        Get Task
                      </Button>
                    )}
                    {subscriptionData && (
                      <Button colorScheme="teal" onClick={handleVerifyTask} minW={140} borderRadius={10}>
                        Verify Task
                      </Button>
                    )}
                  </VStack>
                </Box>

              </SimpleGrid>
              <Box mt={6} p={4} bg="gray.800" borderRadius="md" mt={50}>
                {loading && (
                  <Text color="white" fontWeight="semibold">
                    Loading...
                  </Text>
                )}
                {apiError && !loading && (
                  <Text color={isTaskEndpoint ? "white" : "#E53E3E"} fontWeight="semibold">
                    {apiError}
                  </Text>
                )}
                {apiMessage && !loading && (
                  <Text color={isTaskEndpoint ? "white" : "#48BB78"} fontWeight="semibold">
                    {isTaskEndpoint ? <Text>Please post this text on X/Twitter to complete your task:</Text> : ""}{<Box mt={10}><i>{apiMessage}</i></Box>}
                    {isTaskEndpoint ? <Box mt={10}>Once done, click on the "verify task" button or use the "@BootstrapBot verify task" command on Discord to complete the process</Box> : ""}
                  </Text>
                )}
              </Box>


            </Box>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Bootstrap;
