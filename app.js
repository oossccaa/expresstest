var express = require('express');
var app = express();

app.get('/api',(req,res)=>{
  console.log(req.headers);
  res.status(605).send(`<HTML>${JSON.stringify(req.headers)}</HTML>`)
})

app.listen(8787, () => {
  console.log(`Example app listening on port ${8787}`)
})