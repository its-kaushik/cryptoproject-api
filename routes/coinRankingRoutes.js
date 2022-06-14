const Router = require('express') ;
const coinRankingController = require('../controllers/coinRankingController') ;

const router = Router() ;

router.get('/marketstats', coinRankingController.getMarketStats) ;
router.get('/coins/:numOfCoins', coinRankingController.getCoins) ;
router.get('/coin/:uuid', coinRankingController.getCoin) ;

module.exports = router ;