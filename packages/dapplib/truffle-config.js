require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hockey slide olympic short bitter birth soccer exchange inner clock blue gaze'; 
let testAccounts = [
"0x2df183731ab967cb0595adb10c6503937d5ef4555064d18b64870e7d91457a9a",
"0xe552ec42fe167d5a326575e8517fe9a8af6a168b5db5a5887df97c78f3f73dbb",
"0x1fe116d18190116ead8b53151d1882ffbb6131669219106158810d14e6b082d1",
"0x9da4775d3415f7a6056e92eb2fc835f08c8b5395915fb4c3342645b9a17f4965",
"0x6b11808dd778f23d75f25a4aec83386c53ed3f8d9752b84a71d5228565e1aed9",
"0xd2ae644584b328ba878accbdf6ad799b6ef9d1374a75fca1f882fe7b441997dd",
"0xea5dfd4beb7a63c98bf87fe23001246968c09baaeed6b6869a8150b9fb960348",
"0x52d0856ba4faaaf25aa5b99dde59f502e12de81f0f1e436ddc634a7aeb2b013e",
"0x152a8067e27c0bd1e3a48d9cc0d3dd2931761fe68c702290e57f87b1cd5c0a28",
"0x2f213c2e743ef6f38e4f5e1f01284efcd2377c0b325c25e0ca834026a469a1e2"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


