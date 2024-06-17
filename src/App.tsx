// import "./App.css";
import { Outlet } from "react-router-dom";
import { LanguageProvider } from "./core/LanguageProvider";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { bsc, localhost } from "viem/chains";
import { ToastContainer } from "react-toastify";
import { switchNetwork, watchNetwork } from "wagmi/actions";
import "react-toastify/dist/ReactToastify.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const projectId = "1607c5f300e1191999e3033443961435";

  const metadata = {
    name: "Noma Protocol",
    description: "Decentralized Money",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  };

  const chains = [bsc, localhost];
  const wagmiConfig = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
  });

  createWeb3Modal({ wagmiConfig, projectId, chains });

  watchNetwork(async (network) => {
    // if (network.chain?.name != "bsc") {
    //   await switchNetwork({
    //     chainId: 56,
    //   });
    // }
    if (network.chain?.name == "bsc") {
      await switchNetwork({
        chainId: 1337,
      });
    }
    console.log(`Network is ${network.chain?.name}`)
  });

  return (
    <WagmiConfig config={wagmiConfig}>
      <LanguageProvider>
        <Header />
        <Outlet />
        <Footer />
        <ToastContainer theme="dark" />
      </LanguageProvider>
    </WagmiConfig>
  );
}

export default App;
