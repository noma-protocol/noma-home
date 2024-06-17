import React, { useContext } from "react";
import { Container } from "@chakra-ui/react";
// import { LanguageContext, LanguageContextType } from "../core/LanguageProvider";
import { isMobile } from 'react-device-detect';
// import { commify } from "../utils";

// Components
import Hero from "../components/Hero.tsx";
import Features from "../components/Features.tsx";
import Stats from "../components/Stats.tsx";
import ComponentX from "../components/ComponentX.tsx";
import ComponentY from "../components/ComponentY.tsx";
import ComponentZ from "../components/ComponentZ.tsx";
import DetailsX from "../components/DetailsX.tsx";

// Reference
// import Details from "../components/Details.tsx";
// import Tools from "../components/Tools.tsx";
// import Aggregators from "../components/Aggregators.tsx";
// import NomaSection from "../components/NomaSection.tsx";

const HomePage: React.FC = () => {
  // const ctx = useContext<LanguageContextType>(LanguageContext);
  console.log(`isMobile: ${isMobile}`)
  return (
    <>
      <Container>
        <Hero />
        <Stats />
        <ComponentX />
        <DetailsX />
        {/* <Details /> */}
        {/* <NomaSection /> */}
        <ComponentZ />
        {/* <Tools /> */}
        <ComponentY />
        <Features />
        {/* <Aggregators /> */}
      </Container>
    </>
  );
};

export default HomePage;
