/*
*/
const mongoose = require('mongoose')
const Rating = require('./rating')
const Comment = require('./comment')
const Solution = require('./solution')

var challenge = new mongoose.Schema({

    title: {
        type: String
    },
    description:{
        type: String
    },
    gitHubRepoLink:{
        type: String
    },
    images:{
        type: [String]
    },
    ratings:{
        type: [Rating]
    },
    labels:{
        type: [String]
    },
    solutions:{
        type: [Solution]
    },
    comments:{
        type: [Comment]
    }
},{
    timestamps : true
})

module.export = challenge