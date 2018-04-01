# blockchaindevenv
blockchain development environment to speed up brand new projects , nodejs, npm, typescript, webpack, react, truffle, solidity, web3.js, express, ganache, 


following sections are in latest first order ( start from the end of the document ):

===========================================================





===========================================================


truffle console --network ganachecli
or
npm run tcg

var hw;
truffle(ganachecli)> HelloWorld.deployed().then(function(dep){hw=dep})
truffle(ganachecli)> hw.SayHello()
'Hello Universe!!!'
===========================================================

package.json

    "tc": "npm run truffle-compile",
    "tmg": "npm run truffle-migrate-ganachecli",
    "tcmg": "npm run truffle-compile-migrate-ganachecli",
    "tcg": "npm run truffle-console-ganachecli",
    "truffle-compile": "truffle compile",
    "truffle-migrate-ganachecli": "truffle migrate --network ganachecli",
    "truffle-compile-migrate-ganachecli": "npm-run-all  security-check truffle-compile truffle-migrate-ganachecli",
    "truffle-console-ganachecli": "truffle console --network ganachecli",
    "security-check": "nsp check"


===========================================================

create SayHello Contract.sol
npm install --save-dev npm-run-all
npm install --save-dev nsp



> blockchaindevenv@1.0.0 truffle-migrate-ganachecli /home/metadojo/org/blockchaindojo/blockchaindevenv
> truffle migrate --network ganachecli

Using network 'ganachecli'.

Running migration: 2_deploy_contracts.js
  Deploying ConvertLib...
  ... 0x5a0fe55ebde15461a86f817d4493234003fe77d8e06d58f47a126f56b037c671
  ConvertLib: 0x345347f2637b13906ba739783cb9e7baa6e208b8
  Linking ConvertLib to MetaCoin
  Deploying MetaCoin...
  ... 0x873736fe5dcd378d6558406e8c5f372bf973768ea0e9d105763690d61d56ab31
  MetaCoin: 0x76cc8bee5d5bf663816cb27607141825cffaa8c8
  Deploying HelloWorld...
  ... 0x72e5fbc143952a27cc5ac678ceeebe0408e1722b46b700020154b8def7aa7b46
  HelloWorld: 0x2bfe80ca061455d7c0bdabbaa9723bd6d8fc9af4
Saving successful migration to network...
  ... 0x0d691fd87dffb95633f2c98d1b1e76423fde23ae7eea70ac44dac69b0a33c1fa
Saving artifacts...

===========================================================
make sure to have a truffle.js


// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {

  networks: {
    ganachegui: {
      gas: 500,
      host: "localhost",
      port: 7545,
      network_id: "*"
    },
    ganachecli: {
      gas: 4712388,
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    mainnet: {
      gas: 50000,
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    azure: {
      gas: 500000,
      host: "weiood-dns-reg1.eastus2.cloudapp.azure.com",
      port: 8545,
      network_id: "*"
    }
  }

};

mocha: {
  useColors: true
};


===========================================================

install visual studio code
sudo npm install truffle ganache-cli -g
//replace solc that comes with truffle with latest solc

npm install truffle --save-dev
//replace solc that comes with truffle with latest solc


make github project with gitignore, license and readme
clone
cd

mkdir tmp
cd tmp
truffle unbox metacoin
mv stuff from tmp to ../

fix contracts to do  pragma solidity ^0.4.20;

add truffle.js routes to blockchains

npm install --save-dev truffle-contract
npm install --save-dev babel-register

add to package.json 
"truffle-compile": "truffle compile",

git push -u origin master


