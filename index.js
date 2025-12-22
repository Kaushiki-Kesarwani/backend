const express = require('express');
const app = express();

const port = 5000;

app.use(express.json());

const routerlevel = require('./routerlevel');
app.use('/middle',routerlevel);

const valid = require('./checkvalid');
app.use('/valid',valid)

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})