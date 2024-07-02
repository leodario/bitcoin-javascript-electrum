## Iniciando projeto
```
npm init -y
```
## Instalando dependências
* Instalando bip (Bitcoin Improvement Proposal) proposta de melhoria do bitcoin
39 trigésima nona. O BIP39 é um padrão estabelecido para gerar uma 'seed' mnemônica – uma série de palavras – que serve como um backup para recuperar carteiras de Bitcoin. Assim, o BIP39 é uma melhoria do Bitcoin que facilitou a vida dos bitcoiners na hora de armazenar as chaves privadas, conhecidas com frase de backup. 
* O BIP32 (Bitcoin Improvement Proposal 32) é um padrão que descreve como as carteiras Bitcoin podem criar uma sequência de pares de chaves a partir de uma única semente. Essa abordagem facilita a gestão de múltiplos endereços derivados de uma única chave mestra. Basicamente, o BIP32 permite criar carteiras determinísticas hierárquicas (HD), nas quais você pode gerar chaves privadas e públicas em uma estrutura de árvore a partir de uma única semente. @2.0.6 versão específica.
* bitcoinjs-lib é uma biblioteca JavaScript para trabalhar com Bitcoin. Ela oferece funcionalidades para criar, assinar e verificar transações Bitcoin, gerenciar chaves privadas e públicas, além de outras operações relacionadas à criptomoeda.
```
npm install bip39 bip32@2.0.6 bitcoinjs-lib --save
```
## Importan*do a carteira no Electrum
* 1. Abra o Electrum e clique em "Criar uma nova carteira"
* 2. Dê um nome à carteira e clique em "Próximo"
* 3. Selecione "Carteira padrão" e clique em "Próximo"
* 4. Selecione "Crie uma nova semente" e clique em "Próximo"
* 5. Selecione o texto (seed) e copie para um bloco de notas. Clique em "Próximo".
* 6. Escreva o texto (seed) copiado no bloco abaixo e clique em "Próximo"
* 7. Digite uma senha e clique em "Finalizar"
* 8. Pronto! Você criou a sua carteira dentro do Electrum.

## Buscando o seu bloco em um buscador de blocos
* 1. Acesse o [blockchain.com](https://www.blockchain.com/explorer) ou [blockexplorer.one](https://blockexplorer.one/). Abaixo há um exemplo usando a segunda alternativa:
* 2. Clique no ícone do Bitcoin.
* 3. Digite no buscador o endereço da sua carteira.
* 4. Observe que ali há um alerta falando que é um endereço testnet.
* 5. Observe também que não há nenhuma transação e o saldo está zerado.

## Obtendo faucets (criptomoedas de teste)
* 1. Acesse [coinfaucet.eu](https://coinfaucet.eu/).
* 2. Coloque o endereço da sua carteira.

# Ativando a testnet no Electrum
* 1. Abra o Electrum Testnet e crie uma nova carteira; clique em "Próximo".
* 2. Selecione "Importar endereços Bitcoin ou chaves privadas".
* 3. Copie a chave privada da sua carteira e cole no campo abaixo.
* 4. Crie uma senha e clique em finalizar.
* 5. Você verá um alerta avisando que você está no modo de teste, clique em "OK". Agora você poderá ver a transação feita anteriormente.
* 6. Após a sua transação ser validada, você poderá enviar essa criptomoeda para outras carteiras.

