const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

// coin detail routes start
const {
  getCoinExchanges,
  getExchangeCoins,
  exchangeCoinsUpsert
} = require('../controllers/CoinDetailController');

router.get('/coin/exchanges', getCoinExchanges);
router.get('/exchange/coins', getExchangeCoins);
router.get('/exchange-coins-upsert', exchangeCoinsUpsert);
// coin detail routes end



module.exports = router;