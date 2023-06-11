const CoinDetail = require('../models/CoinDetail');

console.log(CoinDetail);

const createCoinDetails = async (req, res) => {
  try {
    const coinData = [
      {
    exchange_id: 'binance',
    coin_id: '1INCH',
    coin: '1inch',
    network: ['BEP20', 'ERC20'],
    withdrawal_fee: [0.32, 20],
    min_withdrawal: [0.16, 10]
  },
  {
    exchange_id: 'binance',
    coin_id: 'AGLD',
    coin: 'Adventure Gold',
    network: ['ERC20'],
    withdrawal_fee: [13],
    min_withdrawal: [6.9]
  },
  {
    exchange_id: 'binance',
    coin_id: 'ATEM',
    coin: 'ATEM',
    network: ['BEP20', 'ERC20'],
    withdrawal_fee: [0.5, 1],
    min_withdrawal: [0.2, 0.4]
  },
  {
    exchange_id: 'binance',
    coin_id: 'AUDIO',
    coin: 'Audius',
    network: ['ERC20'],
    withdrawal_fee: [32],
    min_withdrawal: [16]
  },
];

    const savedCoinDetails = await CoinDetail.create(coinData);
    res.json(savedCoinDetails);
  } catch (error) {
    console.error('Error creating coin details:', error);
    res.status(500).json({ error: 'Failed to create coin details' });
  }
};

// get coin detail

const coinDetail = async (req, res) => {
    try {
      const coins = await CoinDetail.getCoinDetail();
      res.json(coins);
    } catch (error) {
      console.error('Error retrieving coins:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

module.exports = {
  createCoinDetails,
  coinDetail,
};