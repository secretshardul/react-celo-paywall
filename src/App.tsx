import React from 'react';
import { useContractKit } from '@celo-tools/use-contractkit'
import logo from './logo.svg';
import './App.css';
import Article from './Article/Article'
import Paywall from './Paywall/Paywall'
import Navbar from 'react-bootstrap/esm/Navbar'

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
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" style={{ margin: 'auto', fontFamily: 'Fraktur', fontSize: '30px' }}>
          National News
                </Navbar.Brand>
      </Navbar>
      <Paywall>
        <Article />
      </Paywall>
    </>
  )

  // return (
  //   <main>
  //     <h1>Celo Voting DApp</h1>

  //     {
  //     address
  //       ? undefined
  //         : <button onClick={openModal}>Click here to connect your wallet</button>
  //     }
  //   </main >
  // )
}

export default App;
