// src/loadContract.js

import { ethers } from 'ethers';
import { contractAddress, contractABI } from './config';

const loadContract = async () => {
  if (window.ethereum) {
    // Request access to the user's Ethereum account
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    
    // Create an instance of Web3Provider and get the signer
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();
    
    // Create an instance of the contract
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    
    return { contract, signer };
  } else {
    console.error("No Ethereum wallet detected");
    return null;
  }
};

export default loadContract;
