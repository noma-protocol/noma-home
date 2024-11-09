import React, { useState, useEffect } from "react";
import { Container, Flex, VStack, Box, SimpleGrid, HStack, Heading, Text, Button } from "@chakra-ui/react";
import { useAccount } from "wagmi";

const Bootstrap: React.FC = () => {
  const { address, isConnected } = useAccount();
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [error, setError] = useState("");
  const [taskMessage, setTaskMessage] = useState("");

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
          setError(isConnected ? "You are not yet subscribed" : ""); // Show error only if connected
        } else {
          setSubscriptionData(data);
          setError("");
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
      if (data.error) {
        setTaskMessage(data.error);
      } else {
        setTaskMessage(data.message); // Display task message if successful
      }
      console.log("Task data:", data);
    } catch (error) {
      console.error("Error fetching task:", error);
      setTaskMessage("Error retrieving task.");
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
        <VStack spacing={6} w="full" px={4} border="1px solid">
          <Heading fontSize={{ base: 'lg', md: '2xl' }}>Bootstrap event whitelist</Heading>
            <SimpleGrid 
              columns={{ base: 1, md: 2 }} 
              spacing={10} 
              w="full" 
              maxW={{ base: "80vw", md: "60vw", lg: "50vw" }} 
              p={4} 
              borderRadius="md"
            >
              <Box>
                <HStack spacing={2} align="center" justify="center">
                  <Box><Text>Welcome</Text></Box>
                  <Box><Text fontWeight="bold">{address ? `${address.slice(0, 6)}...${address.slice(-6)}` : "Not connected"}</Text></Box>
                </HStack>
              </Box>
              <Box>
                <Flex direction="column" align="center">
                  {subscriptionData ? (
                    <Text>You are already subscribed</Text>
                  ) : (
                    isConnected && <Text>{error}</Text> // Show error only once if connected
                  )}
                </Flex>
              </Box>
            </SimpleGrid>

            {/* Conditionally render the Get Task button if the user is already subscribed and no task message is set */}
            {subscriptionData && !taskMessage && (
              <Button mt={4} colorScheme="blue" onClick={handleGetTask}>
                Get Task
              </Button>
            )}

            {/* Display the task message or error after fetching the task */}
            {taskMessage && (
              <Box mt={4} fontSize={{ base: "sm", md: "md" }}>
                <Text color={taskMessage.includes("Error") ? "red.400" : "green.400"}>{taskMessage}</Text>
              </Box>
            )}
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
