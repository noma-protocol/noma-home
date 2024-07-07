import { Flex, Stat, StatLabel, StatNumber, chakra } from '@chakra-ui/react';
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
            <Flex>
              <chakra.h2
                textAlign={'center'}
                py={10}
                mx={'auto'}>
                Automated concentrated<br/> 
                liquidity protocol
              </chakra.h2>
            </Flex>
            <Flex 
              direction={isMobile? "column" : "row"}
              maxW={isMobile ? "" : "50%" }
              color={'#1ad000'}
              mx={'auto'} 
              p={'5vh'} 
              px={{ 
                  base: 2, 
                  sm: 12, 
                  md: 17 
              }}               
            >
              <StatsCard
                title={'Trustless'} 
                stat={'Treasury'}/>
              <StatsCard 
                title={'Automated'} 
                stat={'Liquidity'}/> 
              <StatsCard 
                title={'Built on'} 
                stat={'Uniswap V3'}/>
          </Flex>          
        </>
    );
  }