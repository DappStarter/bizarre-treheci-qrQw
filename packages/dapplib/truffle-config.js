require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note spike erosion half climb surge gesture'; 
let testAccounts = [
"0x5f92266846b0561c1cff552c224b29f75ad39d4589a02f269abd988c0ffd21ee",
"0x547e813eb5b1908cc3168ce69cbee98e76398f3ddc3d62bfda51a3ed7fe3b4fa",
"0xb48415de015e809518d844cc57075c0e07116e332e903a0f4aa2dd25820cf088",
"0x7b347fce69a3819a17481f23c99e5cc190dcf4d105c7f9e0f06f115133c8a4d2",
"0x883d4908fe9c7362914b93e9d5d1c3287fe8c591349afb1c866d9f801bab451b",
"0xdefe164964b53cd43c7e2ad72a3c5a015a35bcb0bd8cb93431c12d179074b631",
"0x46d5fd68672ca200af20362ff580cd3e9a86c99e6d96331dda50106b6a4df5b1",
"0x163b5edd146d4f57e88da11337e468f44ccb03838c2bf19d35c807f3db203ab2",
"0x474485ccb583fd71cb999491f009c52b35a5bcd8116c499d4fb37fbcfc27ca34",
"0xe070321130b72e9dfc35ca4aca6323d2552bc63f1025981f3fb23b1d34be2baa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

