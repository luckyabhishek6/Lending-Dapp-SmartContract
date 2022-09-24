const hre = require("hardhat");
// token: 0x72Ba122cAc60a9d5235978371Aaea84e802d4EC6
// loan:  0xb1489810D596b86Fe5A0410AB935df268c31E2F2
// npx hardhat verify --network rinkeby 0xb1489810D596b86Fe5A0410AB935df268c31E2F2 "0x72Ba122cAc60a9d5235978371Aaea84e802d4EC6"

/*Successfully verified contract Loan on Etherscan.
https://goerli.etherscan.io/address/0xb1489810D596b86Fe5A0410AB935df268c31E2F2#code
*/

async function main() {
    // const LuckyToken = await hre.ethers.getContractFactory("LuckyToken");
    const Loan = await hre.ethers.getContractFactory("Loan");
    // const luckyToken = await LuckyToken.deploy();
    // await luckyToken.deployed();
    const loan = await Loan.deploy("0x72Ba122cAc60a9d5235978371Aaea84e802d4EC6");
    await loan.deployed();

    // console.log("LuckyToken deployed to:", luckyToken.address);
    console.log("Loan deployed to:", loan.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });