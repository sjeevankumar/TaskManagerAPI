import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectDB  from "./db/index.js"
const app = express()

// middlewares
app.use(express.json())

// Import and user the routers
import usersRouter from "./routes/users.route.js"

app.use('/api/v1/tasks',usersRouter)

const port = process.env.PORT || 5000

const start = async ()=>{
    try {
        await connectDB(process.env.MONGODB_URI)
        app.listen(port,()=>{
            console.log(`Server is running at the port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()

