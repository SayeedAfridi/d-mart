/* eslint-disable no-console */
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({ path: './config.env' })

const app = require('./app')

const port = process.env.PORT || 3000

const dbUser = process.env.LOCAL_DB_USER
const dbPass = process.env.LOCAL_DB_PASSWORD
const dbPort = process.env.LOCAL_DB_PORT
const db = process.env.LOCAL_DB
const dbHost = process.env.LOCAL_DB_HOST

mongoose
  .connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database Connected!')
  })
  .catch((e) => {
    console.log('Database connection failed!')
    console.log(e)
  })

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
