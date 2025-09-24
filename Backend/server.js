import express from "express"
import 'dotenv/config'
import cors from "cors"


const app  = express()


// MiddleWare
app.use(cors())