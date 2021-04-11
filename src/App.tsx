import React from 'react';
import { useContractKit } from '@celo-tools/use-contractkit'
import logo from './logo.svg';
import './App.css';

function App() {
  const {
    kit,
    address,
    network,
    updateNetwork,
    openModal,
    destroy,
    sendTransaction,
    performActions,
  } = useContractKit();

  console.log('Modal', openModal)
  console.log('Address', address)

  return (
    <main>
      <h1>Celo Voting DApp</h1>

      {
      address
        ? undefined
          : <button onClick={openModal}>Click here to connect your wallet</button>
      }
    </main >
  )
}

export default App;
