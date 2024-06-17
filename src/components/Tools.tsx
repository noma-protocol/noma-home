import React, { useContext } from "react";
import { Box, Link } from "@chakra-ui/react";
import { LanguageContext, LanguageContextType } from "../core/LanguageProvider";
import { isMobile } from 'react-device-detect';

export default function Tools() {
    const ctx = useContext<LanguageContextType>(LanguageContext);
    console.log(`isMobile: ${isMobile}`)
    return(
        <Box as="section" className="hero-section">
            <Box className="row align-items-center justify-content-center">
                <Box className="col-sm5 text-center">
                    <Box className="button-group">
                        <Link
                            className="btn btn-bordered-white "
                            to="https://bscscan.com/token/0x53ff62409b219ccaff01042bb2743211bb99882e"
                            style={{marginBottom: `${isMobile ? "25px": "0px"}`, height:"60px", width:"230px"}}
                            target="_blank"
                        >
                            <img src="https://perezosotoken.com/assets/images/bscscan.png" style={{ width: "25px", marginRight: "10px" }} />
                            {!ctx.isSpanishCountry ? "Bscscan" : "Bscscan"}
                        </Link>                                 
                        <Link
                            className="btn btn-bordered-white "
                            to="https://www.dextools.io/app/en/bnb/pair-explorer/0xe2f4a4534133beacd8542f404f8c9d5135fbaf0e"
                            style={{marginBottom: `${isMobile ? "25px": "0px"}`,height:"60px", width:"230px"}}
                            target="_blank"
                        >
                            <img src="https://perezosotoken.com/assets/images/dextools.png" style={{ width: "25px", marginRight: "10px" }} />
                            {!ctx.isSpanishCountry ? "Dextools" : "Dextools"}
                        </Link>                 
                        <Link
                            className="btn btn-bordered-white "
                            to="https://ntm.ai/token/0x53ff62409b219ccaff01042bb2743211bb99882e"
                            style={{marginBottom: `${isMobile ? "25px": "0px"}`,height:"60px", width:"230px"}}
                            target="_blank"
                        >
                            <img src="https://perezosotoken.com/assets/images/ntm.png" style={{ width: "25px", marginRight: "10px" }} />
                            {!ctx.isSpanishCountry ? "NTM" : "NTM"}
                        </Link>      
                        <Link
                            className="btn btn-bordered-white"
                            to="https://ave.ai/token/0x53ff62409b219ccaff01042bb2743211bb99882e-bsc?from=Default"
                            style={{height:"60px", width:"230px"}}
                            target="_blank"
                        >
                            <img src="https://perezosotoken.com/assets/images/avedex.png" style={{ width: "25px", marginRight: "10px" }} />
                            {!ctx.isSpanishCountry ? "Avedex" : "Avedex"}
                        </Link>             
                    </Box>
                </Box>
            </Box>               
        </Box>
    );
};