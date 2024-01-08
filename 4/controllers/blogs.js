const mongoose = require('mongoose')
const { error } = require('../utils/logger')

const blogRoutes = require('express').Router()

const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
  })
  
  const Blog = mongoose.model('Blog', blogSchema)

  blogRoutes.get('/', (req,res) => {
    Blog.find({})
        .then(line => {
            res.json(line)
        })
       .catch(error => console.log(error.message))
  })

  blogRoutes.post('/', (req,res) => {
    const blogBody = new Blog(req.body)

    blogBody.save()
    .then(result => 
        { res.status(201).json(result)
    })
    .catch(error => console.log(error.message))
  })
  

module.exports = blogRoutes