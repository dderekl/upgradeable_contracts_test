async function main() {
  const [deployer] = await ethers.getSigners();


  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying Box...");

  const box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });

  console.log("Box address:", box.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });