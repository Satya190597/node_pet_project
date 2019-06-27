/*
*/
const mongoose =  require('mongoose')

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
        type: [rating]
    },
    comments: {
        type: [comment]
    }
},{
    timestamps: true
})