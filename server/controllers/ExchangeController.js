const Exchange = require('../models/Exchange');
const limit = 100;

/**
 * Method is used to get the coins
 * @author Lovedeep
 * @created 14/06/2023
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getExchanges = async (req, res) => {
    const {page } = req.query;
    let page_no = page || 1;
    try {
      const exchanges = await Exchange.getExchanges(page_no,limit);
      res.json(exchanges);
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
const exchangeCronJob = async(req, res) => {
    const {page } = req.query;
    try {
      const exchanges = await Exchange.insertFilteredExchanges(page);
      res.json(exchanges);
    } catch (error) {
      console.error('Error retrieving coins:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
}

/**
 * Method is get select options array
 * @author Lovedeep
 * @created 19/07/2023 08:36
 *
 * @param {*} req
 * @param {*} res
 */
const exchangesSelectOptions = async(req, res) => {
    try {
        const exchanges = await Exchange.exchangesSelectOptions();
        res.json(exchanges);
    } catch (error) {
        console.error('Error retrieving coins:', error);
        res.status(500).json({error: 'Internal server error'});
    }
};

/**
 * Insert Single exchange by id
 * @author Lovedeep
 * @created 25/07/2023 14:37
 *
 * @param {*} req
 * @param {*} res
 */
const insertSingleExchange = async(req, res) => {
    const {exchange_id } = req.query;
    try {
        const exchange = await Exchange.insertSingleExchange(exchange_id);
        res.json(exchange);
    } catch (error) {
        console.error('Error retrieving coins:', error);
        res.status(500).json({error: 'Internal server error'});
    }
};

module.exports = {
    exchangeCronJob,
    getExchanges,
    exchangesSelectOptions,
    insertSingleExchange
  };