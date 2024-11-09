import React, { useContext } from "react";
import { LanguageContext, LanguageContextType } from "../core/LanguageProvider";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import Logo from "../assets/images/noma_logo_transparent.png";
// import { isMobile } from 'react-device-detect';
import { Link, Image } from '@chakra-ui/react';

const Header: React.FC = () => {
  const ctx = useContext<LanguageContextType>(LanguageContext);
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  return (
    <header id="header">
      <nav className="navbar navbar-expand navbar-fixed-top" >
        <div className="container header">
          
        <Link href="/" >

          <Image
            src={Logo}
            alt="Noma Protocol"
            style={{ width: "50px", height: "50px" }}
          />
          </Link>
          {/* Remove mx-auto class and add justify-content-start to align items to the left */}
          <ul className="navbar-nav items justify-content-start " >
          <li className="nav-item">
              <Link className="nav-link" href="/bootstrap">
                  Bootstrap
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  target="_blank" href="https://github.com/noma-protocol" isExternal >
                  Github
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="https://nomaprotocol.medium.com/" target="_blank" isExternal>
                  Medium
              </Link>
            </li>        

            <li className="nav-item">
              <Link className="nav-link" href="https://discord.gg/nomaprotocol" target="_blank" isExternal>
                  Discord
              </Link>
            </li>                         
          </ul>

          <ul className="navbar-nav action">
            <li className="nav-item ml-2">
              <a
                className="btn ml-lg-auto btn-bordered-green"
                onClick={() => open()}
              >
                <p style={{color:"#54ff36"}}>
                <i className="fa-solid fa-wallet mr-md-2 green-bg"></i>
                {isConnected
                  ? `${address?.slice(0, 6)}...${address?.slice(-6)}`
                  : !ctx.isSpanishCountry
                  ? "Connect wallet"
                  : "Conectar billetera"}
                </p>
              </a>
            </li>
          </ul>

          <ul className="navbar-nav toggle">
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="modal"
                data-bs-target="#menu"
              >
                <i className="fa-solid fa-bars m-0"></i>
              </a>
            </li>
          </ul>

        </div>
      </nav>
      {/* Mobile Modal */}
      <div id="menu" className="modal fade p-0">
        <div className="modal-dialog dialog-animated">
          <div className="modal-content h-100">
            <div
              className="modal-header"
              data-bs-dismiss="modal"
              style={{ color: "#fff" }}
            >
              Menu <i className="far fa-times-circle icon-close"></i>
            </div>
            <div className="menu modal-body">
              <div className="row w-100">
                <div className="items p-0 col-12 text-center">
                  <ul className="navbar-nav items mx-auto">

                    <li
                      className="nav-item"
                      data-bs-dismiss="modal"
                      style={{ fontSize: "20px" }}
                    >
                      {/* <Link className="nav-link" to="/">
                        NOMA
                      </Link> */}
                    </li>

                    <li
                      className="nav-item"
                      data-bs-dismiss="modal"
                      style={{ fontSize: "20px", marginTop:"20px"}}
                    >
                      <a className="btn ml-lg-auto btn-bordered-white" href="https://github.com/noma-protocol" target="_blank">
                        Github
                      </a>
                    </li>

                    <li
                      className="nav-item"
                      data-bs-dismiss="modal"
                      style={{ fontSize: "20px", marginTop:"20px"}}
                    >
                      <a className="btn ml-lg-auto btn-bordered-white" href="https://nomaprotocol.medium.com/" target="_blank">
                        Medium
                      </a>
                    </li>

                    <li
                      className="nav-item"
                      data-bs-dismiss="modal"
                      style={{ fontSize: "20px", marginTop:"20px"}}
                    >
                      <a className="btn ml-lg-auto btn-bordered-white" href="https://discord.gg/cFZDeS3cQc" target="_blank">
                        Discord
                      </a>
                    </li>

                    {/* Wallet Connect */}
                    <li
                      className="nav-item"
                      data-bs-dismiss="modal"
                      style={{ fontSize: "20px", marginTop:"20px"}}
                    >
                      <a
                        className="btn ml-lg-auto btn-bordered-white"
                        onClick={() => open}
                      >
                        <i className="fa-solid fa-wallet mr-md-2" ></i>
                        {isConnected
                          ? `${address?.slice(0, 6)}...${address?.slice(-6)}`
                          : !ctx.isSpanishCountry
                          ? "Connect Wallet"
                          : "Conectar billetera"}
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
