import React from "react";
import Web3 from "web3";

// create default context
export const DAppAccount = React.createContext();

// set provider
export const DAppAccountProvider = ({ children }) => {
  // ethwallet
  const [dAppAccount, setDAppAccount] = React.useState(null);

  return (
    <DAppAccount.Provider
      value={{
        dAppAccount,
        setDAppAccount,
        init,
      }}
    >
      {children}
    </DAppAccount.Provider>
  );
};

export const init = async function (context) {
  const defaultAccount = "0x960DE9907A2e2f5363646d48D7FB675Cd2892e91";
  const { setDAppAccount } = context;
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  if (window.ethereum) {
    await window.ethereum.enable();
  }
  web3.eth.getAccounts((error, state) => {
    // if (error) {
    setDAppAccount(defaultAccount);
    // } else {
    //   setDAppAccount(state[0]);
    // }
  });
};
