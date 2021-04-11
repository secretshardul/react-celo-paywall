import React from 'react'
import { useContractKit } from '@celo-tools/use-contractkit'

interface Props {
    children: JSX.Element
}

function Paywall({ children }: Props) {
    const { address, openModal } = useContractKit()

    return (
        <>
            {
                address
                    ? undefined // TODO check if purchased
                    : openModal()
            }
            { children }
        </>
    )
}

export default Paywall
