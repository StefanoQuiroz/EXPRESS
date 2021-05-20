require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT;

const app = express();
require('./db/connectMongo')()

app.use(express.json());
app.use(express.urlencoded({extended : true}))

const MyRoutes = require('./routes/routes');
MyRoutes(app);


app.listen(PORT, ()=>{
    console.log(`Listen on Port ${PORT}`);
})