import React, { useEffect, useState } from 'react'
import { useContractKit, Alfajores } from '@celo-tools/use-contractkit'
import type { Contract } from '@celo/contractkit/node_modules/web3-eth-contract/types/index'

import Button from 'react-bootstrap/esm/Button'
import Modal from 'react-bootstrap/esm/Modal'
import PaywallContract from '../artifacts/Paywall.json'
import { AbiItem } from 'web3-utils'

interface PurchaseModalProps {
    address: string,
    pageId: string
}

function PurchaseModal({ address, pageId }: PurchaseModalProps) {
    const { kit, network, updateNetwork } = useContractKit()
    const [purchased, setPurchaseState] = useState(true)

    const abi = PaywallContract.abi as AbiItem[]
    const contractAddress = PaywallContract.networks[44787].address

    const instance = new kit.web3.eth.Contract(
        abi,
        contractAddress
    )

    useEffect(() => {
        updateNetwork(Alfajores)

        console.log('Contract name', PaywallContract.contractName)
        console.log('Network', network)
        console.log('ABI', PaywallContract.abi)
        console.log('Artifact network data', PaywallContract.networks)



        // instance = new kit.web3.eth.Contract(
        //     abi,
        //     contractAddress
        // )
        // console.log('Instance initialized', instance)

        async function checkPurchaseFromContract(address: string, pageId: string) {
            console.log('Checking purchase')

            const userPurchaseCount = await instance!.methods.getUserPurchaseCount(address).call()
            console.log(userPurchaseCount)

            if(!userPurchaseCount) {
                setPurchaseState(false)
            } else {
                let purchasedCheckResponse = false

                for(let i = 0; i < userPurchaseCount; i++) {
                    const purchasedArticleId = await instance!.methods.userPurchases(address, i).call()
                    console.log('Purchased article ID', purchasedArticleId)

                    if(purchasedArticleId === pageId) {
                        console.log('This article has been purchased')
                        purchasedCheckResponse = true
                        break
                    }
                }

                setPurchaseState(purchasedCheckResponse)
            }
        }

        checkPurchaseFromContract(address, pageId)
    }, [])

    async function purchaseAccess() {
        console.log('Purchasing')
        console.log('Contract instance during purchase', instance)

        try {
            const txObject = await instance.methods.purchaseAccess(pageId)
            const purchaseResponse = await kit.sendTransactionObject(txObject, { from: address })
            console.log('Purchase response', purchaseResponse)
            setPurchaseState(true)
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={!purchased}
            onHide={() => console.log('Hid modal')}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Purchase article to continue reading
                </Modal.Title>
            </Modal.Header>

            <Modal.Footer>
                <Button onClick={purchaseAccess}>Purchase</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PurchaseModal