const CoinDetail = require('../models/CoinDetail');
const Coin = require('../models/Coin');
const Exchange = require('../models/Exchange');
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

/**
 * Method is used to search coin or exchange 
 * @author Lovedeep
 * @created 14/06/2023
 * 
 * @param {*} req 
 * @param {*} res 
 */
const searchCoinExchange = async (req, res) => {
  const searchTerm = req.query.query;
  try {
    const coins = await Coin.search(searchTerm);
    const mCoins = coins.map((result) => {
      return {
        ...result._doc,
        is: 'coin'
      };
    });
    
    const exchange = await Exchange.search(searchTerm);

    const mExchange = exchange.map((result) => {
      return {
        ...result._doc,
        is: 'exchange'
      };
    });
    const mergedResults = mCoins.concat(mExchange);
    res.json(mergedResults);
  } catch (error) {
    console.error('Error retrieving coins:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * Method is used to get the coin statistics
 * @author Lovedeep
 * @created 24/06/2023 21:40
 * 
 * @param {*} req 
 * @param {*} res 
 */
const coinStatistics = async (req,res) => {
  const coinId = req.query.coin_id;
  try{
    const result = await CoinDetail.coinStatistics(coinId);
    const coin = await Coin.getCoin(coinId);
    const exchangesListed = await Coin.find({id:coinId}).count();
    if(coin){
      result.price = coin.current_price;
      result.listed_on = exchangesListed;
    }
    res.json(result);
  }catch(error){
    console.error('Error retrieving coins:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


const insertOrUpdateSingleCoinDetail = async (req,res) => {
  const data = req.query;
  try{
    const result = CoinDetail.insertOrUpdateSingleCoinDetail(data);
    console.log(result);
    res.json(result);
  }catch(error){
    console.error('Error retrieving coins:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getExchangeCoins,
  getCoinExchanges,
  exchangeCoinsUpsert,
  searchCoinExchange,
  coinStatistics,
  insertOrUpdateSingleCoinDetail
};