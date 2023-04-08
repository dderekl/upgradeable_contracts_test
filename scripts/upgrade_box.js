// scripts/upgrade_box.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const BoxV2 = await ethers.getContractFactory('BoxV2');
  console.log('Upgrading Box...');
  await upgrades.upgradeProxy('0x7451A02B4622aEdc1156B2c59c7a5171Ca646E71', BoxV2);
  console.log('Box upgraded');
}

main();