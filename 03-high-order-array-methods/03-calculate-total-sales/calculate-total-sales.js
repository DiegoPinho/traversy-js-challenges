function calculateTotalSalesWithTax(products, taxRate) {
  let total = 0;

  products.forEach(product => {
    total = total + (product.price * product.quantity);
  });

  const taxes = (total * taxRate) / 100;
  return total + taxes;
}

module.exports = calculateTotalSalesWithTax;
