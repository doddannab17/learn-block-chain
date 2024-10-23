const express= require('express');
const bodyParser=require('body-parser');

const Blockchain = require('./blockchain');
const bitCoin=new Blockchain();

const { v4: uuidv4 } = require('uuid');
const newAddress= uuidv4().split('-').join('');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res){
  res.send('hello world');
});


//send the blockchain details in response
app.get('/blockchain',function(req,res){
  res.send(bitCoin);
});

//Create a transactions as pending transactions
app.post('/transaction',function(req,res){
  // res.send(`Respon is ready to serve : Amout is ${req.body.amount}`);
  var index = bitCoin.createNewTransaction(req.body.amount,req.body.sender,req.body.receipent);
  res.send({'note':`transaction index is ${index}`});
});

//create a block by creating the proper nounce and add the transactions to blockchain
app.get('/mine',function(req,res){
  var previousBlock = bitCoin.getLastBlock();
  var previousBlockHash= previousBlock['hash'];
  var currentBlockData = {
    transactions: bitCoin.pendingTransactions,
    index: previousBlock['index']+1
  };
  const nounce = bitCoin.proofOfWork(previousBlockHash, currentBlockData);
  const blockHash = bitCoin.hashBlock(previousBlockHash, currentBlockData, nounce);
  bitCoin.createNewTransaction(12.5,'00',newAddress);
  var newBlock = bitCoin.createNewBlock(nounce, previousBlockHash, blockHash);

  res.send({
    note:'New Block created successfully'
  })
});

app.listen(3000,function(){
  console.log('listening in port 3000')
})
