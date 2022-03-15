export const convertPLNToUSD = (PLN) => {

  if (typeof PLN !== 'number'){
    return NaN;
  }else if (PLN < 0){
    PLN = 0;
  }

  const PLNtoUSD = PLN / 3.5;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD);
}