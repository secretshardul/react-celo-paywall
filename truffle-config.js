require('dotenv').config()
const ContractKit = require('@celo/contractkit')
const Web3 = require('web3')

function getCeloProvider () {
    const web3 = new Web3(`https://alfajores-forno.celo-testnet.org`)
    const account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY)

    const client = ContractKit.newKitFromWeb3(web3)
    client.addAccount(account.privateKey)
    return client.web3.currentProvider
}

module.exports = {
    networks: {
        develop: {
            port: 8545,
            skipDryRun: true,
        },
        alfajores: {
            provider: getCeloProvider(),
            network_id: '44787',
            skipDryRun: true,
        },
    },
    compilers: {
        solc: {
            version: '0.8'
        }
    }
}
