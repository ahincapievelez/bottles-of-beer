// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

app.get('/', (req, res) => {
    res.send(`<div><h1>99 Bottles of beer on the wall</h1><a href='/${99 - 1}'>take one down, pass it around</a></div>`)
})

app.get('/:number_of_bottles', (req, res) => {
    let bottles = req.params.number_of_bottles
    if (bottles != 0) {
        res.send(`<div><h1>${bottles} Bottles of beer on the wall</h1><a href='/${bottles - 1}'>take one down, pass it around</a></div>`)
    } else {
        res.send(`<div><h1>${bottles} Bottles of beer on the wall</h1><a href='/${99}'>No more bottles left. Get more</a></div>`)
    }
})

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})