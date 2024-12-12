import { useEffect, useState, useMemo, useCallback } from 'react';
import { ethers, JsonRpcProvider } from "ethers";

const { formatEther } = ethers;

const usePresaleContract = (network, userAddress, referralCode) => {

    const presaleContractAddress = "0xB1129932E649Afbc05BA90eF38084F452140492C";

    const [presaleData, setPresaleData] = useState({
        totalRaised: "0",
        participantCount: 0,
        finalized: false,
        softCapReached: false,
        contributions: "0",
        totalReferred: "0"
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Setup Provider
    const provider = useMemo(() => 
        new JsonRpcProvider(
            network === "ganache" ? 
            "http://localhost:8545" : 
            process.env.REACT_APP_PROVIDER_URL
        ), 
        [network]
    );

        
    useEffect(() => {

    const fetchPresaleInfo = async () => {
        try {
            setLoading(true);
            setError(null);

            // Dynamically import the required JSON based on the network
            const Presale = await import(`../assets/Presale.json`);
            const PresaleAbi = Presale.abi;

            // Initialize the contract
            const PresaleContract = new ethers.Contract(
                presaleContractAddress,
                PresaleAbi,
                provider
            );

            // Fetch data from contract
            const [
                totalRaised,
                participantCount,
                finalized,
                softCapReached,
                contributions,
                totalReferred
            ] = await Promise.all([
                PresaleContract.getTotalRaised(),
                PresaleContract.getParticipantCount(),
                PresaleContract.finalized(),
                PresaleContract.softCapReached(),
                PresaleContract.contributions(userAddress),
                PresaleContract.getTotalReferredByCode(referralCode)
            ]);

            setPresaleData({
                totalRaised: formatEther(totalRaised),
                participantCount: parseInt(participantCount, 10),
                finalized,
                softCapReached,
                contributions: contributions,
                totalReferred: totalReferred
            });

            console.log(presaleData);

        } catch (error) {
            console.error("Failed to fetch presale info:", error);
            setError("Failed to fetch presale information.");
        } finally {
            setLoading(false);
        }
    }

    fetchPresaleInfo();

    }, [provider, presaleContractAddress, userAddress, referralCode]);

    return { ...presaleData, loading, error };
};

export default usePresaleContract;
