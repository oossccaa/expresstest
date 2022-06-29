const express = require('express');
const app = express();

app.get('/api',(req,res)=>{
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.status(605).send(`<HTML>${JSON.stringify(req.headers)}</HTML>`)
})
app.listen(8787, () => {
  console.log(`Example app listening on port ${8787}`)
})
module.exports = app;
