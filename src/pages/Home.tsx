import React from "react";
import { Container } from "@chakra-ui/react";
import { isMobile } from 'react-device-detect';
// import { commify } from "../utils";

// Components
import Hero from "../components/Hero.tsx";
import Features from "../components/Features.tsx";
import Stats from "../components/Stats.tsx";
import ComponentX from "../components/Treasury.tsx";
import AMM from "../components/AMM.tsx";
import ALM from "../components/ALM.tsx";
import DetailsX from "../components/DetailsX.tsx";

// Reference
// import Details from "../components/Details.tsx";
// import Tools from "../components/Tools.tsx";
// import Aggregators from "../components/Aggregators.tsx";

const HomePage: React.FC = () => {
  console.log(`isMobile: ${isMobile}`)
  return (
    <>
      <Container>
        <Hero />
        <Stats />
        <ComponentX />
        <DetailsX />
        {/* <Details /> */}
        <ALM />
        {/* <Tools /> */}
        <AMM />
        <Features />
        {/* <Aggregators /> */}
      </Container>
    </>
  );
};

export default HomePage;
