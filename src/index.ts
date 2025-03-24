import express from "express"
import data from "./data"
import cors from "cors"
const app = express()
app.use(cors())
app.get('/',(req,res)=>{
      res.json(data)
})

app.listen(process.env.PORT || 3000)