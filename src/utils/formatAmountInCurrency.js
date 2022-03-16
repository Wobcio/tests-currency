export const formatAmountInCurrency = (amount, currency) => {

  let formatter;

  if(currency === 'USD'){
    formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }
  if(currency === 'PLN'){
    formatter = new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'PLN',
    });
  }
 

  return formatter.format(amount);
};