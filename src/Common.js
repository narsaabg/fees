import api from './api';

const statistics = async () => {
    try {
        return await api.get(`/api/statistics`);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}

module.exports = {
    statistics
}