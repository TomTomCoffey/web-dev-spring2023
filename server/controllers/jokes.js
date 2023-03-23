const express = require('express');
const app = express.Router();

//actions
app
    .get('/', (req, res) => {


        console.log('calling jokes.js')
        
       const joke = fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(x => {
            res.send(x.joke)
        })

         console.log(joke);
         
        res.send('Hello World! From Express')


    })

    module.exports = app;