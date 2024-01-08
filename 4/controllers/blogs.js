const mongoose = require('mongoose')
const logger = require('../utils/logger')

const blogRoutes = require('express').Router()
const Blog = require('../models/blog')

  blogRoutes.get('/', (req,res) => {
    Blog.find({})
        .then(line => {
            res.json(line)
        })
       .catch(error => logger.error(error.message))
  })

  blogRoutes.post('/', (req,res) => {
    const blogBody = new Blog(req.body)

    blogBody.save()
    .then(result => 
        { res.status(201).json(result)
    })
    .catch(error => logger.error(error.message))
  })
  

module.exports = blogRoutes