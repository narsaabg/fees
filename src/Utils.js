import api from './api';

export const statistics = async () => {
  try {
    return await api.get(`/api/statistics`);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const multiplyAndFormat = (amount) => {
  const parts = amount.toString().split('.');
  if (parts.length === 1) {
    return amount;
  }
  
  const integerPart = parts[0];
  let decimalPart = parts[1];

  let tillPos = 2;
  let k = 0;
  for (let i = 0; i < decimalPart.length; i++) {
    if (decimalPart[i] !== '0' && k < 2) {
      k++;
      tillPos = i;
    }
  }
  
  if (decimalPart.length > 2) {
    decimalPart = decimalPart.replace(/0+$/, '');
    if (decimalPart.length > 2) {
      decimalPart = decimalPart.substring(0, tillPos + 1);
    }
    amount = decimalPart !== '' ? `${integerPart}.${decimalPart}` : integerPart;
  }
  
  return amount;
};

