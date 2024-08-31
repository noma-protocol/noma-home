import { Box, Button, Flex, Text, Stat, StatLabel, StatNumber, chakra } from '@chakra-ui/react';
import { isMobile } from "react-device-detect";
  
  interface StatsCardProps {
    title: string;
    stat: string;
  }

  function StatsCard(props: StatsCardProps) {
    const { title, stat } = props;
    return (
      <Stat
        p={'2vw'}
        shadow={'xl'}
        border={'4px solid'}
        rounded={'lg'}
        backgroundColor={'rgba(0,0,0,0.5)'}>
          <StatLabel color={'white'} fontWeight={'medium'}>
            {title}
          </StatLabel>
          <StatNumber color={'white'} fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
      </Stat>
    );
  }

  export default function Stats() {
    return (
        <>
          <Box
            w="100vw"
            h="100vh"
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
          <Flex direction="column" align="center" justify="center" w="full">
              <chakra.h2 fontSize={isMobile ? "2xl" : "4xl"} mt={isMobile ? 120 : 60}>
                Enroll in the <Text color={'lightgreen'} as={'span'}>bootstrap</Text> event
              </chakra.h2>
              <Text fontSize={isMobile ? "small" : "medium"} w={isMobile ? "90%" : "60%"} align={"left"}>
                A presale will be conducted in order to bootstrap the floor liquidity and fund initial operations. Details of the operation will be communicated over our social network and media channels, including this web page.
              </Text>
              <Flex
                direction={isMobile ? "column" : "row"}
                gap={4}
                w={isMobile ? "full" : "auto"}
              >
                <a href="https://discord.gg/nomaprotocol" target="_blank">
                <Button p={15} minW={100} fontWeight={600} background={"black"} color={"lightgreen"} mb={isMobile ? 120 : 60} mt={20}>
                    Get whitelisted
                </Button>
                </a>
              </Flex>
            </Flex>
          </Box>
          <Flex mt={isMobile ? "125%" : "25%"}>
              <chakra.h2
                textAlign={'center'}
                py={10}
                mx={'auto'}>
                Protocol design<br/> 
                that transcends limitations
              </chakra.h2>
          </Flex>
          <Flex 
            direction={isMobile? "column" : "row"}
            maxW={isMobile ? "" : "50%" }
            mx={'auto'} 
            p={'5vh'} 
            px={{ 
                base: 2, 
                sm: 12, 
                md: 17 
            }}               
          >
            <StatsCard
              title={'Oracle Free'} 
              stat={"Noma's value tracks ETH regardless of its price and it's free from oracle dependencies. "}/>
            <StatsCard 
              title={'Capital Efficient'} 
              stat={"Noma's loans are emitted 1:1 with the collateral's IMV, yielding 100% capital efficiency without liquidations."}/> 
            <StatsCard 
              title={"Up Only"} 
              stat={"Designed to increase the IMV by accruing profits generated from trading directly to the liquidity."}/>
        </Flex>          
        </>
    );
  }