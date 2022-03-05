const express = require('express')
const app = express()
const port = 8090

app.all('/aaa', function(req, res){
  res.header('Access-Control-Allow-Origin', '*');
  res.send({
    name:'rrrrrr'
  })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
