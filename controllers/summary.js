export function createSummary(data, selectedProductType){
  const selectedProduct = selectedProductType.value;
  const summaryDiv = document.getElementById('summaryContainer');

  function getProductData(selectedProduct){
    console.log(`${selectedProduct} was selected`);
    const productData = data.filter(d => d['Product_Type'] === selectedProduct);
    console.log(productData);
  }

  const productTypeForm = document.getElementById('productTypeForm');
  productTypeForm.addEventListener('submit', function(event){
    event.preventDefault();
    const product = selectedProduct;
    getProductData(product);
  });

  getProductData(selectedProduct.value);
}