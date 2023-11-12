import {loadData} from '../controllers/dataLoader.js';
import {createSummary} from '../controllers/summary.js'
async function main() {
  try{
    const data = await loadData();
    console.log(data);

    const selectedProductType = document.getElementById('productType');
    createSummary(data, selectedProductType);
  }
  catch (error) {
    console.error(error);
  }
}
main();
