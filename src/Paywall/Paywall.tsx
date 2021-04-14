import React, { useEffect, useState } from 'react'
import { Alfajores, useContractKit } from '@celo-tools/use-contractkit'
import PurchaseModal from '../PurchaseModal/PurchaseModal'

interface Props {
    children: JSX.Element,
    pageId: string,
}

function Paywall({ children, pageId }: Props) {
    const { address, openModal, updateNetwork, closeModal, modalIsOpen } = useContractKit()

    useEffect(() => {
        updateNetwork(Alfajores)
    }, [])


    return (
        <>
            {
                address
                    // ? undefined
                    ? <PurchaseModal address={address} pageId={pageId} />
                    : openModal() // Display login modal

            }
            { children }
        </>
    )
}

export default Paywall
