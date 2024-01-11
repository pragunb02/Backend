// console.log("Testing");
require('dotenv').config()
console.log(process.env)
const express = require('express')
// import expres from "expres"
const app = express()
// all functionality of express in app
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
// home route
// http://localhost:4000/

app.get('/twitter',(req,res)=>{
       res.send("Hi Twitter!!")
})
// http://localhost:4000/twitter

app.get('/login',(req,res)=>{
      res.send('<h1>Please Login</h1>')
})
// http://localhost:4000/login

app.get('/youtube',(req,res)=>{
    res.send("<h2>YT Music</h2>")
})
// http://localhost:4000/youtube

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})