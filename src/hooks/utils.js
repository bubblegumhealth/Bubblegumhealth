function numberFormat(amount,currency) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency:currency ? currency : 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export { numberFormat};