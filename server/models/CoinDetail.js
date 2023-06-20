const mongoose = require('mongoose');

/**
 * coin_detail collection schema
 * @author Lovedeep
 * @created 12/06/2023
 */
const coinDetailSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  coin_id: {
    type: String,
    // required: true
  },
  symbol: {
    type: String,
    required: true
  },
  exchange_id: {
    type: String,
    required: true
  },
  coin: {
    type: String,
    required: true
  },
  network: {
    type: [String],
    required: true
  },
  withdrawal_fee: {
    type: [Number],
    required: true
  },
  min_withdrawal: {
    type: [Number],
    required: true
  },
  image : String
}, { timestamps: true }, { _id: true });

const CoinDetail = mongoose.model('coin_detail', coinDetailSchema);

/**
 * Method is used to get the coins by exchnage Id
 * @author Lovedeep
 * @created 14/06/2023 11:03
 * @changeLog
 * -- Pagination added 15.06.2023
 * 
 * @param {*} exchangeId 
 * @returns 
 */
CoinDetail.getExchangeCoins = async function (exchangeId, page, limit) {
  try {
    const skipAmount = (page - 1) * limit; 

    const [coins, totalCount] = await Promise.all([
        this.find({ exchange_id: exchangeId })
            .skip(skipAmount)
            .limit(limit),
        this.countDocuments({ exchange_id: exchangeId })
      ]);

      const totalPages = Math.ceil(totalCount / limit);

    return {
      coins,
      totalCoins: totalCount,
      totalPages,
      currentPage: page
    };

  } catch (error) {
    console.error('Error retrieving coins:', error);
    throw error;
  }
};

/**
 * Method is used to get the exchanges of coin listed on
 * @author Lovedeep
 * @created 14/06/2023 11:07
 * 
 * @param {*} coinId 
 * @returns 
 */
CoinDetail.getCoinExchanges = async function (coinId, page, limit) {
  try {
    const skipAmount = (page - 1) * limit; 

    const [exchanges, totalCount] = await Promise.all([
        this.find({ coin_id: coinId })
            .skip(skipAmount)
            .limit(limit),
        this.countDocuments({ coin_id: coinId })
      ]);

      const totalPages = Math.ceil(totalCount / limit);

    return {
      exchanges,
      totalCoins: totalCount,
      totalPages,
      currentPage: page
    };

  } catch (error) {
    console.error('Error retrieving coins:', error);
    throw error;
  }
};

/** 
 * Update Multiple Json data collection at once
 * @author Lovedeep 
 * @created 14/06/2023 23:00
 */
CoinDetail.upsertData = async (jsonData) =>  {
  try {
    for (const data of jsonData) {
      const { exchange_id, symbol } = data;

      const filter = { exchange_id, symbol };
      const update = { $set: data };
      const options = { upsert: true };
      
      const savedCoinDetails = await CoinDetail.findOneAndUpdate(filter, update, options);
      if (savedCoinDetails === null) {
        console.log(`Document added: ${symbol} - ${exchange_id}`);
      } else {
        console.log(`Document updated: ${symbol} - ${exchange_id}`);
      }
    }
  } catch (error) {
    console.error('An error occurred during insertion:', error);
  }
}

module.exports = CoinDetail;
