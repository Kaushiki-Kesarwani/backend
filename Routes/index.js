const express = require('express');
const app = express();

const port = 5000;

const routing = require('./routingmethods');
app.use('/routes',routing);

app.listen(port,()=>{
    console.log(`application has started on ${port} port`);
});

