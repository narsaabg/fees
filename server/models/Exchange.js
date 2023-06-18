const axios = require('axios');
const CoinDetail = require('./CoinDetail');
const mongoose = require('mongoose');
const COINGECKO_API_URL = process.env.COINGECKO_API_URL;


const exchangeSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    exchange_id: { type: String, required: true },
    name: { type: String, default: null },
    coins_listed: { type: Number, default: null },
    country: { type: String, default: null },
    description: { type: String, default: null },
    image: { type: String, default: null },
    url: { type: String, default: null },
    trust_score: { type: Number, default: null },
    trade_volume_24h_btc: { type: String, default: null },
    slug: { type: String, default: null },
}, { timestamps: true }, { _id: true });

const Exchange = mongoose.model('exchange', exchangeSchema);


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
Exchange.getExchanges = async function (page, limit) {
    try {
      const skipAmount = (page - 1) * limit; 
  
      const [exchanges, totalCount] = await Promise.all([
          this.find().skip(skipAmount)
              .limit(limit),
          this.countDocuments()
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
   * Method to insert or update coins using cron job
   * @author Lovedeep
   * @created 18/06/2023 16:53
   * 
   * @param {*} page 
   */
  Exchange.insertFilteredCoins = async function (page) {
    try {
      // Fetch coins from API
      const response = await axios.get(
        `${COINGECKO_API_URL}/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&locale=en`
      );
      const exchangesFromAPI = response.data;
  
      for (const coin of exchangesFromAPI) {
        const coinDetail = await CoinDetail.findOne({ symbol: coin.symbol.toUpperCase(),coin:coin.name });
        
        if (coinDetail) {
            coinDetail.coin_id = coin.id;
            await coinDetail.save();

            coin.slug = `${coin.id}-withdrawal-fee`;
            const existingCoin = await Exchange.findOne({ id: coin.id });
          if (existingCoin) {
            // Update existing coin
            await Exchange.updateOne({ id: coin.id }, coin);
            console.log(`Coin updated: ${coin.id}`);
          } else {
            // Insert new coin
            await Exchange.create(coin);
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
   * Method is used to get the exchange table statistics
   * @author Lovedeep
   * @created 18/06/2023 21:16
   * 
   * @returns 
   */
  Exchange.statistics = async function () {
    try{
      const count = await Exchange.countDocuments();
      return {count}
    }catch(error){
      console.error('An error occurred:', error.message);
    }
  }

module.exports = Exchange;