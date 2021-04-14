import React, { useEffect, useState } from 'react'
import { useContractKit } from '@celo-tools/use-contractkit'
import Button from 'react-bootstrap/esm/Button'
import Modal from 'react-bootstrap/esm/Modal'
import PaywallContract from '../artifacts/Paywall.json'
import { AbiItem } from 'web3-utils'

interface PurchaseModalProps {
    address: string,
    pageId: string
}

function PurchaseModal({ address, pageId }: PurchaseModalProps) {
    const { kit } = useContractKit()
    const [purchased, setPurchaseState] = useState(true)

    const abi = PaywallContract.abi as AbiItem[]
    const contractAddress = PaywallContract.networks[44787].address

    const instance = new kit.web3.eth.Contract(
        abi,
        contractAddress
    )

    useEffect(() => {
        async function checkPurchaseFromContract(address: string, pageId: string) {
            console.log('Checking purchase')

            try {
                const userPurchaseCount = await instance!.methods.getUserPurchaseCount(address).call()
                console.log(userPurchaseCount)

                if (!userPurchaseCount) {
                    setPurchaseState(false)
                } else {
                    let purchasedCheckResponse = false

                    for (let i = 0; i < userPurchaseCount; i++) {
                        const purchasedArticleId = await instance!.methods.userPurchases(address, i).call()
                        console.log('Purchased article ID', purchasedArticleId)

                        if (purchasedArticleId === pageId) {
                            console.log('This article has been purchased')
                            purchasedCheckResponse = true
                            break
                        }
                    }

                    setPurchaseState(purchasedCheckResponse)
                }
            } catch(error) {
                window.location.reload()
            }
        }

        checkPurchaseFromContract(address, pageId)
    }, [])

    async function purchaseAccess() {

        try {
            console.log('Purchasing for account', address)
            console.log('Instance', instance)
            const txObject = await instance.methods.purchaseAccess(pageId)
            console.log('tx object', txObject)

            const tx = await kit.sendTransactionObject(txObject, {
                 from: address,
                 gasPrice: 10 ** 11,
                })
            console.log('Transaction', tx)

            let receipt = await tx.waitReceipt()
            console.log('Receipt', receipt)

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