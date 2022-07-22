const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const logsRoutes = require('./routes/logs.routes')


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(logsRoutes);

app.use((error, req, res, next)=>{
    return res.json({
        message: error.message
    })
})

port = 4000
app.listen( port )
console.log( 'Server on port: ' + port )