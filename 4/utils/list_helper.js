const blog = require("../models/blog")

const dummy = (blogs) => {
  if(Array.isArray(blogs)){
    return 1
  }
}

const totalLikes =(blogs)=> {
    const totalL = blogs.reduce((total, like)=> {
        return total + like.likes
    },0)
    return blogs.length === 0 ? 0 : totalL
}

const favoriteBlog = (blogs) => {
    const maxLikes = Math.max(...blogs.map(n => n.likes));
    const favorite = blogs.find(n => n.likes === maxLikes);
    const favoriteObj = {title: favorite.title, author: favorite.author, likes: favorite.likes}
    return favoriteObj;
}

module.exports = {
    dummy, totalLikes, favoriteBlog
}






