const axios = require('axios');
const CoinDetail = require('./CoinDetail');
const mongoose = require('mongoose');
const COINGECKO_API_URL = process.env.COINGECKO_API_URL;


const coinSchema = new mongoose.Schema({
  id: { type: String, required: true },
  symbol: { type: String, required: true },
  name: { type: String, required: true },
  image: String,
  current_price: { type: Number, required: true },
  total_volume: { type: Number, required: true },
  price_change_percentage_24h: { type: Number },
  lowest_fee: Number,
  maximum_fee: Number,
  circulating_supply: Number,
  total_supply: Number,
  max_supply: Number,
  exchanges_compared: Number,
  slug: { type: String, required: true },
  last_updated: { type: Date, required: true },
});

const Coin = mongoose.model('coin', coinSchema);

/**
 * Method is created to find the single coin record
 * @author Lovedeep
 * @created 25/06/2023
 * 
 * @param {*} coinId 
 * @returns 
 */
Coin.getCoin = async (coinId) => {
  try {
    const coin = await Coin.findOne({ id: coinId});
    return coin;
  }catch(error){
    console.error('Error retrieving coins:', error);
    throw error;
  }
}

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
Coin.getCoins = async function (page, limit) {
    try {
      const skipAmount = (page - 1) * limit; 
  
      const [coins, totalCount] = await Promise.all([
          this.find().skip(skipAmount)
              .limit(limit),
          this.countDocuments()
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
   * Method to insert or update coins using cron job
   * @author Lovedeep
   * @created 18/06/2023 16:53
   * 
   * @param {*} page 
   */
Coin.insertFilteredCoins = async function (page) {
    try {
      // Fetch coins from API
      const response = await axios.get(
        `${COINGECKO_API_URL}/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&locale=en`
      );
      const coinsFromAPI = response.data;
        
      for (const coin of coinsFromAPI) {
        const coinDetail = await CoinDetail.findOne({ symbol: coin.symbol.toUpperCase()});
        if (coinDetail) {
          console.log(`Coin found: ${coin.id}`);
            
            coinDetail.coin_id = coin.id;
            coinDetail.image = coin.image;
            coinDetail.price = coin.current_price;
            await coinDetail.save();

            coin.slug = `${coin.id}-withdrawal-fee`;

            // add lowest and maximum fees 
            const sttc = await CoinDetail.coinStatistics(coin.id);
            console.log(sttc);
            if (sttc !== null && typeof sttc !== 'undefined') {
              coin.lowest_fee = sttc.lowest_fee;
              coin.maximum_fee = sttc.maximum_fee;
            }

            // add exchanges compared
            const exCompared = await CoinDetail.countDocuments({ coin_id: coin.id });
            if (exCompared !== null && typeof exCompared !== 'undefined') {
              coin.exchanges_compared = exCompared;
            }

            
            const existingCoin = await Coin.findOne({ id: coin.id });
            if (existingCoin) {
              // Update existing coin
              await Coin.updateOne({ id: coin.id }, coin);
              console.log(`Coin updated: ${coin.id}`);
            } else {
              // Insert new coin
              await Coin.create(coin);
              console.log(`Coin inserted: ${coin.id}`);
            }
        }
      }
  
      console.log('Insertion and update completed!');
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  /**
   * Method is used to get the coin table statistics
   * @author Lovedeep
   * @created 18/06/2023 21:16
   * 
   * @returns 
   */
  Coin.statistics = async function () {
    try{
      const count = await Coin.countDocuments();
      return {count}
    }catch(error){
      console.error('An error occurred:', error.message);
    }
  }

  /**
   * Method is used to make search on coins
   * @author Lovedeep
   * @created 24/06/2023
   * @param {*} query 
   * @returns 
   */
  Coin.search = async function (query) {
    try {
      // Perform the search query
      const searchResults = await Coin.find({
        $or: [
          { name: { $regex: query, $options: 'i' } }, // Search by name (case-insensitive)
          { symbol: { $regex: query, $options: 'i' } } // Search by symbol (case-insensitive)
        ]
      });
  
      return searchResults;
    } catch (err) {
      console.error('Error occurred while searching:', err);
    }
  }

Coin.singleCoin = async function (coinId) {
  try {
    // Fetch coins from API
    const response = await axios.get(
        `${COINGECKO_API_URL}/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&locale=en`
    );
    const coinsFromAPI = response.data;

    for (const coin of coinsFromAPI) {
      const coinDetail = await CoinDetail.findOne({ symbol: coin.symbol.toUpperCase()});
      if (coinDetail) {
        console.log(`Coin found: ${coin.id}`);

        coinDetail.coin_id = coin.id;
        coinDetail.image = coin.image;
        coinDetail.price = coin.current_price;
        await coinDetail.save();

        coin.slug = `${coin.id}-withdrawal-fee`;

        // add lowest and maximum fees
        const sttc = await CoinDetail.coinStatistics(coin.id);
        console.log(sttc);
        if (sttc !== null && typeof sttc !== 'undefined') {
          coin.lowest_fee = sttc.lowest_fee;
          coin.maximum_fee = sttc.maximum_fee;
        }

        // add exchanges compared
        const exCompared = await CoinDetail.countDocuments({ coin_id: coin.id });
        if (exCompared !== null && typeof exCompared !== 'undefined') {
          coin.exchanges_compared = exCompared;
        }


        const existingCoin = await Coin.findOne({ id: coin.id });
        if (existingCoin) {
          // Update existing coin
          await Coin.updateOne({ id: coin.id }, coin);
          console.log(`Coin updated: ${coin.id}`);
        } else {
          // Insert new coin
          await Coin.create(coin);
          console.log(`Coin inserted: ${coin.id}`);
        }
      }
    }

    console.log('Insertion and update completed!');
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

/**
 * Method is used to get the select options of coins
 * @author Lovedeep
 * @created 19/07/2023 08:34
 * */
Coin.coinsSelectOptions = async function () {
  try {
    const coins = await this.find();
    return coins.map((coin) => ({
      value: coin.id,
      label: coin.name
    }));
  } catch (error) {
    console.error('Error retrieving exchanges:', error);
    throw error;
  }
};

/**
 * Insert single coin or update
 * @author Lovedeep
 * @created 25/07/2023 14:50
 *
 * */
Coin.insertSingleCoin = async function (coinId) {
  try {
    let operation = 'Created';
    const coinData = {};
    // Fetch coins from API
    const response = await axios.get(
        `${COINGECKO_API_URL}/v3/coins/${coinId}?localization=false&tickers=false&community_data=false`
    );
    const coinFromAPI = response.data;
    if(coinFromAPI){
      coinData.id = coinId ?? '';
      coinData.symbol = coinFromAPI.symbol ?? '';
      coinData.name = coinFromAPI.name ?? '';
      coinData.image = coinFromAPI.image?.small ?? '';
      coinData.current_price = coinFromAPI.market_data?.current_price?.usd ?? 0;
      coinData.total_volume = coinFromAPI.market_data?.total_volume?.usd ?? 0;
      coinData.price_change_percentage_24h = coinFromAPI.market_data?.price_change_percentage_24h ?? 0;
      coinData.circulating_supply = coinFromAPI.market_data?.circulating_supply ?? 0;
      coinData.total_supply = coinFromAPI.market_data?.total_supply ?? 0;
      coinData.max_supply = coinFromAPI.market_data?.max_supply ?? 0;
      coinData.slug = `${coinId}-withdrawal-fee`;
      coinData.last_updated = coinFromAPI.last_updated ?? new Date();

     const existingCoin = await Coin.findOne({ id: coinId });
     if (existingCoin) {
     // Update existing coin
     await Coin.updateOne({ id: coinId }, coinData);
     console.log(`Coin updated: ${coinId}`);
     operation = `Coin updated: ${coinId}`;
     } else {
     // Insert new coin
     await Coin.create(coinData);
     console.log(`Coin inserted: ${coinId}`);

     operation = `Coin inserted: ${coinId}`;
     }
     return operation;
     }
    console.log('Insertion and update completed!');
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

module.exports = Coin;
