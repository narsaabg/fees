const Coin = require('../models/Coin');
const Exchange = require('../models/Exchange');

const getStatistics = async (req, res) => {
    try {
        const coin = await Coin.statistics();
        const exchange = await Exchange.statistics();
        res.json({ coin, exchange });
      } catch (error) {
        console.error('Error retrieving coins:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
}

module.exports = {
    getStatistics
}