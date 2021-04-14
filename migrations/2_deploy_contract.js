const Paywall = artifacts.require("./Paywall.sol")

module.exports = function (deployer) {
    deployer.deploy(Paywall)
}
