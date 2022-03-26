const Router = require('express') ;
const coinsController = require('../controllers/coinsController') ;

const router = Router() ;

router.get('/coins/:numOfCoins', coinsController.getCoins) ;

module.exports = router ;