import React from "react";
import { Container } from "@chakra-ui/react";
import { isMobile } from 'react-device-detect';
// import { commify } from "../utils";

// Components
import Hero from "../components/Hero.tsx";
import Stats from "../components/Stats.tsx";
import Treasury from "../components/Treasury.tsx";
import AMM from "../components/AMM.tsx";
import ALM from "../components/ALM.tsx";
import CTA from "../components/CTA.tsx";
import Head from "../components/Head.tsx";
// import DetailsX from "../components/DetailsX.tsx";


const HomePage: React.FC = () => {
  console.log(`isMobile: ${isMobile}`)
  return (
    <>
      <Container>
        <Hero />
        <Head />
        <Stats />
        <Treasury />
        {/* <DetailsX /> */}
        <ALM />
        <AMM />
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
