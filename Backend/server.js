import express from "express"
import 'dotenv/config'
import cors from "cors"
import connectDB from "./config/db.js"


const app  = express()
await connectDB()


// MiddleWare
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("API WORKING !!")

})

const PORT = process.env.PORT ||  3000
app.listen(PORT,()=>{
    console.log("Server -> PORT ->",PORT)
})

export default app