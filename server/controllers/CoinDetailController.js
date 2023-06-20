const CoinDetail = require('../models/CoinDetail');
const binance = require('../../src/JSON/binance');
const limit = 100;

/**
 * Method is used to get the coins on exchange
 * @author Lovedeep
 * @created 14/06/2023
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getExchangeCoins = async (req, res) => {
    const { exchange, page } = req.query;
    let page_no = page || 1;
    try {
      const exchanges = await CoinDetail.getExchangeCoins(exchange,page_no,limit);
      res.json(exchanges);
    } catch (error) {
      console.error('Error retrieving coins:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};

/**
 * Method is used to get the exchanges of coin listed on
 * @author Lovedeep
 * @created 14/06/2023
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getCoinExchanges = async (req, res) => {
    const { coin, page } = req.query;
    let page_no = page || 1;
    console.log(coin);
    try {
      const coins = await CoinDetail.getCoinExchanges(coin,page_no,limit);
      res.json(coins);
    } catch (error) {
      console.error('Error retrieving coins:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};

/**
 * update or insert data from json 
 * @author Lovedeep
 * @created 14/06/2023
 * 
 * @param {*} req 
 * @param {*} res 
 */
const exchangeCoinsUpsert = async (req, res) => {
  try {
    const coins = await CoinDetail.upsertData(binance);
    res.json(coins);
  } catch (error) {
    console.error('Error retrieving coins:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getExchangeCoins,
  getCoinExchanges,
  exchangeCoinsUpsert
};