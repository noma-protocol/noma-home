import React, { useContext } from "react";
import { LanguageContext, LanguageContextType } from "../core/LanguageProvider";
import { isMobile } from 'react-device-detect';
import { Box, Link, Center } from "@chakra-ui/react";

export default function Aggregators() {
    const ctx = useContext<LanguageContextType>(LanguageContext);
    console.log(`isMobile: ${isMobile}`)
    return(
        <Box as="section" backgroundColor={"gray"}>
            <Center>
                <p style={{marginTop:"30px"}}><h3 style={{ color: "#fff" }}>Noma money is featured on:</h3> </p>
            </Center>
            <Box className="row align-items-center justify-content-center">
                <Box className="text-center">
                    <Box className="button-group">                                  
                    <Link
                        className="btn btn-bordered-white "
                        to="https://coinmarketcap.com/currencies/perezoso/"
                        style={{marginBottom: `${isMobile ? "25px": "0px"}`, height:"60px", width:"230px"}}
                        target="_blank"
                    >
                        <img src="https://perezosotoken.com/assets/images/cmc.png" style={{ width: "25px", marginRight: "10px" }} />
                        {!ctx.isSpanishCountry ? "CMC" : "CMC"}
                    </Link>                  
                    <Link
                        className="btn btn-bordered-white "
                        to="https://www.coingecko.com/en/coins/perezoso"
                        style={{marginBottom: `${isMobile ? "25px": "0px"}`, height:"60px", width:"230px"}}
                        target="_blank"
                    >
                        <img src="https://perezosotoken.com/assets/images/coingecko.png" style={{ width: "25px", marginRight: "10px" }} />
                        {!ctx.isSpanishCountry ? "Coingecko" : "Coingecko"}
                        </Link>                  
                    </Box>
                </Box>
            </Box>          
        </Box>
    );
};