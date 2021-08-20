const path = require('path')
const express = require('express')
const app = express()

app.listen(3000, ()=>{
    console.log("Todo en orden")
})

app.use(express.static(path.join(__dirname, "./public")));


app.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})