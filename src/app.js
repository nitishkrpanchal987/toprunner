const express = require("express");
const studentRouter = require('./router/student');
require("./db/conn");
const app = express();

const port = process.env.PORT || 4000;


app.use(express.json());
app.use(studentRouter);


app.listen(port, ()=>{
    console.log(`connection is setup on port ${port}`);
})