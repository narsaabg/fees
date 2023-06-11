const express = require('express');
const router = express.Router();

// Import your controller functions
const {
  // getCoins,
//   getExchanges,
//   getCoinDetail,
//   getExchangeDetail,
createCoinDetails,
coinDetail,
} = require('../controllers/CoinDetailController');

// Define your routes
router.get('/1', createCoinDetails);
router.get('/coin-detail', coinDetail);




// router.get('/coins', getCoins);
// router.get('/exchanges', getExchanges);
// router.put('/coins/:id', getCoinDetail);
// router.delete('/exchanges/:id', getExchangeDetail);

module.exports = router;