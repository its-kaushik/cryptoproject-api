const express = require('express') ;
const cors = require('cors') ;

const coinRankingRoutes = require('./routes/coinRankingRoutes') ;
const app = express() ;
app.use(cors()) ;
app.use(express.json()) ;

app.use('/api', coinRankingRoutes) ;

app.listen(4000, () => {
    console.log("Listening to port 4000") ;
}) ;