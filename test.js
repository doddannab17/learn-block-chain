const Blockchain = require('./blockchain');
const bitCoin = new Blockchain();
// console.log(bitCoin);

// bitCoin.createNewBlock(18271,'kdjfjdhfkjsd','18278172');
// // console.log(bitCoin);
// bitCoin.createNewTransaction(1,'Doddanna','Poornima');
// bitCoin.createNewTransaction(10,'Doddanna','Poornima');
// bitCoin.createNewTransaction(100,'Doddanna','Poornima');
// bitCoin.createNewBlock(1827121,'sd','sda');
// console.log(bitCoin.chain[1]);


const previousBlockHash = '12ABCKSJHDKJS';
const currentBlockData = [
  {
    amount:1,
    sender:'Doddanna',
    recipient:'Poornima'
  },
  {
    amount:20,
    sender:'Doddanna',
    recipient:'Poornima'
  },
  {
    amount:300,
    sender:'Doddanna',
    recipient:'Poornima'
  }
]
const nonce = bitCoin.proofOfWork(previousBlockHash,currentBlockData);
const hash = bitCoin.hashBlock(previousBlockHash,currentBlockData,nonce);
var obj = bitCoin.createNewBlock(100,'lksdjlskdj','ksdjfljdhf');
var obj2 = bitCoin.createNewBlock(200,'lksdjlskdj','ksdjfljdhf');
console.log(hash, JSON.stringify(obj));
console.log(JSON.stringify(bitCoin))
