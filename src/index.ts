import express from "express"
import data from "./data"
const app = express()

app.get('/',(req,res)=>{
   console.log(data[0].images[0])
})

app.listen(process.env.port || 3000)