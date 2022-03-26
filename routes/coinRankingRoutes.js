const Router = require('express') ;
const coinRankingController = require('../controllers/coinRankingController') ;

const router = Router() ;

router.get('/coins/:numOfCoins', coinRankingController.getCoins) ;

module.exports = router ;