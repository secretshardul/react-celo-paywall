import React from 'react'
import { useContractKit } from '@celo-tools/use-contractkit'
import logo from './logo.svg'
import './App.css'
import Navbar from 'react-bootstrap/esm/Navbar'
import Container from 'react-bootstrap/esm/Container'

function Article() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home" style={{ margin: 'auto', fontFamily: 'Fraktur', fontSize: '30px' }}>
                    National News
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Article
