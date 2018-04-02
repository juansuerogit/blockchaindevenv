# blockchaindevenv
blockchain development environment to speed up brand new projects , nodejs, npm, typescript, webpack, react, truffle, solidity, web3.js, express, ganache, 


following sections are in latest first order ( start from the end of the document ):



===========================================================

get metamask for chrome browser



install nvidio geforce 1080 drivers

 install the nvidia cuda drivers with this command
sudo apt-get install nvidia-cuda-dev nvidia-cuda-toolkit nvidia-nsight

https://github.com/ethereum-mining/ethminer/releases
mkdir  ethminer-0.14.0rc2-Linux
cd ethminer-0.14.0rc2-Linux/

ethminer --farm-recheck 200 -G -S eu1.ethermine.org:4444 -FS us1.ethermine.org:4444 -O <Your_Ethereum_Address>.<RigName>

===========================================================


sudo apt-get install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum


download mist and ethereum wallet
https://github.com/ethereum/mist/releases


sudo geth --syncmode "light" --cache 1024 --datadir ~/org/ethereum/data/geth 
sudo mist  --swarmurl="http://swarm-gateways.net"   --rpc /home/metadojo/org/ethereum/data/geth/geth.ipc 


sudo geth attach --datadir /home/metadojo/org/ethereum/data/geth/

ganache-cli --port 7545


===========================================================

// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {

  networks: {
    ganachegui: {
      gas: 500,
      host: "localhost",
      port: 6545,
      network_id: "*"
    },
    ganachecli: {
      gas: 4712388,
      host: "localhost",
      port: 7545,
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

npm run tcma 
npm run truffle-compile-migrate-azure
truffle migrate --network azure
 
npm run tca
npm run truffle-console-azure
truffle console --network azure




===========================================================

truffle.js

    azure: {
      gas: 500000,
      host: "weiood-dns-reg1.eastus2.cloudapp.azure.com",
      port: 8545,
      network_id: "*"
    }


===========================================================



ssh -p 3000 gethadmin@metaoodkfdws.eastus2.cloudapp.azure.com

geth attach
personal.unlockAccount(eth.coinbase)
passphrase for default account


===========================================================



create azure ethereum consortium

Basics
Subscription
Visual Studio Enterprise
Resource group
blockchaindojo
Location
East US 2
Create a new network or join existing network?
Create new
Deploy a network that will be part of a consortium?
Standalone
Resource prefix
wei
VM user name
gethadmin
Password
***************
Deployment regions
Number of region(s)
1
First region
East US 2
Network Size and Performance
Number of mining nodes
2
Mining node storage performance
Standard
Mining node virtual machine size
Standard D1 v2
Number of load balanced transaction nodes
1
Transaction node storage performance
Standard
Transaction node virtual machine size
Standard D1 v2
Ethereum Settings
Consortium Member Id
72
Network ID
10101010
Advanced: Custom Genesis Block
No
Ethereum account password
***************
Ethereum private key passphrase
***************
OMS
Connect to existing OMS (Operations Management Suite) instance?
Create new
OMS Workspace Location
East US
OMS Service Tier
Free








===========================================================


npm run tcg
npm run truffle-console-ganachecli
truffle console --network ganachecli


var ss;
ScoreStore.deployed().then(function(dep) {ss=dep})
===========================================================
> blockchaindevenv@1.0.0 truffle-migrate-ganachecli /home/metadojo/org/blockchaindojo/blockchaindevenv
> truffle migrate --network ganachecli

Using network 'ganachecli'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0x70cf7b06ad0b277e3e343822ee59b0c2c6265db324788bc0763405372dbd3a73
  Migrations: 0xb0779c809251187602c1704c98d39d62c005efeb
Saving successful migration to network...
  ... 0x6df048061add530f658c3a2ea45b61edf30c0f4d91970df1cf717bbd94e0b820
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying ConvertLib...
  ... 0x5a0fe55ebde15461a86f817d4493234003fe77d8e06d58f47a126f56b037c671
  ConvertLib: 0xfda5bd71086193660ec4be2500aa76daf7e53773
  Linking ConvertLib to MetaCoin
  Deploying MetaCoin...
  ... 0xff0f0dd68079985aaf77b22f30aea8d32cb94e728c535ae668b7855fe654c0e2
  MetaCoin: 0xaf733f61e63fbdab4e0928472bdd475c44c1d2ef
  Deploying ScoreStore...
  ... 0x84b66907e3f0a5a12bdf1259dc0f0406a66b1119f5fcc972a5d74f6b72e8c2b3
  ScoreStore: 0xb05a1876c68caa517234a0c2e6b3eab5abd7bb9b
Saving successful migration to network...
  ... 0xe9b18b1c743d0dea6375e1693bc7fdc0cd0c1f1c0508c1e0d6d86c5f349bc998
Saving artifacts...

=======================================================================
2_deploy_contracts.js


var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var HelloWorld = artifacts.require("./HelloWorld.sol");
var ScoreStore = artifacts.require("./ScoreStore.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(ScoreStore);
};
===========================================================
create  ScoreStore> blockchaindevenv@1.0.0 truffle-migrate-ganachecli /home/metadojo/org/blockchaindojo/blockchaindevenv
> truffle migrate --network ganachecli

Using network 'ganachecli'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0x70cf7b06ad0b277e3e343822ee59b0c2c6265db324788bc0763405372dbd3a73
  Migrations: 0xb0779c809251187602c1704c98d39d62c005efeb
Saving successful migration to network...
  ... 0x6df048061add530f658c3a2ea45b61edf30c0f4d91970df1cf717bbd94e0b820
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying ConvertLib...
  ... 0x5a0fe55ebde15461a86f817d4493234003fe77d8e06d58f47a126f56b037c671
  ConvertLib: 0xfda5bd71086193660ec4be2500aa76daf7e53773
  Linking ConvertLib to MetaCoin
  Deploying MetaCoin...
  ... 0xff0f0dd68079985aaf77b22f30aea8d32cb94e728c535ae668b7855fe654c0e2
  MetaCoin: 0xaf733f61e63fbdab4e0928472bdd475c44c1d2ef
  Deploying ScoreStore...
  ... 0x84b66907e3f0a5a12bdf1259dc0f0406a66b1119f5fcc972a5d74f6b72e8c2b3
  ScoreStore: 0xb05a1876c68caa517234a0c2e6b3eab5abd7bb9b
Saving successful migration to network...
  ... 0xe9b18b1c743d0dea6375e1693bc7fdc0cd0c1f1c0508c1e0d6d86c5f349bc998
Saving artifacts....sol

use revert();
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

create  HelloWorld.sol
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


