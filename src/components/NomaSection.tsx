import React, { useContext } from "react";
import { Box, Flex, Image, Stack, Heading, Text, Center } from "@chakra-ui/react"
import { LanguageContext, LanguageContextType } from "../core/LanguageProvider";
import donut from "../assets/images/donut.png";


const NomaSection: React.FC = () => {
const ctx = useContext<LanguageContextType>(LanguageContext);

function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }

return (
    <Box as="section" className="content-area"   display={"inline-block"} p={"10vh"}>
      <Box className="container">
        <Box className="row align-items-center justify-content-center" >
          <Flex 
            direction={{ base: "column", md: "row" }} 
            align="center" 
            justify="center" 
            width="full"
          >
            <Box w={0} className="col-sm">
              <Center>
                <Image 
                    src={"https://raw.githubusercontent.com/noma-protocol/assets/main/flat/noma-flat-07.png"}
                    w={"400px"}
                />
              </Center>                  
            </Box>
            <Box className="col-md">
              <Stack 
                  direction={{ base: 'column', md: 'row' }} 
                  spacing={5} 
                  align="right"
                  justify="space-around" 
                  width="auto"
              >
                  <Feature
                      title={ctx.isSpanishCountry ? 'Guardar Dinero' : 'Save Money'}
                      desc={ctx.isSpanishCountry ? 'Te mereces cosas buenas. Con un impresionante 10-15% de interés anual, haz crecer tus ahorros en tus propios términos con nuestro proceso completamente automatizado' : 'You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'}
                  />
              </Stack>
            </Box>  
          </Flex>         
        </Box>
      </Box>
    </Box>
  )
}

export default NomaSection;