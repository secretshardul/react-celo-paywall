import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Modal from 'react-bootstrap/esm/Modal'

interface PurchaseModalProps {
    address: string,
    pageId: string
}

function PurchaseModal({ address, pageId }: PurchaseModalProps) {

    const [purchased, setPurchaseState] = useState(true)

    useEffect(() => {
        async function checkPurchaseFromContract(address: string, pageId: string) {
            console.log('Checking purchase')

            // TODO query contract
            setPurchaseState(false)
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