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
  price_change_percentage_24h: { type: Number, required: true },
  circulating_supply: Number,
  total_supply: Number,
  max_supply: Number,
  exchanges_compared: Number,
  slug: { type: String, required: true },
  last_updated: { type: Date, required: true },
});

const Coin = mongoose.model('coin', coinSchema);


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
            coinDetail.coin_id = coin.id;
            coinDetail.image = coin.image;
            await coinDetail.save();
            console.log(coinDetail.image)

            coin.slug = `${coin.id}-withdrawal-fee`;
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

module.exports = Coin;
