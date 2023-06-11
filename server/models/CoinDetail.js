const mongoose = require('mongoose');

const coinDetailSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  coin_id: {
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
  }
}, { timestamps: true }, { _id: true });

const CoinDetail = mongoose.model('coin_detail', coinDetailSchema);

// Define the getAllCoins method on the CoinDetail model
CoinDetail.getCoinDetail = async function () {
  try {
    const coins = await this.find();
    return coins;
  } catch (error) {
    console.error('Error retrieving coins:', error);
    throw error;
  }
};

module.exports = CoinDetail;
