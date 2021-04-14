import React, { useEffect, useState } from 'react'
import { useContractKit } from '@celo-tools/use-contractkit'
import PurchaseModal from '../PurchaseModal/PurchaseModal'

interface Props {
    children: JSX.Element,
    pageId: string,
}

function Paywall({ children, pageId }: Props) {
    const { address, openModal } = useContractKit()

    return (
        <>
            {
                address
                    // ? (
                    //     purchased
                    //         ? undefined
                    //         // : <PurchaseModal address={address} pageId={pageId} />
                    //         : PurchaseModal({ address, pageId })
                    // )
                    // ? undefined
                    ? <PurchaseModal address={address} pageId={pageId} />
                    : openModal() // Display login modal

            }
            { children }
        </>
    )
}

export default Paywall
