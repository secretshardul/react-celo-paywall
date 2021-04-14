import React, { useEffect, useState } from 'react'
import { useContractKit, Alfajores } from '@celo-tools/use-contractkit'
// import { Network } from '@celo-tools/use-contractkit'

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

    useEffect(() => {
        updateNetwork(Alfajores)

        console.log('Contract name', PaywallContract.contractName)
        console.log('Network', network)
        console.log('ABI', PaywallContract.abi)
        console.log('Artifact network data', PaywallContract.networks)

        const abi = PaywallContract.abi as AbiItem[]

        const contractAddress = PaywallContract.networks[44787].address

        const instance = new kit.web3.eth.Contract(
            abi,
            contractAddress
        )

        async function checkPurchaseFromContract(address: string, pageId: string) {
            console.log('Checking purchase')

            const userPurchaseCount = await instance.methods.getUserPurchaseCount(address).call()
            console.log(userPurchaseCount)

            if(!userPurchaseCount) {
                setPurchaseState(false)
            } else {
                let purchasedCheckResponse = false

                for(let i = 0; i < userPurchaseCount; i++) {
                    const purchasedArticleId = await instance.methods.userPurchases(address, i).call()
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

        // TODO mutate contract
        setTimeout(() => {
            setPurchaseState(true)
        }, 2000)
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