import React from 'react'
import { useContractKit } from '@celo-tools/use-contractkit'
import './App.css'
import Article from './Article/Article'
import Paywall from './Paywall/Paywall'
import Navbar from 'react-bootstrap/esm/Navbar'

function App() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home" style={{ margin: 'auto', fontFamily: 'Fraktur', fontSize: '30px' }}>
                    National News
                </Navbar.Brand>
            </Navbar>

            <Paywall pageId="unique-page-id">
                <Article />
            </Paywall>
        </>
    )
}

export default App
