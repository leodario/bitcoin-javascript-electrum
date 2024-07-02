//importando as dependencias
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

// definir a rede
// para rodar no ambiente real: const network = bitcoin.networks.bitcoin;
const network = bitcoin.networks.testnet

// caminho de derivação para criação das nossas carteiras
// trabalhando com uma carteira hieráquica determinística
// `m/49'/1'/0'/0` = 1 testnet |||| `m/49'/0'/0'/0` = 0 mainet
const path = `m/49'/1'/0'/0`  // derivação de carteiras HD (hierárquica deterministic)

// criando o mnemonic para a seed (palavras de senha aleatórias)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

// criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network)

// criando uma conta - par pvt-pub keys
let account = root.derivePath(path)
let node = account.derive(0).derive(0) // gerando uma conta nó. Uma raiz derivando de outra 

// criando o endereço
let btcAddress = bitcoin.payments.p2pkh({
  pubkey: node.publicKey,
  network: network,
}).address

// escrever os dados gerados na minha carteira
// toWIF - A sigla WIF (Wallet Import Format) é uma maneira de codificar uma chave privada ECDSA (Elliptic Curve Digital Signature Algorithm) para facilitar a cópia e importação, para chave de carteiras
console.log("Carteira gerada")
console.log("Endereço: ", btcAddress)
console.log("Chave privada:", node.toWIF())
console.log("Seed:", mnemonic)
