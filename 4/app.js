const config = require('./utils/config')
const express = require('express')
const cors = require('cors')
const blogRoutes = require('./controllers/blogs')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

const app = express()

mongoose.set('strictQuery', false)
logger.info(`connecting to ${config.MONGODB_URI}`)

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to DB')
    })
    .catch((error) => {
        logger.error(error.message)
    })

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogRoutes)

module.exports = app