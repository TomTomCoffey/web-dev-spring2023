const express = require('express')
const app = express() // Import the http module

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000; // Port number 3000 is used for development

app
   .get('/', (req, res) => {
  res.send('Hello World! From express!!')
})
  .get('/products', (req, res) => {
    res.send({
      items[
        {
          id: 1,
          name: 'product 1'
      }]
    
  })








app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





