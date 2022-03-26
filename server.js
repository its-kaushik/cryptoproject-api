const express = require('express') ;
const cors = require('cors') ;

const coinsRoutes = require('./routes/coins') ;
const app = express() ;
app.use(cors()) ;
app.use(express.json()) ;

app.use('/api', coinsRoutes) ;

app.listen(4000, () => {
    console.log("Listening to port 4000") ;
}) ;