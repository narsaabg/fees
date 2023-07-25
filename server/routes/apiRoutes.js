const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

// coin detail routes start
const {
  getCoinExchanges,
  getExchangeCoins,
  exchangeCoinsUpsert,
  searchCoinExchange,
  coinStatistics,
    insertOrUpdateSingleCoinDetail
} = require('../controllers/CoinDetailController');

router.get('/coin/exchanges', getCoinExchanges);
router.get('/exchange/coins', getExchangeCoins);
router.get('/search', searchCoinExchange);
router.get('/coin-stats', coinStatistics);
router.get('/exchange-coins-upsert', exchangeCoinsUpsert);
// coin detail routes end

// admin routes
router.post('/coin-detail/upsert', insertOrUpdateSingleCoinDetail);


// coin routes
const {
    coinCronJob,
    getCoins,
    coinsSelectOptions,
    insertSingleCoin
} = require('../controllers/CoinController');

router.get('/coin/cron-job',coinCronJob);
router.get('/coins',getCoins);

//admin routes
router.get('/coins/select-options',coinsSelectOptions);
router.get('/coin/save',insertSingleCoin);

//coin routes end

// coin routes
const {
    exchangeCronJob,
    getExchanges,
    exchangesSelectOptions,
    insertSingleExchange
} = require('../controllers/ExchangeController');

router.get('/exchanges/cron-job',exchangeCronJob);
router.get('/exchanges',getExchanges);

//admin routes
router.get('/exchanges/select-options',exchangesSelectOptions);
router.get('/exchange/save',insertSingleExchange);
//coin routes end

// common routes
const {
  getStatistics
} = require('../controllers/CommonController');

router.get('/statistics',getStatistics);
// common routes end



// important routes example
// insert single coin : http://localhost:8000/api/coin/save?coin_id=ethereum
// insert single exchange: http://localhost:8000/api/exchange/save?coin_id=binance

module.exports = router;