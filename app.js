const express = require('express')

const morgan = require('morgan')

const producstRouter = require('./routes/producstRoutes')
const userRouter = require('./routes/userRoutes')

const app = express()

//01. Middlewares

app.use(express.json())

app.use(morgan('dev'))

app.use((req, res, next) => {
  console.log('Hello from the middleware')
  next()
})

//Routes

app.use('/api/v1/products', producstRouter)
app.use('/api/v1/users', userRouter)

module.exports = app
