const Coin = require('../models/Coin');
const limit = 100;

/**
 * Method is used to get the coins
 * @author Lovedeep
 * @created 14/06/2023
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getCoins = async (req, res) => {
    const {page } = req.query;
    let page_no = page || 1;
    try {
      const coins = await Coin.getCoins(page_no,limit);
      res.json(coins);
    } catch (error) {
      console.error('Error retrieving coins:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};

/**
 * Method is created to run cron job of coins
 * @author Lovedeep
 * @created 17/06/2023 9:12
 * 
 * @param {*} req 
 * @param {*} res 
 */
const coinCronJob = async(req, res) => {
    const {page } = req.query;                                                                                                                                
    console.log(page);
    try {
      const coins = await Coin.insertFilteredCoins(page);
      res.json(coins);
    } catch (error) {
      console.error('Error retrieving coins:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = {
    coinCronJob,
    getCoins
  };