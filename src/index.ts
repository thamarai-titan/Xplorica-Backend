import express from "express"
import data from "./data"
const app = express()

app.get('/',(req,res)=>{
      res.json(data)
})

app.listen(process.env.PORT || 3000)