import express from "express"
import data from "./data"
const app = express()

app.get('/',(req,res)=>{
      res.send(data)
})

app.listen(process.env.port || 3000)