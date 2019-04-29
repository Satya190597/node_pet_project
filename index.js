const express = require('express');

const app = express();

const port = 8088;

app.get('/',(request,response) => {
    response.status(200).json({"message":"Welcome To My Application"});
});

app.listen(port,(request,response) => {
    console.log("Server Is Running");
})