/*
    Import Modules : ['mongoose','./rating', './comment']
*/
const mongoose =  require('mongoose')
const Comment = require('./comment')
const Rating = require('./rating')

var solution = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    githubRepoLink: {
        type: String
    },
    images: {
        type: [String]
    },
    adminApproved: {
        type: [String]
    },
    ratings: {
        type: [Rating]
    },
    comments: {
        type: [Comment]
    }
},{
    timestamps: true
})

module.exports = solution