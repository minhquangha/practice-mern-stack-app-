const express = require("express")
const mongoose =  require('mongoose')
const dotenv =  require('dotenv')
const cookieParser =  require('cookie-parser')
const helmet = require('helmet')
const authRoutes = require("./routes/authRoutes")
const taskRoutes =  require("./routes/taskRoutes")
const {notFound,errorHandler} = require('./middleware/errorMiddleware')
dotenv.config()

const app = express()
//using middleware
app.use(helmet())
app.use(express.json())
app.use(cookieParser())

//connect db
mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log('MongoDB connected!'))
    .catch(err=>console.error('MongoDB connection error:', err))

//create base route
app.use('/api/auth',authRoutes)
app.use('/api/tasks',taskRoutes)

app.get('/',(req,res)=>{
    res.send('MERN Task Manager API is running!')
})
app.use(notFound)
app.use(errorHandler)

const PORT=  process.env || 5000

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})