const mongoose = require('mongoose');
const Coin = require('./Coin');

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
    type: [],
    required: true
  },
  min_withdrawal: {
    type: [],
    required: true
  },
  image : String,
  exchange_image:String,
  price : Number,
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

/**
 * Method to find the lowest and maximum withdrawal fee
 * @author Lovedeep
 * @created 24/06/2023 19:04
 * @param {*} coinId 
 * @returns 
 */
CoinDetail.coinStatistics = async (coinId) =>  {
  try {
    const coins = await CoinDetail.find({ coin_id: coinId });

    
    if (!coins || coins.length === 0) {
      return null;
      // throw new Error('No coins found');
    }

    let lowest_fee = Infinity;
    let maximum_fee = Infinity;

    coins.forEach((coin) => {
      let wFee = coin.withdrawal_fee.map(Number);
      const minFee = Math.min(...wFee);
      if (minFee < lowest_fee) {
        lowest_fee = minFee;
      }
    });

    coins.forEach((coin) => {
      let wFee = coin.withdrawal_fee;
      const maxFee = Math.max(...wFee);
      if (maxFee < maximum_fee) {
        maximum_fee = maxFee;
      }
    });

    return {lowest_fee,maximum_fee};
  } catch (error) {
    throw new Error(`Error finding lowest withdrawal fee: ${error.message}`);
  } 
}


CoinDetail.insertOrUpdateSingleCoinDetail = async (data) => {
    try{
      let coinId = data.coin_id;
      const coin = await Coin.getCoin(coinId);
      let coinData = {};
      var responseText = '';
      if(coin){
        const { exchange_id, coin_id , network ,withdrawal_fee, min_withdrawal } = data;

        data.symbol = coin.symbol;
        data.coin = coin.name;
        data.image = coin.image;
        data.withdrawal_fee = JSON.parse(withdrawal_fee);
        data.min_withdrawal = JSON.parse(min_withdrawal);
        data.network = JSON.parse(network);
        // data.exchange_image = String;
        data.price = coin.current_price;

        console.log(data);

        const filter = { exchange_id, coin_id };
        const update = { $set: data };
        const options = { upsert: true };

        const savedCoinDetails = await CoinDetail.findOneAndUpdate(filter, update, options);
        console.log(savedCoinDetails)
        if (savedCoinDetails === null) {
          console.log(`Document added: ${data.symbol} - ${exchange_id}`);
          responseText = `Document added: ${data.symbol} - ${exchange_id}`;
        } else {
          console.log(`Document updated: ${data.symbol} - ${exchange_id}`);
          responseText = `Document updated: ${data.symbol} - ${exchange_id}`;
        }
          return savedCoinDetails;
      }
      return 'coin not existed';
    }catch(error){
      throw new Error(`Error finding lowest withdrawal fee: ${error}`);
    }
}



module.exports = CoinDetail;
