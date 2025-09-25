import express from "express"
import 'dotenv/config'
import cors from "cors"
import connectDB from "./config/db.js"
import adminRouter from "./routes/adminRoutes.js"


const app  = express()
await connectDB()


// MiddleWare
app.use(cors())
app.use(express.json())

// Routes 
app.get('/',(req,res)=>{
    res.send("API WORKING !!")

})
app.use('/api/admin',adminRouter)

const PORT = process.env.PORT ||  3000
app.listen(PORT,()=>{
    console.log("Server -> PORT ->",PORT)
})

export default app